


-------------------------------------------------------

## What does e2e stand for?

End-to-End










-------------------------------------------------------

# Authentication

-------------------------------------------------------

## What Is Authentication ?

Authentication is how a system verifies who you are.

-------------------------------------------------------

## Authentication vs Authorization ?

Authentication = identity.

Authorization = permissions.

-------------------------------------------------------

## Common Types Of Authentication ?

1. Password-Based — simplest, but must be protected via HTTPS, and only on log-in.

2. Token-Based — Stateless Authentication — Server doesn’t need to store session data - token to prove identity e.g. JWT

3. Session Cookies — Stateful Authentication - Server must store session data (hard to scale) - session ID to prove identity

4. OAuth / OpenID Connect — delegated authentication - used by Google, GitHub, etc.

-------------------------------------------------------

## What's Password-Based Authentication?

This is how a user logs in — using a username/password.

But password-based login alone does NOT define how the session is maintained afterward. That’s where sessions or tokens come in.

-------------------------------------------------------

## Session Cookies Authentication vs Token-Based Authentication ?

TLDR: Token-Based better in most modern systems.

Token-Based for:
- APIs, microservices, cross-domain access.
- SPAs, mobile apps.
- Scalability and distributed systems.

Session cookies can still be simpler and safer for:
- Classic, same-origin web apps
- When you can rely on built-in browser cookie security (HttpOnly, Secure, SameSite)

-------------------------------------------------------

## What % of cases is Token-based authentication favored ?

Estimations across all modern systems in active development today (web + mobile + API + enterprise):

~75–85% of new applications favor token-based authentication especially those built around APIs, SPAs, or distributed architectures.

| Context / Use Case                                                      | Token-Based Auth (JWT, OAuth2, etc.) | Session Cookies |
| ----------------------------------------------------------------------- | ------------------------------------ | --------------- |
| **Public APIs / Microservices**                                         | **~90–95%**                          | ~5–10%          |
| **Single Page Apps (React, Vue, Angular)**                              | **~80–90%**                          | ~10–20%         |
| **Mobile Apps (iOS, Android)**                                          | **~95%+**                            | <5%             |
| **Traditional Server-Rendered Web Apps (e.g., Django, Rails, Laravel)** | ~30–40%                              | **~60–70%**     |
| **Enterprise / Hybrid Systems**                                         | ~60–70%                              | ~30–40%         |

-------------------------------------------------------

## What's Session Cookies Authentication?

Session cookies fit within the broader token-based authentication family

After a successful login (e.g., via password), the server:
 - Creates a session in memory or in a database.
 - Generates a session ID.
 - Sends that session ID to the client as a cookie.
 - Server must store sessions

The browser automatically sends this cookie with every future request.

The server uses it to look up the user’s session on each request.

Use Cases:
 - Traditional web apps: server-rendered, same-origin.
 
Cons:
- Requires server-side state (sessions stored on the backend).
- Hard to scale horizontally (needs sticky sessions or shared session store)
- Doesn’t scale well for stateless or distributed architectures without extra setup (e.g., Redis).

Pros:
 - Simple and secure (if HTTPS and HttpOnly are used).
 - Server can easily revoke or expire sessions.

-------------------------------------------------------

## What's Token-Based Authentication?

Server issues a signed token (often JWT) that contains user claims. Client stores and sends it in headers (e.g., `Authorization: Bearer <token>`).

Server does NOT need to store session data → scalable.

Use Cases
- APIs, microservices, cross-domain access.
- SPAs, mobile apps.
- Scalability and distributed systems.

Pros:
- Stateless — easier scaling.

Cons:
- Token revocation and expiration are trickier.
- If compromised, token remains valid until it expires.

-------------------------------------------------------

## What's JWT ?

JWT is a standard used for Token-Based Authentication. 

It’s language-agnostic (supported by libraries in Node.js, Python, Go, Java, etc.)

Structured in 3 parts, separated by dots (.):

1. Header: Specifies the type of token (JWT) and the signing algorithm (e.g., HS256).

3. Payload: Contains the claims or data (like user ID, roles, expiration time, etc.).

4. Signature: A cryptographic signature that verifies the token wasn’t tampered with.

```javascript
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
.
eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ
.
TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ
```

