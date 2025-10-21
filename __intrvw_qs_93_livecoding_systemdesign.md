




-------------------------------------------------------

# Method Overview

-------------------------------------------------------

## System Design Process

 1. Requirements Analysis - ask smart questions
 
 2. Visualize - keep asking smart questions, refine req. an.

 2. Brute Force Design

 3. Scale The Design

 4. Scale Individual Components

IMPORTANT
 - You have to lead the interview but appear not to.
 - You need to get “buy in” from the interviewers.
 - Explain TRADE-OFFS in design decisions. Senior Devs know that BALANCE is key.
 - You MUST keep flowing, do NOT run out of things to say.
 - You MAY get trolled/shit-tested to see how you handle that - take it as an exercise

-------------------------------------------------------

## System Design For Real-Life Frontend Project

Note that steps "Clarify Requirements" and "Visualize Requirements" often go hand-in-hand, so there is some back-and-forth

1. Clarify Requirements: input, output, base cases, common case and edge cases
- 1.a Input: Get JSON files for different inputs such as base cases and common cases
- 1.b Input Analysis: Answer Questions: "What are the essential data types we have?", "For each data type, what quantity of data would a common case have?"
- 1.c Input: Make sure you understand the JSON files provided - use GPT if needed

2. Visualize Requirements
- 2.a Draw Schemas - identify relationships between data types (one-to-one, one-to-many, many-to-one, many-to-many)
- 2.b Draw Wireframes - identify all the views/pages and components
- 2.c Write Pseudo Code - write pseudo unit tests

3. Brute Force Solution: implement basic solution
- 3.a Code unit tests for each view/page and component
- 3.b Code basic solution for each view/page and component

4. Analyze: gather feedback, measure, and monitor

5. Optimize/Improve/Scale: prioritise first

6. Repeat 4+5 as many times as needed







-------------------------------------------------------

# Method In Details

-------------------------------------------------------

## 1. Requirements Analysis

TLDR:
 1. **FR**: Who, What, When, Where: Action-Oriented: Use Cases (stories, archetypes).
 2. **NFR**: Demands and Constraints Oriented: Scalability And Availability Challenges: System Performance Metrics

### Functional Requirements

i. Who - Do we have different types of users ? - i.e. content editors/admins, end users , etc

ii. Where - Where do they use the System (Web, Mobile, Desktop ...) ? - i.e. mobile app, web app, api service, physical location

iii. What - What is the user input and the system output (data, images videos) ? - i.e. pdf files, profile pics, output generated vids

iv. When - When used the most? - i.e. peak time every day at 6PM CET when people finish work

### Non-Functional Requirements

i. Traffic - How many users per day/week/month ? Peak usage ? What does "active users" mean? Where are users located?

ii. Throughput - Do users mostly read pages? Or also publish data? Do they fetch data? What's the estimated payload size?

iii. Storage - What kind of data are we storing (if any)? Are relationships important?

iv. Read/Write Ratio - Do users mostly consume content? Or often publish too, like everyday? Diff between nb of reads vs nb of writes?

### Main Goals

1. Traffic & Throughput
 - Estimated number of users - translate it - into a concrete number of request per secons or requests per minute. 
 - Estimate the throughput in Mb/seconds using back of the envelope numbers(payload size) and requests per second.

2. Storage & Read/Write Ratio
 - Extract the requirements for the kind of database to use - MySQL and NoSQL databases.
 - For very unusual and specific use-cases graph databases of spatial database can makes sense.

Lingo:
 - Throughput - the volume of data we can send over a period of time from point A to point B (100 MB/second).
 - Latency - the time it takes to send data from point A to point B (HTTP request, reading data from memory, reading data from disk).

-------------------------------------------------------

## 2. Brute Force Design (MVD) - aka Minimum Viable Design

 a. Fullfill the use-cases with the minimum number of components - base cases, common cases, and corner cases
 b. Get a “top view” of how the System Should look like
 c. Let your interviewer know: you will NOT address Scalability or Availability challenges, you will focus only on the functional requirements
    
Components:

 --> Frontend (web app, mobile app)
 --> Backend
 --> Blobstorage (data, files)

-------------------------------------------------------

## 3. Scaling The Design

Steps:

1. Split backend based on the Read/Write ratio

2. Split the database according to the Read/Write ratio

3. Add CDNs to Frontend Web Applications and Blob Storage

4. Add load balancing to (read) backend under pressure

5. Scale the Database with Read Only Replicas

Explanation:

Scalability is the ability to maintain performance under an increasing workload.

In system design language is the ability to handle high throughput with low latency. 


### Vertical Scalability - increase CPU or Memory - Scale Up

 + simple
 + no code changes
 - expensive and limited - powerful hardware is very expensive and there are physical limitations(max memory, max nr of CPUs per machine)
 - a unique point of failure - we still have a unique machine that reduces our fault tolerance
 - downtime - we need to redeploy our application as we change the hardware is running
 - not flexible - we cannot adjust to traffic in real-time, the capacity (and our expense) are constant

### Horizontal Scalability - increase instances of the App - Scale-Out

 + flexibility - we can adapt to traffic changes quickly and only pay for more machines when we need more
 + no downtime - adding or removing new instances does not result in downtime
 + fault tolerance - if an instance fails (hardware failure, etc) the other ones take over
 + cheap - we can use much cheaper and available hardware
 - needs a load balancer - we need to provision and maintain an extra component that also becomes a unique point of failure
 - code complexity - our servers have to be stateless and if we add any caching or state they have to be shared (for example a shared Redis Instance)

