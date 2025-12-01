



-------------------------------------------------------

# REST API

-------------------------------------------------------

## Vocab

RESTful conventions = RESTful Endpoint conventions

Resource = Data → i.e. List Resources = Get All Items In A Collection

Idempotent = Making the same request multiple times in a row has the same effect as making it once.

Safe = read-only operation = does not change the server’s state

-------------------------------------------------------

## What Is The Essence Of A REST API ?

A REST API exposes data as resources and uses standard HTTP methods (GET, POST, PUT, DELETE, etc.) to act on those resources in a consistent, predictable way.

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

**TODO**

- Provide an example REST API design for your project
- Generate OpenAPI/Swagger documentation
- Compare REST vs GraphQL vs gRPC