-------------------------------------------------------

## How Related Are OAuth, OIDC, and JWT ?

OAuth 2.0 = Authorization → JWTs may be used as access tokens.

OIDC (OpenID Connect) = Authentication + Authorization (ID layer on top of OAuth 2.0) → JWTs required for ID tokens, and may be used for access tokens.

-------------------------------------------------------

## How Related Are OAuth, OIDC, and Delegated Authentication ?

Delegated Authentication lets one system trust another for authentication (i.e. "Login with Facebook/GitHub/Google/etc")

OAuth/OIDC are common implementations.












-------------------------------------------------------

# Server Side Optimization

-------------------------------------------------------

## What's Server Side Optimization?

Misleading jargon because it includes Client Caching (aka Browser Caching, HTTP Caching) which happens on client side.

FOUR things:

1. **HTTP Caching**: reduce sent files - aka Client Caching aka Browser Caching - allows users to store assets like images, JavaScript files, and CSS files on their computer.

2. **HTTP Compression**: reduce size of sent files - send compressed assets (images, fonts, JS and CSS files) that are significantly smaller, typically around 75% smaller.

3. **CDN**: reduce latency - Content Delivery Networks distribute static assets globally, reducing latency by `serving content from locations closer to the user`.

4. **DNS Preconnect** (optional)  - less used but possible - technique to speed up connections by resolving domain names before a user requests them.

-------------------------------------------------------

## What are the headers for http/client/browser caching?

Both `ETag` and `Last-Modified` headers are used for caching and validation.

However:

 - `ETag` relies on unique identifier generated - robust and accurate mechanism for determining if a resource has changed.

 - `Last-Modified` relies on timestamps - less precise due to factors like server clock synchronization and potential for multiple changes within the same second.

TLDR: `ETag` is preferred for most scenarios.

Best Practice: use both, for maximum caching efficiency and to handle cases where one header might be more appropriate than the other

https://stackoverflow.com/questions/824152/what-takes-precedence-the-etag-or-last-modified-http-header

-------------------------------------------------------

## How does ETag work?

A unique identifier generated by the server for each version of a resource. This can be a hash of the resource's content or other identifying information. 

Clients send the `ETag` in the `If-None-Match` header during subsequent requests. The server compares this with its current `ETag` and returns a `304 Not Modified` if they match. 

Pros: does not dependent on timestamps.

Cons: Can be more resource-intensive to generate and compare, especially for complex resources.

Cons: Some proxies and CDNs may not handle ETag correctly.

Best Practice: great with resources that change frequently or when high accuracy is needed. 

-------------------------------------------------------

## How does Last-Modified work?

Indicates the last time a resource was modified on the server, typically using a timestamp. 

Clients send the timestamp in the `If-Modified-Since` header during subsequent requests. The server compares this with its own timestamp and returns a `304 Not Modified` if the resource hasn't changed. 

Pros: Widely supported, easier to implement than ETag.

Cons: Timestamp-based, can have accuracy issues.

Cons: Not suitable for resources that change multiple times within a second. 

Best Practice: if the resource changes infrequently and one-second granularity is sufficient.

-------------------------------------------------------

## A TTL value of zero in a cache means that ...

TTL = Time To Live.

The cache will expire immediately: `no-cache` policy.

TTL is the time the asset will be considered FRESH in the cache. 

A TTL of zero means the asset is immediately considered STALE which is the equivalent of having no cache.

-------------------------------------------------------

## What are the best practices when using Lighthouse in chrome?

Always in incognito

-------------------------------------------------------

## What are the best practices when measuring performances in chrome?

1. Always in `incognito` window

2. Triple check throttling - under the Network tab, select "No Throttling"

3. Clear Cache - under the Network tab, you can right-click on bundled file then click "Clear Cache"

4. Disable Cache on first performance test - under the Network tab, tick "Disable Cache"

   a. Check loaded file is with `Status Code 200` (ok) - under the Network tab, click on bundle file, click on "Headers", see under "Status Code"
   
   b. Check loaded file timing - under the Network tab, click on bundle file, click on "Timing", see under "Content Download"
   
