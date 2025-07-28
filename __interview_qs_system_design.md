

You can find everything you need for free on Youtube (Neetcode, Striver, CrackingFAANG, etc).

YouTube: system design interviews

Discord where to do mock tech interviews - https://discord.gg/nGGvH9KXnm

https://easyclimb.tech/learning

https://www.hellointerview.com/  - has free content

https://neetcode.io/

https://www.codechef.com/

Blind 75 or NeetCode 150 is more than enough for FAANG and other big tech companies.

-------------------------------------------------------

# System Design Process

1. Requirements Analysis
2. Brute Force Design
3. Scale The Design
4. Scale Individual Components

explain tradeoffs in design decisions

system design interviews on youtube

-------------------------------------------------------

# 1. System Design: Requirements Analysis

- Who - i.e. content editors/admins, end users , etc
- Where - i.e. mobile app, web app, api service, physical location
- When - i.e. when used the most
- What - inputs and outputs they give to the system (data, images, video).
- How many - Traffic, 
- How much - Storage, Throughput


Extract Functional Requirements (Use Cases)
i.Who - Do we have different types of users ?
ii. where - Where do they use the System (Web, Mobile, Desktop ...) ?
iii. what - What is the user input and the system output (data, images videos) ?

Extract NonFunction Requirements (Traffic, Throughput, Storage) - scalability and availability??
i. Traffic
ii. Read/Write Ratio
iii. Storage
iv. Throughput

System Performance Metrics
- Latency - the time it takes to send data from point A to point B(HTTP request, reading data from memory, reading data from disk).
- Throughput - the volume of data we can send over a period of time from point A to point B(100 MB/second).

-------------------------------------------------------

# 2. Brute Force Design (MVD)

The “Minimum Viable Design”
a. Fullfill the usecases with the minimum number of components
b. Get a “top view” of how the System Should look like
c. let your interviewer know: you will not address scalability or Availability challenges, you will focus only on the functional requirements
    
Components:
 --> Frontend (web app, mobile app)
 --> Backend
 --> Blobstorage (data, files)

-------------------------------------------------------

# 3. Scaling the Design

a. Split backend based on the Read/Write ratio
b. Split the database according to the Read/Write ratio
c. Add CDNs to Frontend Web Applications and Blob Storage
d. Add load balancing to (read) backend under pressure
e. Scale the Database with Read Only Replicas

Scalability is the ability to maintain performance under an increasing workload. 
In system design language is the ability to handle high throughput with low latency. 

Vertical Scalability - increase CPU or Memory - Scale Up
 + simple
 + no code changes
 - expensive and limited - powerful hardware is very expensive and there are physical limitations(max memory, max nr of CPUs per machine)
 - a unique point of failure - we still have a unique machine that reduces our fault tolerance
 - downtime - we need to redeploy our application as we change the hardware is running
 - not flexible - we cannot adjust to traffic in real-time, the capacity (and our expense) are constant

Horizontal Scalability - increase instances of the App - Scale-Out
 + flexibility - we can adapt to traffic changes quickly and only pay for more machines when we need more 
 + no downtime - adding or removing new instances does not result in downtime
 + fault tolerance - if an instance fails (hardware failure, etc) the other ones take over
 + cheap - we can use much cheaper and available hardware
 - needs a load balancer - we need to provision and maintain an extra component that also becomes a unique point of failure
 - code complexity - our servers have to be stateless and if we add any caching or state they have to be shared (for example a shared Redis Instance)

Code Scalability
 - preferring functional programming
 - using BigO analysis
 - write loosely coupled code
 - use caching/memoization
 - use async/await for longer system calls(disk read/write, database calls)
 - avoid state in your code (i.e. prefer REST architectures)

-------------------------------------------------------

# 4. Scaling Individual Components

a. Change the Architecture towards Microservices (follow traffic patterns)
b. Add Caching at Service Level
c. Add load balancing at service level
d. Use a mixed database strategy (SQL and NoSQL) depending on use case
e. Consider: Event Driven Architecture & Micro Frontends

-------------------------------------------------------

# Common System Design Inteview Mistakes

1. Running out of things to say - use the questions cheatsheet and follow the process
2. Not getting “buy in” from the interviewer - a successful interview will feel like working with a team mate on a every day problem
3. Focusing too much on a specific component
4. Being “against the wall” and only answering questions fired at you
5. Trying to memorize a solution
6. Getting into domains where that are not your strength (i.e. as as frontend developer you dont want to get too deep into database level caching)
7. Trying to look smarter then the interviewer
8. Thinking that there is only solution to the problem
9. Forgetting you are beeing evaluated on your though process
10. Blaming yourself when things do not go well - do your best but remember, it takes two to tango

-------------------------------------------------------

# 


-------------------------------------------------------

# 


-------------------------------------------------------

# 


-------------------------------------------------------

# 


-------------------------------------------------------

# 


-------------------------------------------------------

# 


-------------------------------------------------------

# 


-------------------------------------------------------

# 


-------------------------------------------------------

# 


-------------------------------------------------------

# 


-------------------------------------------------------

# 


-------------------------------------------------------

# 


-------------------------------------------------------

# 


-------------------------------------------------------

# 


-------------------------------------------------------

