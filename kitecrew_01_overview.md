

-------------------------------------------------------

# Project Overview

-------------------------------------------------------

## Index: Web App Requirements 

1. **Purpose & goals** – what problem it solves.
2. **Target users** – who will use it.
Mental Models & Jargon
3. **MVP Core features** – essential functionality (e.g., login, dashboard, payments).
Pages
Consistent Pages Components
Core Flow
4. **Tech stack** – frontend, backend, database, hosting.
5. **Design & UX** – layout, accessibility, responsiveness.
6. **Security** – authentication, data protection.
7. **Performance** – speed, scalability.
8. **Integrations** – APIs or third-party tools.
9. **Maintenance & updates** – how it’ll be supported.
10. **Timeline & budget** – estimated phases and costs.
Inspirations For Features, UX, Views, Components

-------------------------------------------------------

## Purpose & Goals

A lightweight web app for kitesurfers to share rides — connecting drivers and riders for day trips to kitesurfing spots.

Goal: Make trip coordination effortless while testing interest and core functionality before scaling.

-------------------------------------------------------

## Target Users

Drivers – kitesurfers with cars who want to share rides & split costs.

Riders – kitesurfers without cars who need transport to kitesurfing locations.

-------------------------------------------------------

## Versions

V1

Super easy going and simple, like an old school version of BlaBlaCar: 
 - you pay directly to the driver w cash, bizum, transfer, whatever.
 - driver can add link to his WhatsApp.
 - luggage capacity in description
 - the driver sets the rules however he wants

V2 

 - TBD

VX

 - Support one more activity i.e. wingfoiling

-------------------------------------------------------

## Mental Models & Jargon

Home Page = Landing Page + Basic Search

Trip = Ride = Event

Trip Booking = Ride Booking = Trip Ticket = Ride Ticket = Event Ticket = Event Ticket

Trip Access Tiers = Visibility + Approval Process

Trip Search Page =  Trip Discovery Page

Drivers = Organizers = Host

Riders = Guests = Participants = Attendants

Users = Kitesurfers = Riders + Drivers = organizer + guest    // Luma Style: a user can be an organizer or a guest

Seats = Spots = Capacity

Public = Instant Booking + Publicly Listed

Restricted = Manual Approval Required + Publicly Listed

Unlisted = Manual Approval Required + Must Have Direct Link

Luggage Allowance = Luggage Capacity

Departure = Start = Pickup

Destination = Arrival = Drop Off

Trust & Safety = Profile Verification Status

-------------------------------------------------------

## MVP Core Features

| Feature                 | MVP Scope                                         |
| ----------------------- | ------------------------------------------------- |
| Booking                 | Request to reserve a seat + Cancel reservation    |
| Connect Driver & Riders | Email sent to driver w rider Whatsapp, email      |
| Email Notifications     | Email sent to driver w rider Whatsapp, email      |

Email Notifications: Sent To Driver:
- If a rider sends "request to join trip", it has the rider's email & phone number
- If a driver "confirms a rider trip"

Email Notifications: Sent To Rider:
- If a driver "confirms a rider trip", it has the driver's email & phone number

Trips: anyone can organize a trip ??
- maybe ok as a V1

Support
 - official support email address

-------------------------------------------------------

## Pages

All pages have top nav and footer.

### Homepage

  - **Hero Section:**
      - **Search Bar:** Departure Location, Departure Date, Destination Location
  - **Marketing Sections:**
      - **Stats Section:** number of drivers, rides, etc
      - **How It Works Section:** search for rides, Book your seat, Hit the water
      - **Featured Upcoming Rides:** cards of several rides
  - **Logged In?**
      - **Top Nav:** Shows the user's profile and location, providing immediate personalization (VolleyWorld style)
      - **Search Box:** Departure has user's latest departure location ?


### Search Results Page (SRP) - V1

Dedicated results page with a persistent, condensed search bar at the top.

  - **Search Bar: Fields:**
      - Departure Location
      - Departure Date 
      - Destination Location

  - **List Of Trips: Trips Card Details:**
      - **Title:** Driver-defined name for the trip ??
      - **Driver Name**
      - **Driver Rating:** Star rating *and* the total number of reviews (e.g., 4.8 (123)).
      - **Description:** Shortened summary.
      - **Seats Left** i.e. 2. 
      - **Price:** Total cost.
      - **CTA:** Request to join trip.


