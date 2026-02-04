



-------------------------------------------------------

# REST API Basics

-------------------------------------------------------

## Vocab

RESTful conventions = RESTful Endpoint conventions

Resource = Data = Entities = Objects = Models = Domain Objects/Entities = Data Objects

 → i.e. List Resources = Get All Items In A Collection

Idempotent = Making the same request multiple times in a row has the same effect as making it once.

Safe = read-only operation = does not change the server’s state

HTTP verbs = HTTP methods = Request Methods = REST Verbs = HTTP Request Methods

HTTP Response Codes = HTTP Status Codes = Status Codes = HTTP Codes = Response Status Codes = Server Response Codes = REST API Status Codes

HTTP Headers = Metadata = Data About Data

REST API endpoints = Routes = Paths = URL Paths = API Paths = Resource URLs = API Endpoints

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

**No trailing forward slash**

/users
❌ /users/

**Use hyphens**

/user-preferences
❌ /userpreferences

**Use hierarchical relationships**

/user/cart-items	

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

# Architecture

-------------------------------------------------------

## Typical Architectures

**1. Layered Architecture:** folders config, loaders, apo, services, repositories, models, etc

**2. Domain-Driven (DDD) Architecture:** folders shared, users, products, auth, etc

-------------------------------------------------------

## Layered Architecture

> Recommended for Most Projects

A clean separation of concerns improves maintainability, testability, and scalability.

```
src/
 ├── config/
 ├── loaders/          → startup logic (db, queues, cron)
 ├── api/
 │    ├── routes/
 │    ├── controllers/
 │    ├── validators/
 │    ├── middlewares/
 ├── services/
 ├── repositories/      → DB access layer
 ├── models/            → ORM/Schema definitions
 ├── utils/
 ├── app.js
 └── server.js
```

-------------------------------------------------------

## Why Use a Layered Architecture ?

* Separation of concerns
* Easy testing (mock services, mock repositories)
* Code remains clean as project grows

-------------------------------------------------------

## Layered Architecture: `config/` directory

Centralized configuration using environment variables:

```
config/
 ├── env.js
 ├── database.js
 ├── logger.js
```

Use **dotenv** or **dotenv-flow** + a typed config validator (e.g., `zod`, `joi`).

-------------------------------------------------------

## Layered Architecture: `loaders/` directory

Keeps startup logic organized:

```
loaders/
 ├── express.js
 ├── mongoose.js
 ├── redis.js
 └── events.js
```

Your `server.js` becomes clean:

```js
import expressLoader from './loaders/express.js';
import dbLoader from './loaders/mongoose.js';

(async () => {
  await dbLoader();
  const app = await expressLoader();
})();
```

-------------------------------------------------------

## Layered Architecture: `api/routes/` directory

Organize routes by domain (modular):

```
routes/
 ├── user.routes.js
 ├── auth.routes.js
 └── product.routes.js
```

-------------------------------------------------------

## Layered Architecture: `api/controllers/` directory

Thin controllers — *no business logic*:

```js
export const createUser = async (req, res, next) => {
  const user = await userService.createUser(req.body);
  res.status(201).json(user);
};
```

-------------------------------------------------------

## Layered Architecture: `services/` directory

Contains business logic (independent of HTTP):

```js
export const createUser = async (payload) => {
  const existing = await userRepo.findByEmail(payload.email);
  if (existing) throw new ConflictError("Email already exists");

  return userRepo.create(payload);
};
```

-------------------------------------------------------

## Layered Architecture: `repositories/` directory

Data Access Layer - layer between services and database:

```js
export const findByEmail = (email) => UserModel.findOne({ email });
```

Keeps services DB-agnostic (MongoDB → PostgreSQL becomes easier).

-------------------------------------------------------

## Layered Architecture: `models/`

Database models (Mongoose, Prisma, Sequelize, etc.).

-------------------------------------------------------

## Layered Architecture: `middlewares/`

Generic HTTP pipeline logic:

* Authentication
* Authorization
* Rate limiting
* Logging
* Error handler

Error handler example:

```js
export function errorHandler(err, req, res, next) {
  console.error(err);
  res.status(err.status || 500).json({ message: err.message });
}
```

-------------------------------------------------------

## Domain-Driven (DDD) Architecture

Use if your API will grow large or is enterprise-level.

```
src/
 ├── modules/
 │    ├── user/
 │    │    ├── user.controller.js
 │    │    ├── user.service.js
 │    │    ├── user.repository.js
 │    │    ├── user.model.js
 │    │    └── user.routes.js
 │    └── auth/
 │         ├── auth.controller.js
 │         ├── auth.service.js
 │         ├── auth.routes.js
 ├── shared/
 └── server.js
```

