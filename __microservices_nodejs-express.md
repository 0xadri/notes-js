
-------------------------------------------------------

# Docs

https://nodejs.org/

https://expressjs.com/

-------------------------------------------------------

# Pending

none

-------------------------------------------------------

# `Express.js`, aka `Express`

Back end web application framework for building RESTful APIs with `Node.js`.

The de facto standard `server framework` for `Node.js`.

Free and `open-source` software under the MIT License.

-------------------------------------------------------

# Microservices: Problem Statement

As a project grows larger, we're adding more teams of 5-6 people work on the code base.

It quickly becomes unmanageable. How can we make this work?

# Microservices: Solution

We can split up the code base in different services.

Each service is a different code base and belongs to a dedicated team.

Best practice is to also split the database, each service get its own db.

Services being independent means they are also much more reliable/available.

-------------------------------------------------------

# Architecture: Problem Statement

Each service may have a different code base and database, but there might be inter-dependencies in how these services work.

How can we reduce these dependencies ?

# Architecture: Solution

Highest dependency architecture is `synchronous`. Services make direct calls to one another.

Lowest dependency architecture is `asynchronous`. Services cannot make direct calls to one another, but only to an `Event Broker` aka `Event Bus`.

-------------------------------------------------------

# Asynchronous Communication

- Pro: Query Service has zero dependencies on other services

- Pro: Query Service will be extremely fast

- Con: Data Duplication

- Con: Harder to understand


-------------------------------------------------------

# Docker

Container = instance of an image, it runs a program.

Image = single file with all the dependencies and configurations required to run a program.