### Search Results Page (SRP) - V2

  - **List Of Trips: Trips Card Details:**
      - **Tags:** "Superdriver" or "Riders Favorite" for high-rated drivers.
      - **Images:** Hovering over the main image triggers a slideshow (driver profile pics, car pics)
      - **Actions:** Favorite button (heart icon).
      - **Cancellation:** Explicitly stated policy (e.g., "Free cancellation").


  - **Navigation:**
      - **Infinite Scroll:** can be with a "load more" button for the sake of simplicity.
      - **Prev Day and Next Day Buttons:** in case reaching the end of the list.

  - **Refining Results**
      - **Sort Options:**
          - Earliest departure
          - Lowest price
          - Distance to departure point
          - Price ?
      - **Filter Criteria:**
          - Pickup Time (range ?)
          - Profile Verification status
          - Return
          - One Way
          - Rating
          - Instant booking
          - Number of people in the back
          - Luggage Allowance

 - **Layout:** Split-panel design
      - **Right:** Map showing trip start locations with markers containing further info
      - **Left:** List of trip cards.
  - **Map showing trip start locations:**
      - markers containing start date+time, destination, price, driver name, driver rating and trips (e.g., 4.8 (123)).


### Trip Page

  - **Title**
  - **Description**
      - rich-text field
      - "Translate to English" button.
  - **Departure**
      - Location (city)
      - Pick Up Point: approximate location (Neighborood) 
      - Date & Time
  - **Destination**
      - Location (the spot!)
      - Date & Time - calculated
  - **Return vs One Way** 
      - If one way, must be flagged to user (i.e. red text)
  - **Return**
      - Location
      - Start Date & Time - estimated range i.e. ±1H
  - **Status**
      - nb of seats left
      - full -> "Join Waiting List" button // Luma.com style
  - **Organizer**
      - Name
      - Pic
      - Rating
      - Nb Trips Organized
      - COULD: hover card on the organizer's name shows basic info, guest count, and a "Contact Host" link.
  - **Access Tiers:** A three-tier system controls event visibility and attendance:
      - **Instant Book:** Open to all; no organizer approval needed.
      - **Regular:** Requires organizer approval to join.
      - **Unlisted:** Not visible in search; accessible only via a direct link.
  - **Luggage Allowance**
      - nb kite bags (1 by default)
      - nb twintip boards (1 by default)
      - nb small bags (1 by default)
      - nb board bags (0 by default)
  - **Car**
      - Name
      - Pic
      - Nb Trips Done
  - **Participants** 
      - **Riders:** all riders joining this trip - providing social proof and allowing users to view each other's profiles for context.
      - Clicking a rider's card takes you to their profile page.
  - **Departure Map:** 
      - A map showing the exact location is hidden until booking.
  - **"Book Trip" Button**
      - **Guest Checkout:** A fast, guest-friendly flow.
          - **Process:** Click "Book Trip" → an overlay appears for name, email, and card details.
          - **Rationale:** Reduces friction for new users by eliminating the need to create an account before purchase.
  - **Share** feature: share icon + "share" text, if clicked then copy a link to the page 


### User Profile Page

URL as "/user/[id]" -  **id** - with format such as "4M5NJ8" or "W1KQ4S" similarly to our Trip's ID

Data in page: 
 - **first name**
 - **last name**
 - **Signed Up Month**
 - **Trips Organized** [x] completed, [y] cancelled
 - **Trips Joined** [x] completed, [y] cancelled 
 - **Description**
 - **Languages** ""[icon] Speaks x, y, z" (Airbnb style)
 - **HomeBase** "Lives in [city], [country]" (Airbnb style)
 - **Kitesurfing Skills** Text field with "I can do these tricks: toe side, upwind, back roll, board rescue, self launch, self land, 10+ meter jumps, ..."
 - **Car Details** brand, model, color, year, km (i.e. 100K+).
 - **Reviews**
     - list of reviews from latest to oldest
     - each review has: a rating from 1 to 5, a comment, a trip vague date (if within month "x weeks ago", else [month] [year]) 
Overall rating ★5 | From Riders ★ | From Drivers ★5
1 trips           | 0 trips       | 1 rides
 - **Email** - as a user I can see this if driver confirmed a future trip with me
 - **Phone/Whatsapp** - as a user I can see this if driver confirmed a future trip with me
 - **Pic**
 - **Tags** i.e. Superhost, Superguest
 - **Future Trips**: upcoming trips organised by user: departure, destination, cost, driver, etc
 - **Response rate**: x%
 - **Responds within** x hours
 - **Report Button**
 - **Block Button**

