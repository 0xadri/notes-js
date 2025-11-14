

-------------------------------------------------------

# Luma.com Review, For Kite Clubs

-------------------------------------------------------

# Impromptu Zoom Meeting - November 14
[**VIEW RECORDING - 40 mins (2 mins of highlights)**](https://fathom.video/share/3W26nnJmvFnTvo42xXsxQxFsrzfpMwMp)

---
## Meeting Purpose

Review luma.com to identify UX/UI features for replication.

## Key Takeaways

  - **Event Creation:** A two-step flow (Essentials → Full Management) reduces friction. The "Manage Event" page's tabbed UI (Overview, Guests, etc.) is a model for comprehensive organizer control.
  - **Discovery UX:** The `luma.com/discover` page is a model for event discovery, using sticky navigation, a translucent header, and a tabbed "Explore Local Events" section to show city activity at a glance.
  - **Growth Loops:** A "Featured Calendars" section with a "Subscribe" feature is a key growth loop, fostering user-generated content and platform re-engagement via notifications.
  - **Critical Features:** Key features to replicate include: email-only login, a fast guest checkout, and hiding exact event locations until booking to protect organizer privacy.

## Topics

### Landing Page & Navigation

  - **Landing Page:** A simple, full-page design with a single CTA for organizers ("Create your first event"), not attendees.
  - **Navigation:** A narrow, sticky top bar with a translucent effect.
      - **Left:** Discrete logo.
      - **Right:** Current time/timezone, "Explore Events" link, and a prominent "Sign In" button.
  - **Footer:** Contains links for discovery, pricing, help, terms, and social media.

### Event Discovery (`/discover`)

  - **Structure:** A single-page layout with a sticky, translucent header.
  - **Sections:**
      - **Popular Events:** Location-specific event cards with a "View All" CTA.
      - **Browse by Category:** Buttons to filter events by category (e.g., Tech, Food & Drinks) in the user's location.
      - **Featured Calendars:** Cards for organizer calendars with a "Subscribe" CTA, designed to foster user-generated content and platform re-engagement.
      - **Explore Local Events:** A tabbed layout showing city activity by region (e.g., Europe, Africa). Each city card displays its name and total event count, providing a quick visual overview of platform activity.

### Event Page & Checkout

  - **Core Info:** Title, date/time, location (city only by default), and booking status.
  - **Description:** A rich-text field with a one-way "Translate to English" button.
  - **Location:** A map showing the exact location is hidden until booking.
  - **Host Info:** A hover card on the host's name shows basic info, guest count, and a "Contact Host" link.
  - **Guest Checkout:** A fast, guest-friendly flow.
      - **Process:** Click "Get Tickets" → an overlay appears for name, email, and card details.
      - **Rationale:** Reduces friction for new users by eliminating the need to create an account before purchase.

### Event Creation & Management

  - **Login:** Email-only login via a 6-digit code.
      - **Rationale:** Ensures email addresses are always current and avoids password fatigue.
  - **Creation Flow:** A two-step process to reduce initial friction.
    1.  **Essentials:** A simple form for name, date, location, and visibility (Public/Private).
    2.  **Management:** A comprehensive "Manage Event" page with a tabbed UI for full control.
  - **Key Organizer Features:**
      - **Location Privacy:** Option to hide the exact location until booking.
      - **Capacity & Waitlist:** Set event capacity and enable an overcapacity waitlist to notify users of new openings.
      - **Ticket Types:** Create multiple ticket types with individual pricing, capacity, and approval requirements.
      - **Email Templates:** Pre-written templates for waitlist, pending approval, and confirmation emails.

## Next Steps

  - **Replicate Core UX/UI:**
      - Sticky, translucent navigation header.
      - Two-step event creation flow.
      - Tabbed "Manage Event" page for organizers.
      - Tabbed "Explore Local Events" section on the discovery page.
  - **Implement Key Features:**
      - Email-only login.
      - Fast guest checkout flow.
      - "Subscribe" feature for organizer calendars with notifications.
      - Option to hide exact event location until booking.
  - **Consider for Future:**
      - Rich-text editor for event descriptions.
      - Pre-made event photo library.

## Action Items

- **Add subscribe/unsubscribe + notifications for organizers and subscribers**
- **Implement 6-digit email login code**
- **Hide exact event location by default; show only after booking**

## Annotations


**HIGHLIGHT**
- **nav translucent** - Adrien clarifies the navigation effect is translucent, not glow, and needs replication
- **Subscribe Feature** - Adrien discusses using subscribe notifications to foster user-generated content and platform engagement
- Adrien describes event form fields including name, dates, timezone, location, and ticket type
- **Restrict Visibility Exact Event Location** - Adrien describes event editing features and default location privacy settings


