
# What are valid ways to version an API in the case of breaking changes?

1. Adding a version number to the URI

2. Adding a version number to the query parameters of the URI

3. Adding a version number to the `Accept` header

-------------------------------------------------------

# Which of the following methods are idempotent in REST?

GET
PUT
DELETE

-------------------------------------------------------

# Which one is true about the PUT and POST methods in REST?

POST will create the object if it does not exist or update if it does -- FALSE

POST will update the object if it exists -- FALSE

PUT will create the object if it does not exist or update it if it does -- TRUE

PUT will only create the object -- FALSE

-------------------------------------------------------

# Which HTTP Status Code represents Forbidden Access to the endpoint/resource?

`403` 

`4xx`: Client ERROR responses 

`401` : Unauthorized

-------------------------------------------------------

# What is a preflight request in the context of HTTP?

A request to check the CORS status with the server.

Checks if the server supports the requested method and headers part of the CORS mechanism.

This is done by sending an OPTIONS request to the server with the Access-Control-Request-Method and Access-Control-Request-Headers headers.

-------------------------------------------------------

# When using the `Basic Auth` mechanism what does the `Authorization Header` contains?

A Basic encoded string with the `username:password`.

The Basic Auth mechanism is sent in the `Authorization header` with the value `Basic` followed by the `Base64` encoded `username:password` string.

-------------------------------------------------------

# How are cookies sent from the browser to the server?

Cookies are sent from the browser to the server in the `Cookie` header automatically on every HTTP request.


-------------------------------------------------------

# What's Content Negotiation?

It's a mechanism used to serve the same resource in a different format (i.e. compressed) based on specific `HTTP headers` sent by the client.

-------------------------------------------------------

# We are building an API endpoint and we need to respond to invalid user inputs: we expect an email but we received an integer. Which response status code should we send to the client as a response?

400 Bad Request

-------------------------------------------------------

# What are some advantages of using an ORM?

ORM (Object-relational mapper) allows us to 

1. write less code to query the database

2. leverage OOP principles(like encapsulation) when interacting with the database

-------------------------------------------------------

# What is the purpose of a database migration?

To keep track of the changes made to the database schema.

A database migration is used to syncronize code changes with the database schema by creating a new version of the database schema that matches the models(schema) from the codebase.

-------------------------------------------------------

# What is the main purpose of a FOREIGN KEY constraint in relational databases?

To enforce referential integrity by preventing actions that would leave orphaned rows.

-------------------------------------------------------

# Which aspects of the CAP Theorem?

Consistency, Availability and Partition.

-------------------------------------------------------

# How does an index makes database queries faster?

Creating a data structure that allows binary search (log2N vs N) for the indexed column

-------------------------------------------------------

# Which of the following are disadvantages of indexing a database table? (2 options apply)

It has to be updated every-time the data changes(insert, update, delete)

It makes the database insert and update operations slower

It takes up extra space(as we need to store the data structure)

-------------------------------------------------------

# An API Service receives input field values from the frontend and use it them directly in database queries. Which web security attacks does this make it vulnerable to?

SQL Injection.

Other types of vulnerabilities include XSS (in certain API response)

Validation and sanitization is required.

-------------------------------------------------------

# A user is logged into their online banking account. While logged in, the user visits a malicious website(same browser window). This website contains a hidden form that automatically submits a request to transfer money from the user's bank account to the attacker's account. Since the user is already authenticated on the banking site, the request is processed without additional verification. What type of web security attack does this scenario describe?

Cross-Site Request Forgery (CSRF).

CSRF is an attack where a malicious website, email, or program causes a user's web browser to perform an unwanted action on a trusted site where the user is already authenticated.

Key Characteristics of CSRF:

 - Exploits authenticated sessions.

 - Tricks the user's browser into making an unwanted request.

 - The request is processed because it appears legitimate to the server.

-------------------------------------------------------

# Which of the following measures can help prevent a Distributed Denial-of-Service (DDoS) attack?

Employing load balancers and traffic filtering

Implementing rate limiting

-------------------------------------------------------

# In the context of TLS and HTTPS

Asymmetric encryption does NOT use the same key for encryption and decryption.