---

CREATE AND UPDATE PAGES --> DB REQUIRED


### User Auth: Sign-In Page

Also serves purpose as the sign-up page.

Magic link or code.

TODO: fathom it on https://luma.com/signin


### User Dashboard Page

 - Signed up date.
 - Main Tab (for all users)
    - User Text fields: full name, address, dob, id/passport.
    - Kitesurfer Text field: 1 text field with placeholder "I can do these tricks: "toe side", "upwind", "back roll", "board rescue", "self launch", "self land", "10+ meter jumps", ..."
 - Rider Tab
     - Future Trips: departure, destination, cost, driver, etc
     - Past Trips: same details as future trips
     - CTA Cancellation: as a rider I can cancel, I can add a comment when doing so
 - Driver Tab
     - Driver Text fields:  driving license, car details (pre-fill with "brand, model, color, year, km")
     - Stats For Trips Organized: number, km, total income
     - Future Trips: departure, destination, cost, riders, etc
     - Past Trips: same details as future trips
     - CTA Cancellation: as a driver I can cancel, I can add a comment when doing so


### Create Trip Page

Only the essential details.

  - **Title**
  - **Description**
  - **Departure**
      - Exact Location (full address)
      - Pick Up Point: approximate location (Neighborood) - users only see that until they book - hiding exact trip pickup point until booking to protect organizer privacy
      - Date & Time
  - **Destination**
      - Location (the spot!)
  - **Return vs One Way** 
      - If one way, must be flagged to user (i.e. red text)
  - **Return**
      - Exact Location (full address) - should be same as departure - editable
      - Date & Time (arrival)


### Manage Trip Page - V1

The "Manage Trip" page's tabbed UI (Overview, Guests, etc.) is a model for comprehensive organizer control.

 - Everything from "Create Trip Page" plus the below
 - Same Day Return ETA
     - Estimated range i.e. 9pm - 11:55pm
 - **Seats:** Set trip capacity
 - **Publish/Unpublish**
 - **Delete**
 - **Pickup Point Neighborhood:** area of pickup point
 - **Pickup Point Exact Location:** privacy -> hide exact pickup point until booking.
 - **Regular Tier:** All bookings require organizer approval to join.


### Manage Trip Page - V2

 - **Access Tiers:** A three-tier system controls event visibility and attendance:
     - **Instant Book:** Open to all; no organizer approval needed.
     - **Conditional Instant Book:** Open to all IF passing criteria i.e. booked 10+ times; no organizer approval needed.
     - **Regular:** Requires organizer approval to join.
     - **Unlisted:** Not visible in search; accessible only via a direct link.
 - **Luggage Allowance**
     - nb kite bags (1 by default)
     - nb twintip boards (1 by default)
     - nb small bags (1 by default)
     - nb board bags (0 by default)


### Manage Trip Page - V3

Possibly coming in V3

 - Rich-text editor for event descriptions.
 - Pre-made event photo library.
 - **Seats & Waitlist:** Set trip capacity and enable an overcapacity waitlist to notify users of new openings.
 - **Image:** picture for trip - optional feature (VolleyWorld style).
 - **Email Templates:** Pre-written templates for "waitlist", "pending approval", and "confirmation" emails.
 - **Boost Tools**
     - **AI Assistant:** helps improve event description - optional feature (VolleyWorld style)
     - **Description Templates:** Pre-written text snippets are inserted into the description field via buttons, streamlining the addition of common details.
         - *Example:* "Extranet" button → "If you can bring another Extranet, please write in the chat."


# Admin Panel

Manage Trips & Users




-------------------------------------------------------

# Vx Core Features

| Feature       | MVP Scope                                         | Later (Post-MVP)           |
| ------------- | ------------------------------------------------- | -------------------------- |
| User auth     | Email or magic link e.g. Supabase Auth            | SMS and Google/Apple login         |
| Profiles      | Name, pic, kite level, car/driver flag, ratings   | Driver's License, Car Details, payment methods   |
| Ride listings | Create/view rides w price, location, date, time, comment | Map view, filters          |
| Booking       | Reserve a seat, cancel, extend (book more seats)  | Payment integration        |
| Chat          | Basic ride discussion                             | Real-time in-app messaging |
| Ratings       | Stars 1-5 and comment (for cars or experience)    | Detailed reviews           |
| Notifications | Email alerts                                      | Push notifications         |
| Admin panel   | View/manage rides & users                         | Analytics dashboard        |