5. Enable cache on following performance tests - under the Network tab, tick "Disable Cache"

   a. Check loaded file is with `Status Code 304` (not modified) - under the Network tab, click on bundle file, click on "Headers", see under "Status Code"

   b. Check loaded file timing (should be much longer) - under the Network tab, click on bundle file, click on "Timing", see under "Content Download"

-------------------------------------------------------

## How do you optimize the Static Assets?

Optimizing CSS, Images and Fonts.

1. CSS: Extract & Minify: Extract CSS from JavaScript and minify it for more efficient load times.

2. CSS: Critical CSS: the CSS necessary for rendering above-the-fold content should be extracted and added as an inline style to the HTML document to eliminate render-blocking requests.

3. Image: Size Adjustments: Serve images as small as possible (dependent on design requirement) and apply image optimization algorithms.

4. Image: Format Adjustment: use `WebP` for best performance (we can use module bundlers like Webpack to transform images at build time).

5. Image: Responsive Sizing: Ensure image dimensions are optimized for their display size to reduce unnecessary loading (use `srcset` attribute).

6. Image: Lazy Loading: load images that are not in the viewport (above the fold) after the initial load. Also use `loading="lazy"` attribute to defer loading until the image is near the viewport.

7. Fonts: Host On Server: to eliminate requests to 3rd parties, also apply caching and compression to font assets. Use the `woff2` format for fonts for best performance.









-------------------------------------------------------

# HTTP Requests, APIs

-------------------------------------------------------

## What are valid ways to version an API in the case of breaking changes?

1. Adding a version number to the URI

2. Adding a version number to the query parameters of the URI

3. Adding a version number to the `Accept` header

-------------------------------------------------------

## Which of the following methods are idempotent in REST?

`GET`

`PUT`

`DELETE`

-------------------------------------------------------

## Which one is true about the PUT and POST methods in REST?

`POST` will create the object if it does not exist or update if it does -- FALSE

`POST` will update the object if it exists -- FALSE

`PUT` will create the object if it does not exist or update it if it does -- TRUE

`PUT` will only create the object -- FALSE

-------------------------------------------------------

## What's the difference between PUT and PATCH ?

Both `PUT` and `PATCH` are HTTP methods used to update resources on a server, but they differ in how they handle the update.

`PUT`: The client sends a **complete representation of the resource**, and the server replaces the existing one.

`PATCH`: The client sends **only the fields to be changed**, and the server updates those fields while keeping the others intact.

-------------------------------------------------------

## Which HTTP Status Code represents Forbidden Access to the endpoint/resource?

`403` 

`4xx`: Client ERROR responses 

`401`: Unauthorized

-------------------------------------------------------

## What is a preflight request in the context of HTTP?

A request to check the CORS status with the server.

Checks if the server supports the requested method and headers part of the CORS mechanism.

This is done by sending an OPTIONS request to the server with the Access-Control-Request-Method and Access-Control-Request-Headers headers.

-------------------------------------------------------

## When using the `Basic Auth` mechanism what does the `Authorization Header` contains?

A Basic encoded string with the `username:password`.

The Basic Auth mechanism is sent in the `Authorization header` with the value `Basic` followed by the `Base64` encoded `username:password` string.

-------------------------------------------------------

## How are cookies sent from the browser to the server?

Cookies are sent from the browser to the server in the `Cookie` header automatically on every HTTP request.

-------------------------------------------------------

## What's Content Negotiation?

It's a mechanism used to serve the same resource in a different format (i.e. compressed) based on specific `HTTP headers` sent by the client.

-------------------------------------------------------

## In the context of TLS and HTTPS

Asymmetric encryption does NOT use the same key for encryption and decryption.

Asymmetric encryption is used during the TLS handshake to securely exchange a symmetric encryption key.

The symmetric key will be used for the rest of the connection to encrypt data (using symmetric encryption) as it is much more computationally cheaper than asymmetric encryption.

-------------------------------------------------------

## What is the relationship between an HTTPS certificate and the public and private keys in the context of establishing a secure connection?

The HTTPS certificate contains the server's public key, which is used by the client to encrypt the symmetric encryption key in the TLS handshake.

The public key in the HTTPS certificate is used by clients to securely send data to the server and establish a secure connection.