### Code Scalability

 - preferring functional programming
 - using BigO analysis
 - write loosely coupled code
 - use caching/memoization
 - use async/await for longer system calls(disk read/write, database calls)
 - avoid state in your code (i.e. prefer REST architectures)

-------------------------------------------------------

## 4. Scaling Individual Components

a. Change the Architecture towards Microservices (follow traffic patterns)
b. Add Caching at Service Level
c. Add load balancing at service level
d. Use a mixed database strategy (SQL and NoSQL) depending on use case
e. Consider: Event Driven Architecture & Micro Frontends











-------------------------------------------------------

# Gotchas

-------------------------------------------------------

## Common System Design Interview Mistakes

1. Running out of things to say - use the questions cheatsheet and follow the process
2. Not getting “buy in” from the interviewer - a successful interview will feel like working with a team mate on a every day problem
3. Focusing too much on a specific component
4. Being “against the wall” and only answering questions fired at you
5. Trying to memorize a solution
6. Getting into domains where that are not your strength (i.e. as as frontend developer you dont want to get too deep into DB level caching)
7. Trying to look smarter than the interviewer
8. Thinking that there is only solution to the problem
9. Forgetting you are being evaluated on your thought process
10. Blaming yourself when things do not go well - do your best but remember, it takes two to tango

-------------------------------------------------------

## Smart System Design Questions

1. Estimate Traffic
- How many users per day do we expect? Per week? Per mont?
- What is the traffic distribution? Are users more active on the weekends?
- Are users more active in the evening? What is the traffic at peak usage?

If you get anwer like: “we estimate we will have 4000 active users ... ”
- What does it mean “active users”? Is it users that log in once a day? Once a week? Once a month?
- Where are these users based?

2. Estimate Throughput
- What actions do the users do? Do they read a file?
- Do they fetch data? How? How much? What is the estimated payload size?

Goal: translate an estimated number of users into a concrete number of request per secons or requests per minute. 
You can also estimate the throughput in Mb/seconds using back of the envelope numbers (payload size) and requests per second.

3. Extract Read/Write Ratio
- Do users view data? Do they persist data?
- Do uses persist data(making a tweet, post on social media)?
- What is the difference between nr of reads/ vs nr of writes? - for example for every tweet created there are thousands of read operation and only one write operation.

4. Understand the data
- What kind of data are we storing(if any)? Are relationships important?

Goal: extract the requirements for the kind of database to use. Monsttly the decision would be between MySQL and NoSQL databases. 
For specific usecase graph databases of spatial database makes sense (very unlikelly you will get those case thought).

REMEMBER: You are looking for rough numbers and you want to involve the interviewer as you “discover” the system. 
Make them part of the process and get them to help you.







-------------------------------------------------------

# Challenges

-------------------------------------------------------

## Ask GPT

Prompt "Pls give me 3 mini exercises (without showing solution) for system design interview for frontend devs"

This will give some good examples.

-------------------------------------------------------

## Multi-Step Form

System Design: design an application (FE+BE) with the following requirements:

- Client App to display (dynamic) forms based on parameters: 
  - Insurance product type 
  - Carrier
  - X, Y, Z
- Data populated in the forms has to be saved (for the sales team)
- Acceptable performance (loading of FE app < 3 seconds) 
- Choose the technologies that you like best!

### SOLUTION

How many screens/steps do we have ?
Will there be a REST API ? if so, what calls will be made?
How will you store your states?
How will state sync up with DB ?
Can you solution work so that user can close the window and then restart later where he left from?

-------------------------------------------------------

## Design a Live Search Autocomplete

Scenario: design the frontend for a “live search” feature like Google’s — as a user types, suggestions appear instantly.

Key points to consider:
 - Architecture of components (debouncing, caching, handling API responses).
 - State management (global vs local).
 - Accessibility and keyboard navigation.
 - Performance for large datasets and slow networks.
 - Handling API rate limits and failures.

### SOLUTION

TODO

-------------------------------------------------------

## Design a Real-Time Collaborative Document Editor

Scenario: Users can edit a shared document simultaneously (like Google Docs). You’re responsible for the frontend design and architecture.

Key points to consider:
* Managing concurrent edits and syncing UI state.
* Handling temporary offline edits (optimistic UI).
* Integrating WebSockets or other real-time tech.
* Designing data flow and state consistency.
* Modular UI design for scalability (toolbar, editor area, presence indicators, etc.).

### SOLUTION

TODO

-------------------------------------------------------

## Design a Dashboard for Monitoring Live Metrics**

Scenario: You need to build a real-time metrics dashboard (like Datadog or Grafana) showing system health, user activity, etc.

Key points to consider:
* Component structure for reusable charts and widgets.
* Handling streaming data updates efficiently.
* Responsiveness and performance optimizations.
* Theming, layout system, and customizability.
* Error handling and fallbacks for missing data.

### SOLUTION

TODO














-------------------------------------------------------

# Resources

-------------------------------------------------------

You can find everything you need for free on Youtube (Neetcode, Striver, CrackingFAANG, etc).

YouTube search "system design interviews".

Discord where to do mock tech interviews - https://discord.gg/nGGvH9KXnm

https://easyclimb.tech/learning

https://www.hellointerview.com/  - has free content

https://neetcode.io/

https://www.codechef.com/

Blind 75 or NeetCode 150 is more than enough for FAANG and other big tech companies.