Asymmetric encryption is used during the TLS handshake to securely exchange a symmetric encryption key.

The symmetric key will be used for the rest of the connection to encrypt data (using symmetric encryption) as it is much more computationally cheaper than asymmetric encryption.

-------------------------------------------------------

# What is the relationship between an HTTPS certificate and the public and private keys in the context of establishing a secure connection?

The HTTPS certificate contains the server's public key, which is used by the client to encrypt the symmetric encryption key in the TLS handshake.

The public key in the HTTPS certificate is used by clients to securely send data to the server and establish a secure connection.

HTTPS secure connection steps:

 - When a client connects to a server over `HTTPS`, the server presents its `SSL/TLS` certificate to the client.

 - The client verifies the certificate's validity and the identity of the server.

 - The client then uses the `public key` in the certificate to encrypt a symmetric session key.

 - The server decrypts the `symmetric session key` with its private key.

 - This symmetric key is then used to encrypt and decrypt data exchanged during the session, providing a secure communication channel.


-------------------------------------------------------

# In HTTPS, which type of encryption is actually used during the communication session after the initial connection is established?

Symmetric encryption.

After the initial TLS handshake, the symmetric encryption key is used to encrypt and decrypt data exchanged during the session. This is much more computationally cheaper than asymmetric encryption.

-------------------------------------------------------

# Scenario: A user visits a web forum like Reddit and views a post that contains a hidden script. The forum's backend does not properly sanitize user input, allowing the attacker to inject the script into the post content. When another user views this post, the script runs in the user's browser and sends the user's session cookie to the attacker's server. Later, the attacker uses this session cookie to impersonate the user and gain unauthorized access to the user's account. Question: What type of web security attack does this scenario describe?

XSS

-------------------------------------------------------

# Which GIT flow would you recommend when starting a new project with a small team?

Feature branch

-------------------------------------------------------

# What does git squash do?

Combine multiple commits into a single commit

-------------------------------------------------------

# Which deployment styles have zero downtime?

1. Blue/Green Deployment

2. Canary Deployment

Blue/Green Deployment - a new version of the application is deployed to a new environment and the old environment is replaced with the new one if the new version is successful.

Canary Deployment - a new version of the application is deployed to a small percentage of the users and the old version is still available to the rest of the users.

-------------------------------------------------------

# How much downtime does a five nines(99.999%) SLA allows for over a day?

0.86 seconds

-------------------------------------------------------

# What deployment styles requires a load balancer?

Blue/Green Deployment

Canary Deployment

Rolling Deployment

-------------------------------------------------------

# What is the main advantage of using containers in CI/CD?

To standardise most of the release process - easier to deploy

-------------------------------------------------------

# What is Kubernetes(Interview Question)?

An open source tool used to deploy and operate containers(container orchestration)

-------------------------------------------------------

# advantages of a micro-frontends architecture?

Development Speed(work in parallel, deploy independently)

-------------------------------------------------------

# Which Architecture Style achieves the maximum decoupling between services?

Event-driven Architecture - almost no coupling between services.

Services consume and produce events that are published to an Event Mediator or Event Bus (SQS Queues, Kafka). 

We can "plug and play" services into the Event Bus or terminate one of them without affecting any other services.

-------------------------------------------------------

# A proxy service that acts on behalf of the server(like a load balancer) is also called a ...

Reversed Proxy

-------------------------------------------------------

# A TTL(time to live) value of zero in a cache means that ...

The cache will expire immediately (`no-cache` policy).

The TTL(time to live) is the time the asset will be considered FRESH in the cache. 

A TTL of zero means the asset is immediately considered STALE which is the equivalent of having no cache.

-------------------------------------------------------

# We know our service will be scaled horizontally across a couple of instances. When designing it, we should?

 - Avoid state in the instances (use REST instead)

 - Avoid local caching and use a shared cache (i.e. Redis)

-------------------------------------------------------

# A load balancer implementing a Round-Robin algorithm will forward requests to ...

The next instance in a sequential/circular order.

Round-Robin is a rather naive algo.

-------------------------------------------------------

# What devices qualify as a reverse proxy?

Load Balancers

CDNs

Api Gateway

-------------------------------------------------------

# 