HTTPS secure connection steps:

 - When a client connects to a server over `HTTPS`, the server presents its `SSL/TLS` certificate to the client.

 - The client verifies the certificate's validity and the identity of the server.

 - The client then uses the `public key` in the certificate to encrypt a symmetric session key.

 - The server decrypts the `symmetric session key` with its private key.

 - This symmetric key is then used to encrypt and decrypt data exchanged during the session, providing a secure communication channel.

-------------------------------------------------------

## In HTTPS, which type of encryption is actually used during the communication session after the initial connection is established?

Symmetric encryption.

After the initial TLS handshake, the symmetric encryption key is used to encrypt and decrypt data exchanged during the session. 

This is much more computationally cheaper than asymmetric encryption.

-------------------------------------------------------

## What measures can help prevent a Distributed Denial-of-Service (DDoS) attack?

Employing load balancers and traffic filtering

Implementing rate limiting

-------------------------------------------------------

## API endpoint: Scenario

We are building an API endpoint and we need to respond to invalid user inputs: we expect an email but we received an integer. 

Which response status code should we send to the client as a response?

400 Bad Request

-------------------------------------------------------

## Scenario

A user is logged into their online banking account. While logged in, the user visits a malicious website(same browser window). 

This website contains a hidden form that automatically submits a request to transfer money from the user's bank account to the attacker's account. 

Since the user is already authenticated on the banking site, the request is processed without additional verification. 

What type of web security attack does this scenario describe?

Cross-Site Request Forgery (CSRF).

CSRF is an attack where a malicious website, email, or program causes a user's web browser to perform an unwanted action on a trusted site where the user is already authenticated.

Key Characteristics of CSRF:

 - Exploits authenticated sessions.

 - Tricks the user's browser into making an unwanted request.

 - The request is processed because it appears legitimate to the server.

-------------------------------------------------------

## Scenario: web security attack

A user visits a web forum like Reddit and views a post that contains a hidden script. 

The forum's backend does not properly sanitize user input, allowing the attacker to inject the script into the post content. 

When another user views this post, the script runs in the user's browser and sends the user's session cookie to the attacker's server. 

Later, the attacker uses this session cookie to impersonate the user and gain unauthorized access to the user's account. 

Question: What type of web security attack does this scenario describe?

XSS









-------------------------------------------------------

# Databases

-------------------------------------------------------

## What are some advantages of using an ORM?

ORM (Object-Relational Mapper) allows us to 

1. write less code to query the database

2. leverage OOP principles(like encapsulation) when interacting with the database

-------------------------------------------------------

## What is the purpose of a database migration?

To keep track of the changes made to the database schema.

A database migration is used to syncronize code changes with the database schema by creating a new version of the database schema that matches the models(schema) from the codebase.

-------------------------------------------------------

## What is the main purpose of a FOREIGN KEY constraint in relational databases?

To enforce referential integrity by preventing actions that would leave orphaned rows.

-------------------------------------------------------

## Which aspects of the CAP Theorem?

Consistency, Availability and Partition.

-------------------------------------------------------

## How does an `index` makes database queries faster?

A database index creates a data structure that allows `binary search` (log2N vs N) for the indexed column

-------------------------------------------------------

## Which of the following are disadvantages of indexing a database table? (2 options apply)

It has to be updated every-time the data changes(insert, update, delete)

It makes the database insert and update operations slower

It takes up extra space(as we need to store the data structure)

-------------------------------------------------------

## An API Service receives input field values from the frontend and use it them directly in database queries. Which web security attacks does this make it vulnerable to?

SQL Injection.

Other types of vulnerabilities include XSS (in certain API response)

Validation and sanitization is required.








-------------------------------------------------------

# Backend ↔ Frontend

-------------------------------------------------------

## What and why DTOs?

DTOs = Data Transfer Objects

Very simple objects used to move data between layers (e.g., backend ↔ frontend) without exposing your domain models.

They usually contain only fields, no business logic.

-------------------------------------------------------

## What and why domain models ?

Domain models are the core business objects in your application — the classes that represent real-world concepts and contain business rules/behavior.

Characteristics
- Represent business concepts, not UI or database concerns
- Usually contain behavior (methods), not just data
- Enforce invariants and rules (e.g., “cannot cancel a shipped order”)
- Are part of the domain layer in layered/DDD architectures
- Designed based on discussions with domain experts

