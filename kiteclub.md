

-------------------------------------------------------

# KiteClub Web App 

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
 
Consider: AWS, Docker, NoSQL?Postgres?

-------------------------------------------------------

## Design & UX

Devices: mobile-first responsive web app.

Style: Minimal, surf-inspired color palette (aqua + sand tones).

Layout: Dashboard with ride cards, “Create Ride” button, and chat overlay.

Accessibility: Color contrast, alt text, semantic HTML.

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

Payments (Phase 2): Stripe Checkout API

Geolocation API (optional MVP add-on)

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







