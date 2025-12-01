



-------------------------------------------------------

# REST API

-------------------------------------------------------

## Vocab

RESTful conventions = RESTful Endpoint conventions

Resource = Data → i.e. List Resources = Get All Items In A Collection

Idempotent = Making the same request multiple times in a row has the same effect as making it once.

Safe = read-only operation = does not change the server’s state

HTTP verbs = HTTP methods

-------------------------------------------------------

## What Is The Essence Of A REST API ?

REST = Resources + Standard HTTP verbs + Statelessness + Uniform rules.

Data exposed as resources.

Uses standard HTTP methods (GET, POST, PUT, DELETE, etc.)

Each request is stateless.

Responses are uniform, predictable.

Aim: act on resources in a consistent, predictable way.

-------------------------------------------------------

## What Is Meant By "REST API Are Stateless" ?

Each request must contain everything needed to process it.
 - The server keeps no session data about the client.
 - No hidden "state" between calls.

-------------------------------------------------------

## What Is The Reason Of Making REST API Stateless ?

This makes REST scalable.

-------------------------------------------------------

## What are RESTful conventions ?

RESTful conventions = RESTful Endpoint conventions

RESTful conventions describe a **predictable**, **resource-oriented** way of designing HTTP APIs.

Everything is treated as a `resource`, and the `HTTP method` expresses the action.

Resource = Data → i.e. List Resources = Get All Items In A Collection

**Overview**

The convention combines: 1/ `Base URL` + 2/ `Method` + 3/ `ID` (optional)

1. Base URL (represents a collection) examples: `/users`, `/products`, `/orders`

2. Method examples: `GET`, `POST`, `PUT`, `PATCH`, `DELETE`

3. ID examples: `123`, `user120394`

You might see the above described as: 
 - `GET /`, `GET /:id`, `POST /`, `PUT /:id`, `DELETE /:id`, etc
 - the base URL is omitted bc implied, the pattern repeats itself no matter the collection targeted

-------------------------------------------------------

## Example Users Resource (Fully RESTful)

| Method | Endpoint   | Meaning                        |
| ------ | ---------- | ------------------------------ |
| GET    | /users     | List all users                 |
| POST   | /users     | Create new user                |
| GET    | /users/123 | Get user by ID                 |
| PUT    | /users/123 | Replace full user record       |
| PATCH  | /users/123 | Update part of the user record |
| DELETE | /users/123 | Delete user                    |

-------------------------------------------------------

## Typical Implementation If Getting Many Resources From One Collection?

****

GET →  GET /users → *List all users*
* Returns an array or paginated list.
* *Should not modify anything* (idempotent and safe).

-------------------------------------------------------

## Typical Implementation If Getting One Resource From One Collection?

**GET /:id → GET /users/123** → *Retrieve a single user*
* Access an individual resource.
* Should be *safe*, meaning no side effects.

Example Response:

```
200 OK
{
  "id": 123,
  "name": "Alice",
  "email": "alice@example.com"
}
```

-------------------------------------------------------

## Typical Implementation If Creating A Resource In A Collection?

**POST → i.e. POST /users** → *Create a new user*
* POST is used on the **collection** URL.
* A new resource is created by sending JSON in the request body.
* The server generates a new ID.
* Returns `201 Created` and often the created object or its URI.

Example Request:

```
POST /users
{
  "name": "Alice",
  "email": "alice@example.com"
}
```

-------------------------------------------------------

## Typical Implementation If *Entirely* Updating One Resource From One Collection?

**PUT /:id → i.e. PUT /users/123** → *Replace a resource*

* Replaces **the entire object**, not a partial update.
* Should be idempotent (sending the same request multiple times yields the same state).

Example Request:

```
PUT /users/123
{
  "name": "Alice Smith",
  "email": "alice.smith@example.com"
}
```

> If you want partial updates, REST often uses **PATCH** instead of PUT.

-------------------------------------------------------

## Typical Implementation If *Partially* Updating One Resource From One Collection?