-------------------------------------------------------

## How related are DTOs and domain models?

Domain model = brains = internal, rich business logic

DTO = simple container of fields = external, data-only version for transport

-------------------------------------------------------

## Domain Entities vs Domain models ?

**Domain Model = broad concept → Think: the entire business layer**

The whole set of business concepts, rules, and behaviors in your domain.

It includes entities, value objects, domain services, aggregates, events, etc.

**Entity = specific type of domain object = one building block inside the domain model**

A kind of domain model element that:
- Has a unique identity (ID)
- Lives through changes over time
- Allows state mutations (with rules)
- Example: User, Order, Account, Invoice

Entities are mutable, and their identity matters more than their data.














-------------------------------------------------------

# Architecture, Deployment, CI/CD, Docker, 

-------------------------------------------------------

## Advantages of a micro-frontends architecture?

Development Speed: work in parallel, and deploy independently.

-------------------------------------------------------

## Which Architecture Style achieves the maximum decoupling between services?

Event-driven Architecture - almost no coupling between services.

Services consume and produce events that are published to an Event Mediator or Event Bus (SQS Queues, Kafka). 

We can "plug and play" services into the Event Bus or terminate one of them without affecting any other services.

-------------------------------------------------------

## Which deployment styles have zero downtime?

1. Blue/Green Deployment

2. Canary Deployment

Blue/Green Deployment - a new version of the application is deployed to a new environment and the old environment is replaced with the new one if the new version is successful.

Canary Deployment - a new version of the application is deployed to a small percentage of the users and the old version is still available to the rest of the users.

-------------------------------------------------------

## What deployment styles requires a load balancer?

Blue/Green Deployment

Canary Deployment

Rolling Deployment

-------------------------------------------------------

## How much downtime does a five nines(99.999%) SLA allows for over a day?

0.86 seconds

-------------------------------------------------------

## What is the main advantage of using containers in CI/CD?

To standardise most of the release process - easier to deploy

-------------------------------------------------------

## What is Kubernetes ?

An open-source tool used to deploy and operate containers - it is a container orchestration tool.

-------------------------------------------------------

## Docker Orchestrators run many containers on a single machine. Is that correct?

Not quite — that’s a common misconception.

Docker orchestrators (like Kubernetes or Docker Swarm) are designed to run and manage containers across multiple machines — not just a single one.

Think of it this way:

 - Docker Engine runs containers on a single machine.

 - A Docker Orchestrator manages a cluster of machines (called nodes) and spreads containers across them intelligently.

Orchestrators CAN run multiple containers on a single machine, if:

 - You're running a single-node cluster (for development/testing).

 - That’s where the resources allow containers to run.

But the true power of orchestration comes from managing many machines (nodes) and distributing containers across them.

-------------------------------------------------------

## Isn't it very heavy to include a Linux in every single Container, even if a light version of Linux ?

Nope. See the size of Alpine Linux and distroless images:

| Image type   | Approx. size | Notes                                                  |
| ------------ | ------------ | ------------------------------------------------------ |
| `ubuntu`     | \~29 MB      | Full-featured OS                                       |
| `alpine`     | \~5 MB       | Ultra-minimal Linux                                    |
| `distroless` | < 2 MB       | No package manager or shell; only app and dependencies |

Comparison to VMs:

| Feature   | Virtual Machine | Container          |
| --------- | --------------- | ------------------ |
| Kernel    | Included        | Shared with host   |
| Boot time | Minutes         | Seconds            |
| Size      | GBs             | MBs (or even less) |
| Overhead  | High            | Low                |

-------------------------------------------------------

## A proxy service that acts on behalf of the server (like a load balancer) is also called a ...

Reversed Proxy

-------------------------------------------------------

## What devices qualify as a reverse proxy?

1. Load Balancers

2. CDNs

3. API Gateway

-------------------------------------------------------

## We know our service will be scaled horizontally across a couple of instances. When designing it, we should?

 - Avoid state in the instances (use REST instead)

 - Avoid local caching and use a shared cache (i.e. Redis)

-------------------------------------------------------

## A load balancer implementing a Round-Robin algorithm will forward requests to ...

The next instance in a sequential/circular order.

Round-Robin is a rather naive algo.



