

-------------------------------------------------------

# Kite Clubs

-------------------------------------------------------

## Index: Web App Requirements 

1. **Purpose & goals** – what problem it solves.
2. **Target users** – who will use it.
3. **Core features** – essential functionality (e.g., login, dashboard, payments).
4. **Tech stack** – frontend, backend, database, hosting.
5. **Design & UX** – layout, accessibility, responsiveness.
6. **Security** – authentication, data protection.
7. **Performance** – speed, scalability.
8. **Integrations** – APIs or third-party tools.
9. **Maintenance & updates** – how it’ll be supported.
10. **Timeline & budget** – estimated phases and costs.

-------------------------------------------------------

## Purpose & Goals

A lightweight web app for kitesurfers to share rides — connecting drivers and riders for day trips to kitesurfing spots.

Goal: Make trip coordination effortless while testing interest and core functionality before scaling.

-------------------------------------------------------

## Target Users

Drivers – kitesurfers with cars who want to share rides & split costs.

Riders – kitesurfers without cars who need transport to kitesurfing locations.

-------------------------------------------------------

## MVP Core features

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
 - One-click booking
 - Regular booking, needs manual validation
 - Could do something in between where the driver has 2H to cancel a one-click booking?
 - Payment escrow: money sent 24H after trip ended

Verif levels:
 - phone verif (should be re-done every 6 months)
 - ID card verif
 - Driving License verif
 - Car papers verif

Rides:
 - departure location & time+date
 - return location & time+date - time can be indicated with estimated range i.e. ±1.5H
 - forecast: link to forecast for destination spot? comment by driver?
 - how many kite bags per person
 - how many twintip boards per person
 - how many small bags per person
 - later: can add stops

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
- Adopt a visual-first UI, prioritizing images and icons over text (spotify style).
- Use icons and images first - use text only for unique content identifiers (spotify style).
- Implement a universal tagging system for all content types (spotify style). everything is a tag i.e. driver, rider, same-day trips, multi-day trips, return trips, one-way trip, trip with car, trips without car, trips freshly published, trips near you, and so on
- Explore a flexible 3-column layout with expandable side panels (spotify style).
- Favorite - as a user I can favorite a ride, and a driver.
- Ratings - drivers rating is super important. Featured on trip cards, trips details view, driver details view.
- Ride - title, driver rating along w nb of rides, 
- Cancellations - rides must be able to be cancelled, user can choose various reasons for cancellation.
- **Tags:** "Superhost" or "Guest Favorite" for high-rated drivers.
- **Booking Type:** `Instant-Book` or `On Approval` 
- **Visibility:** `Unlisted` offers flexible event visibility

- Driver Details: full name, address, dob, driving license, id/passport, verification level.
- Car Details: brand, model, color, year, km, number of seats, trunk max capacity kites & boards, stats for rides with car (number, km, since when)
- Driver Dashboard: stats for all rides (number, km, money saved)


-------------------------------------------------------

## Pages

### Homepage

  - **Hero Section:**
      - **Top Bar:** Logo (left) → Publish a trip → Secondary actions (Become a driver, Language, Burger Menu (Become a driver, Refer a driver, ...)).
      - **Search Box:** Departure, Trip start date
  - **Marketing Sections:**
      - **Stats Section:** number of drivers, rides, etc
      - **How It Works Section:** search for rides, Book your seat, Hit the water
      - **Featured Upcoming Rides:** cards of several rides

### Search Results Page (SRP)

  - Consider implementing only 
  - **Layout:** Split-panel design.
      - **Right:** Map showing trip start locations with markers containing further info
      - **Left:** Grid of trip cards.
  - **Trips Card Details:**
      - **Images:** Hovering over the main image triggers a slideshow (driver profile pics, car pics)
      - **Tags:** "Superdriver" or "Riders Favorite" for high-rated drivers.
      - **Actions:** Favorite button (heart icon).
      - **Title:** Driver-defined name for the trip.
      - **Rating:** Star rating *and* the total number of reviews (e.g., 4.8 (123)).
          - **Significance:** The review count provides social proof, showing the rating's reliability.
      - **Description:**
          - Shortened summary.
          - Seat count.
      - **Pricing:** Total cost.
      - **Cancellation:** Explicitly stated policy (e.g., "Free cancellation").
  - **Navigation:** Uses traditional pagination (numbered pages), or infinite scroll.
  - **Map showing trip start locations:**
      - markers containing start date+time, destination, price, driver name, driver rating and trips (e.g., 4.8 (123)).

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

Devices: mobile-first responsive.

Style: Minimal, surf-inspired color palette (aqua + sand tones).

Layout: Dashboard with trip items, “Create Ride” button, and chat overlay.

Accessibility: Color contrast, alt text, semantic HTML, aria labels and roles.

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





Trips: 
- Type: 1 one way vs Return