> Partial updates implementation is optional but common.

**PATCH /:id → i.e. PATCH /users/123** → *Partially update a resource*

* Only changes the fields provided.
* Not necessarily idempotent.

Example:

```
PATCH /users/123
{
  "email": "alice@newmail.com"
}
```

-------------------------------------------------------

## Typical Implementation If Deleting One Resource From One Collection?

**DELETE /:id → DELETE /users/123** → *Delete a resource*

* Removes the resource permanently.
* Idempotent: deleting twice returns either `204` or `404`.

-------------------------------------------------------

## Which Methods Are Idempotent?

GET, PUT, DELETE

| Method | Idempotent? | Safe? | Typical Use    |
| ------ | ----------- | ----- | -------------- |
| GET    | Yes         | Yes   | Read           |
| POST   | No          | No    | Create         |
| PUT    | Yes         | No    | Replace / Full Update |
| PATCH  | Not always  | No    | Partial Update |
| DELETE | Yes         | No    | Delete         |

Idempotent = Making the same request multiple times in a row has the same effect as making it once.

Safe = read-only operation = does not change the server’s state

-------------------------------------------------------

## What Are Some Additional Best Practices?

**Use plural nouns**

```
/users
/products
/orders
```

**Use nouns, not verbs**

❌ /getUser
❌ /createUser
✔️ /users/123 (GET retrieves, POST creates)

**Use query parameters for filtering/pagination**

```
GET /users?page=2&pageSize=20
GET /products?category=phones&sort=price
```

**Return proper HTTP status codes**

* **200 OK**
* **201 Created**
* **400 Bad Request**
* **401 Unauthorized**
* **404 Not Found**
* **409 Conflict** (e.g., duplicate email)
* **500 Internal Server Error**

-------------------------------------------------------

## Difference Between Base URL vs Endpoint ?

The base URL is the root path for a resource collection - i.e. /users, /products, /orders

An endpoint is any specific path + method combination that the API exposes. Examples:

```
GET /users          ← endpoint
POST /users         ← endpoint
GET /users/123      ← endpoint
PUT /users/123      ← endpoint
DELETE /users/123   ← endpoint
```

-------------------------------------------------------

## What Is Meant By "PATCH Implementation Is Optional But Common" ?

`PATCH` is optional because not all APIs choose to support partial updates as a separate operation.
Different API designs handle updates differently.

`PATCH` is the official HTTP method for partial updates (Strict REST), but some APIs choose alternatives:

1. Some APIs allow only full updates (using `PUT`), and no partial updates at all
2. Some APIs support partial updates, but not using `PATCH` - i.e. using `POST`


| Scenario                | Full update | Partial update       | Common?            | “RESTful”?      |
| ----------------------- | ----------- | -------------------- | ------------------ | --------------- |
| **A. PUT only**         | PUT         | ❌ No partial updates | Yes                | Yes             |
| **B. POST for updates** | POST        | POST                 | Yes (legacy/mixed) | Not strict REST |
| **C. PUT + PATCH**      | PUT         | PATCH                | Most modern APIs   | Most RESTful    |

-------------------------------------------------------

## What is meant by "The URL identifies the resource, not the action" ?

REST avoids verbs in URLs.

❌ /createUser
❌ /deleteOrder

✔️ /users
✔️ /orders/55

The `HTTP method` expresses the action.

-------------------------------------------------------

## What is meant by "Standard HTTP methods have meaning" ?

REST uses the semantics of HTTP instead of inventing new operations.

| Method     | Meaning        | Example           |
| ---------- | -------------- | ----------------- |
| **GET**    | Read           | GET /users        |
| **POST**   | Create         | POST /users       |
| **PUT**    | Replace        | PUT /users/123    |
| **PATCH**  | Partial update | PATCH /users/123  |
| **DELETE** | Remove         | DELETE /users/123 |

-------------------------------------------------------

## What Is Meant By "Uniform, predictable responses" ?