Booking types:
 - Instant booking
 - Regular booking, needs manual validation by trip organizer
 - Could do something in between where the driver has 2H to cancel a one-click booking?
 - Payment escrow: money sent 24H after trip ended - unless complain of any form

Verif levels:
 - phone verif (should be re-done every 6 months)
 - ID card verif
 - Driving License verif
 - Car papers verif

Rides:
 - departure location & time+date
 - destination location & time+date
 - return location & time+date - estimated range i.e. ±1H
 - forecast: link to forecast for destination spot? comment by driver?
 - how many kite bags per person
 - how many twintip boards per person
 - how many small bags per person
 - later: can add stops

Location Detection:
 - Location of user automatically detected
      - Even when logged out
      - If logged in, can sets itself to user's home location, if another location is detected it can show a prompt
 
Chat:
 - automatic scan messages to remove sensitive content?

Booking
 - Fare calculation
 - digital receipts

Admin panel:
 - TODO: for website admin?
 
User Dashboard
 - Trip history - past rides, mileage, costs

Support & notifications
 - Chat/help center
 - Push alerts

Further ideas:
 - email-only login
 - fast guest checkout
 - Implement a universal tagging system for all content types (spotify style). everything is a tag i.e. driver, rider, same-day trips, multi-day trips, return trips, one-way trip, trip with car, trips without car, trips freshly published, trips near you, and so on
 - Explore a flexible 3-column layout with expandable side panels (spotify style).
 - Favorite - as a user I can favorite a ride, and a driver.
 - Ratings - drivers rating is super important. Featured on trip cards, trips details view, driver details view.
 - Ride - title, driver rating along w nb of rides, 
 - Cancellations - rides must be able to be cancelled, user can choose various reasons for cancellation.
 - **Tags:** "Superhost" or "Guest Favorite" for high-rated drivers.
 - **Access Tiers:** `Instant-Book` or `On Approval` or `Unlisted`

 - Can someone organize a trip even if he/she does not own a car? i.e. rents a car
 - Driver Details: full name, address, dob, driving license, id/passport, verification level.
 - Car Details: brand, model, color, year, km, number of seats, trunk max capacity kites & boards, stats for rides with car (number, km, since when)
 - Trip Details: start location, end location, start time+date, end time+date, seats available, description, instant or approval booking, driver name, driver rating, price, cancellation policy
 - Driver Dashboard: stats for all rides (number, km, money saved)
 - **Organizer Tools:** Description templates and an AI assistant streamline event creation, making it easier for organizers to add key details.
 - Kitesurfer Skill level - for all users: riders and drivers - e.g., "toe side", "upwind", "back roll", "board rescue", "self launch", "self land", "10+ meter jumps", ...

 - "Subscribe" feature + notifications for organizers and subscribers - "Kitesurfer xyz subscribed to you" for drivers, and "Kitesurfer xyz published a trip" for subscribers


-------------------------------------------------------

## Consistent Pages Components


### Top Nav

  - **Styling:**
      - Translucent background (Luma.com style)
      - Discrete logo (Luma.com style)

  - **Layout:**
      - Sticky Navigation (Luma.com style)
      - Logo (left) → Primary Actions (center) → Secondary Actions (right)
  ,
  - **Content:**
      - Logo (left)
      - Primary Actions (center)
          - Empty
      - Secondary Actions (right)
          - "Publish a trip" button - 1ry CTA
          - "Sign In" button - 2ry CTA
          - "Planet" icon - to switch language and/or currency
          - "Burger Menu": "Become a driver", "Refer a friend", ...


### Footer

Links for discovery, pricing, help, terms, and social media.

-------------------------------------------------------

## Core Flow


### Sign In Flow: any page → dedicated sign in page.

  - **Top-Nav Sign-In Button**
      - Critical button: on 100% of pages


### Search Flow: landing page search → dedicated results page.
  
  - **Landing Page Search**
      - **Search Box** 
          - Critical feature: at least 80% of users
          - Search leads to a dedicated results page with a persistent, condensed search bar.
      - **Marketing Sections** 
          - Important for SEO, value prop, safety, branding

  - **Search Result Page**
      - Critical page: at least 80% of users


### Trip Creation Flow: two-step process (Essentials → Full Management) to reduce friction.

  - **Create Trip**
      - A Simple Form
      - Essential Details: title, description, departure location, departure date+time, destination location

  - **Manage Trip**
      - A Multi-Tab Form
      - Comprehensive Trip Management: Everything Simple Form + Guests, Publish/Unpublish, Unlist, Delete, etc