* Highly modular
* Each domain is self-contained
* Best for microservices/multi-team projects

-------------------------------------------------------






















-------------------------------------------------------

# Methodologies To Build REST APIs

-------------------------------------------------------

## Intro

This is NOT abt the implementation details, but the *how to approach the work* (process, methodology, principles).

-------------------------------------------------------

## **1. Test-Driven Development (TDD)**

You already mentioned this. TDD focuses on:

* Write failing test → write minimal code → refactor
* Ensures contract clarity before implementation
* Encourages small, coherent components
* Prevents regression

For APIs, this usually means writing tests around:

* Endpoints
* Validation
* Auth flows
* Error responses

-------------------------------------------------------

## **2. API-First (Design-First) Development**

This is one of the **most widely recommended methodologies** for REST APIs.

**Process:**

1. Design your API contract first (OpenAPI/Swagger).
2. Get stakeholders aligned (backend, frontend, QA).
3. Generate stubs or mock servers.
4. Then implement the backend.

**Benefits**

* Shared language for developers
* Upfront thinking about resources, structure, naming
* Faster iteration because front-end can develop in parallel
* Prevents breaking changes later

**Tools**

* Swagger/OpenAPI
* Postman Collections
* Stoplight
* Apiary

-------------------------------------------------------

## **3. Domain-Driven Design (DDD)**

Not REST-specific, but widely used when building complex APIs.

**Use DDD if:**

* You have a large domain
* Many interacting entities
* Long-term complexity to manage

Focuses on:

* Ubiquitous language
* Aggregate roots
* Bounded contexts
* Modeling your API resources around domain concepts

**Why it matters for REST:**

* REST resources = often close to DDD aggregates
* Leads to clearer, stable endpoints

-------------------------------------------------------

## **4. Iterative / Incremental API Evolution (Agile API development)**

Build endpoints in small vertical slices:

1. Identify a user scenario
2. Define the minimal endpoints supporting it
3. Release early
4. Monitor usage
5. Evolve API without breaking changes

Often paired with:

* Feature flags
* Versioning strategies
* Changelogs

-------------------------------------------------------

## **5. Consumer-Driven Contracts (CDC)**

Very popular in microservice architecture.

**Idea:**
Consumers define expectations on provider APIs, and provider tests against these expectations.

Tools:

* Pact
* Spring Cloud Contract

Benefits:

* Avoids breaking changes
* Forces clarity on what the consumer needs
* Enables independent deployments

-------------------------------------------------------

## **6. Behavior-Driven Development (BDD)**

Similar to TDD but focuses on business language.

Write tests like:

```
Given I am an authenticated user
When I GET /orders
Then I should receive a list of my orders
```

Tools:

* Cucumber
* Gherkin

Good when:

* Product managers and QA collaborate
* Requirements need to stay readable

-------------------------------------------------------

# 🔧 **Best Practices (Method-Level Principles)**

These are **not** implementation details but concepts guiding *how to build* a good REST API.

-------------------------------------------------------

## **2. Consistency over cleverness**

Pick conventions *early* and enforce them:

* Naming
* Pagination
* Filtering
* Error format
* Authentication shape

Use linters or style guides:

* OpenAPI linter (Spectral)
* API style guide (GitHub, Stripe, Google guidelines)

---

## **3. Design for backward compatibility**

Methodological principle:

> Avoid breaking changes; evolve safely.

Use:

* Additive changes only
* Explicit versioning (`/v1/...`)
* Deprecation notices

---

## **4. Make error handling explicit**

Define errors upfront:

* Error structure
* Error codes
* HTTP status mapping

Don’t improvise errors as you go.

---

## **5. Document continuously**

Don’t treat documentation as a last step.
Good APIs:

* Are self-documenting (OpenAPI)
* Have auto-updated docs (Swagger UI)
* Include examples

Documentation should evolve *with* the API, not after.

---

## **6. Validate input at the boundary**

Methodology:

> Validation is part of your API contract.

Define validation rules in the API specification first.

---

## **7. Think about observability early**

Don’t wait until production.

Plan early for:

* Logs
* Structured error reports
* Metrics
* Tracing (OpenTelemetry)

---

## **8. Security from the start (Shift-left security)**

Do not bolt on later.

Security-first processes:

* Threat modeling
* Consistent auth flow (OAuth2 / JWT etc.)
* API gateway rules
* Rate limits
* Secrets handling

-------------------------------------------------------