Clients should know what to expect:
- Standard status codes (200, 201, 404, 400, etc.)
- Standard error formats
- Standard representation types (usually JSON)

-------------------------------------------------------

## What Are The Categories Of HTTP Response Codes ?

5 classes:

| Class   | Meaning                                    |
| ------- | ------------------------------------------ |
| **1xx** | Informational — rarely used                |
| **2xx** | Success — the request succeeded            |
| **3xx** | Redirect — client should go somewhere else |
| **4xx** | Client error — the request is wrong        |
| **5xx** | Server error — the server failed           |

-------------------------------------------------------

## Can You Match Common `REST API Endpoints` To `HTTP Response Codes` ?

| Endpoint       | Method | Typical Success | Typical Errors               |
| -------------- | ------ | --------------- | ---------------------------- |
| `/users`       | GET    | 200             | 400, 401                     |
| `/users`       | POST   | 201             | 400, 401, 409, 422           |
| `/users/:id`   | GET    | 200             | 401, 403, 404                |
| `/users/:id`   | PUT    | 200 / 204       | 400, 401, 403, 404, 409, 422 |
| `/users/:id`   | PATCH  | 200 / 204       | 400, 401, 403, 404, 409, 422 |
| `/users/:id`   | DELETE | 204             | 401, 403, 404                |

In details:

| Endpoint       | Method | Success Codes              | Common Error Codes                                                                                      |
| -------------- | ------ | -------------------------- | ------------------------------------------------------------------------------------------------------- |
| `/users`       | GET    | 200 OK, 204 No Content     | 400 Bad Request, 401 Unauthorized                                                                       |
| `/users`       | POST   | 201 Created                | 400 Bad Request, 401 Unauthorized, 403 Forbidden, 409 Conflict, 422 Unprocessable Entity                |
| `/users/:id`   | GET    | 200 OK                     | 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found                                         |
| `/users/:id`   | PUT    | 200 OK, 204 No Content     | 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 409 Conflict, 422 Unprocessable Entity |
| `/users/:id`   | PATCH  | 200 OK, 204 No Content     | 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 409 Conflict, 422 Unprocessable Entity |
| `/users/:id`   | DELETE | 204 No Content             | 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found                                         |

-------------------------------------------------------

## Can You Match `HTTP Response Codes` To Common `REST API Endpoints`?

| Code                          | Name                          | When Used (REST)             |
| ----------------------------- | ----------------------------- | ---------------------------- |
| **200 OK**                    | Success                       | GET, PUT, PATCH              |
| **201 Created**               | Resource created              | POST                         |
| **202 Accepted**              | Accepted, async processing    | async jobs                   |
| **204 No Content**            | Success, no body              | PUT, PATCH, DELETE           |
| **301 Moved Permanently**     | Permanent redirect            | rare in APIs                 |
| **302 Found**                 | Temporary redirect            | rare in APIs                 |
| **304 Not Modified**          | Cached resource unchanged     | GET with ETag                |
| **400 Bad Request**           | Invalid request               | wrong format, missing fields |
| **401 Unauthorized**          | Not authenticated             | JWT missing/invalid          |
| **403 Forbidden**             | Authenticated but not allowed | permissions                  |
| **404 Not Found**             | Resource does not exist       | ID not found                 |
| **409 Conflict**              | Data conflict                 | duplicate email, versioning  |
| **422 Unprocessable Entity**  | Validation failed             | semantic errors              |
| **429 Too Many Requests**     | Rate limit hit                | throttling                   |
| **500 Internal Server Error** | Server crashed                | unknown failure              |
| **502 Bad Gateway**           | Upstream error                | microservices                |
| **503 Service Unavailable**   | Server down/overloaded        | maintenance                  |
| **504 Gateway Timeout**       | Upstream timeout              | slow microservice            |













-------------------------------------------------------

**TODO**

- OpenAPI/Swagger documentation
- REST best practices
- “Pure REST” (HATEOAS) vs practical REST
- Example REST API design for your project
- REST vs GraphQL
- REST vs gRPC