-------------------------------------------------------

## Tech Stack

Frontend:
 - React + TypeScript + Tailwind CSS
 - Vite (for fast dev builds)

Backend:
 - Supabase (Postgres + Auth + Storage + Edge Functions)
→ simplifies backend + fits $0–$25/month free tier

Hosting:
 - Frontend → Vercel (free tier)

Backend → Supabase managed hosting
 - Version control: GitLab or GitHub.
 
Consider: 
 - AWS, Docker, NoSQL?Postgres?

-------------------------------------------------------

## Design & UX

Devices: 
 - Mobile-First Responsive.

Style: 
 - Minimal, surf-inspired color palette (aqua + sand tones).
 - Adopt a visual-first UI, prioritizing images and icons over text (spotify style).
 - Use icons and images first - use text only for unique content identifiers (spotify style).
 - Glassmorphism to be used when needed i.e. top nav, or other overlays
 - 3D images (Luma.com style, gft.com style)

Accessibility:
 - Color contrast, alt text, semantic HTML, aria labels and roles.

Logo:
 - find a logo that has a matching emoji or ascii character (Luma Style)

-------------------------------------------------------

## Security

Supabase Auth (magic link = passwordless).

Row-level security for user data in Postgres.

HTTPS enforced (Vercel default).

Sensitive data encrypted at rest & in transit.

-------------------------------------------------------

## Performance

Lighthouse > 90 on mobile & desktop.

Use React lazy loading & caching (React Query).

Limit heavy libraries; prefer icons via Lucide.

Scalability: MVP initially so only for a few thousand users, must be able to scale later.

-------------------------------------------------------

## Integrations

Payments (Phase 2): Stripe Checkout API.

Geolocation API (optional MVP add-on).

Email via Supabase or Resend API (for booking confirmations).

-------------------------------------------------------

## Maintenance & Updates

Stays secure, reliable, and aligned with user needs:

- Weekly bug fixes & dependency updates
- Automated deployment via GitLab CI/CD
- Use Supabase monitoring dashboard for uptime & errors.

* **System monitoring:** Tracking uptime, errors, and server health.
* **Bug fixes:** Regularly identifying and resolving issues or errors.
* **Security updates:** Patching vulnerabilities and keeping dependencies up to date.
* **Compatibility updates:** Adapting to new browsers, devices, or OS versions.
* **Feature enhancements:** Adding or improving functionality based on user feedback.
* **Performance optimization:** Ensuring the app runs smoothly as usage grows.

-------------------------------------------------------

## Timeline & Budget

Short timeline (few weeks) and low budget ($200 max). 

This is an MVP and a play project.

| Phase  | Duration       | Tasks                                  | Est. Cost                |
| ------ | -------------- | -------------------------------------- | ------------------------ |
| Week 1 | Design + setup | Wireframes, Supabase schema, auth flow | $0                       |
| Week 2 | Core dev       | Rides CRUD, list & booking             | $0                       |
| Week 3 | UI polish      | Chat MVP, email alerts, deploy         | $0                       |
| Week 4 | Testing        | QA, small fixes                        | $0–$50 (optional domain) |

-------------------------------------------------------

## Inspirations For Features, UX, Views, Components

Blablacar - trips/rides search, ride options, driver profile, etc

VolleyWorld - event creation, automatic and manual approval, group chat

Airbnb - instant bookings, review system, map

Spotify - smooth ux, intuitive navigation

Luma.com - smooth ux, notification features, 

Momondo.es - smooth UX, 

-------------------------------------------------------

## Monetisation

Freemium model, only basic features for free, so ppl can try out the platform first.

Premium, maybe simply on a pay-as-you-go basis (fee when paying via platform).
 
-------------------------------------------------------

## Project Plans

### 1. Pending List Of Your Features

What pages/views do you need?

What will users do on your app?

What data will you work with?

### 2. Build the User Interface

Start with the layout and navigation

Create reusable components (buttons, cards, forms, etc.)

Add styling (you can use CSS, Tailwind, or other frameworks)

### 3. Add Functionality

Connect to APIs or databases if needed

Implement user interactions

Add state management (React hooks, Context API, or libraries like Redux)

### 4. Connect External Services

Authentication - user login/signup

Database - to store data

Payment processing - Stripe integration

APIs - OpenAI, Twilio, etc.

### 5. Test and Polish

Test all features

Fix bugs

Improve design and user experience