# 🌟 **Famous Guiding Principles**

These are classic references when deciding *how* to build APIs:

### **1. Richardson Maturity Model (RMM)**

Levels of API “RESTfulness”

* Level 0: RPC
* Level 1: Resources
* Level 2: HTTP verbs
* Level 3: HATEOAS (optional)

Helps you evaluate coherence, not design details.

---

### **2. REST Constraints (Roy Fielding)**

Conceptual rules for REST method:

* Statelessness
* Uniform interface
* Cacheability
* Layered system

Useful for setting architectural mindset.

---

### **3. 12-Factor App Principles (for service side)**

Not API-specific, but shapes *how you build and deploy*:

* Config in environment
* Dev/prod parity
* Logs as event streams

---

### **4. OpenAPI Guidelines (e.g., Microsoft/Google)**

Blueprints for API methodology:

* Consistent naming
* Semantic versioning
* Pagination patterns

---

# 📌 Summary: Methodologies for Building REST APIs

| Category               | Methodologies                                               |
| ---------------------- | ----------------------------------------------------------- |
| **Testing-first**      | TDD, BDD, CDC                                               |
| **Design-first**       | API-First, OpenAPI-first                                    |
| **Architecture-first** | DDD, RMM, REST constraints                                  |
| **Process-first**      | Agile slices, continuous documentation, shift-left security |










-------------------------------------------------------

# More

-------------------------------------------------------

**1. ARCHITECTURE & CODE QUALITY**

- Proper layered architecture (services, controllers, routes, etc)
- Request validation middleware using zod
- Global error handling middleware
- Custom error classes (ValidationError, DatabaseError, etc.)
- Standardized API response format
- Dependency injection pattern

**2. DATABASE**

- Database schema doesn't match frontend TypeScript types - must align before implementing CRUD
- Database seeding strategy (separate from migrations)
- Transaction handling for complex operations (bookings)
- ORM/query builder consideration (Prisma) for type safety
- Soft vs hard delete policy

**3. API DESIGN**

- Pagination for list endpoints
- Filtering & sorting query parameters
- Rate limiting middleware (express-rate-limit)
- API versioning strategy (/api/v1/...)
- Search functionality with complex filters

**4. BUSINESS LOGIC**

- Bookings CRUD endpoints (separate from Trips/Users)
- Booking constraints (seat availability, can't book own trip)
- Trip cancellation logic
- User rating calculations after trips
- Notification system (email/SMS for bookings)

**5. TESTING**

- Unit tests for services/repositories
- Integration tests for API endpoints
- Test database setup & teardown
- E2E API contract testing
- Minimum coverage thresholds

**6. DEVOPS & DEPLOYMENT**

- CI/CD pipeline setup
- Environment configuration validation
- Process management (PM2) for production
- Database migration strategy for production












-------------------------------------------------------

# Misc Best Practices

-------------------------------------------------------

## HTTPS

---

## API Versioning

```
/api/v1/users
/api/v2/users
```

---

## Use DTOs + Validation

Example with `zod`, `joi`, or `yup`:

```js
const CreateUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});
```

---

## Follow 12-Factor App Principles

* `.env` for secrets (never commit them)
* Stateless services
* Logs to stdout

---

## Logging & Monitoring

Use:

* **Winston / Pino** for logs
* **Prometheus + Grafana** or **OpenTelemetry** for metrics

---

## Security Best Practices

* Helmet
* Rate-limiting
* Avoid exposing stack traces in production
* Sanitize input (MongoDB injection, etc.)

---

## Use CI/CD + Automated Tests

Testing strategy:

* **Unit tests** → services, utilities
* **Integration tests** → controllers/routes
* **E2E tests** → full API test using Supertest

---

## Use Frameworks When Helpful

**For large projects:**

✔ **NestJS** → already implements clean architecture, DI, modules, pipes, guards

**For lightweight REST APIs:**

✔ **Express + Layered Architecture**
✔ **Fastify (faster & structured)**









-------------------------------------------------------

**TODO**

- How to use Swagger to design a REST API ?
- Postman vs Swagger
- Richardson Maturity Models -> level 2 is strict REST ?
- “Pure REST” (HATEOAS) vs practical REST
- A "REST API development checklist"
- OpenAPI/Swagger documentation
- REST best practices
- Recommended style guides on "how To Build REST APIs"
- Example step-by-step workflow using Methodologies To Build REST APIs
- Example REST API design for your project
- REST vs GraphQL
- REST vs gRPC
- Recommended books re "Methodologies To Build REST APIs"
- Testing REST APIs



