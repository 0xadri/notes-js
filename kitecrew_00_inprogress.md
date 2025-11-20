






 - returnETA location & time+date - estimated range i.e. ±1H


---

Switch to webpack

---

GitLab setup








-----------------------

Linter + Prettier

---

Set up pre-commit hook so it runs `npm run lint:fix` 
 - only on files changed?
 
---

Do NOT install "husky" plugin

Maybe for the below, install and setup one by one.

Add these plugins, only add these plugins to the existing ones.
    "@typescript-eslint/parser"
    "@typescript-eslint/eslint-plugin"
    "eslint-plugin-react"
    "eslint-plugin-tailwindcss"
    "lint-staged"







-----------------------

# Prompt BU: USERS

Similarly to mockTrips.ts, create mockUsers.ts.

It should have 7 users.

Each user has these fields:
 - **id** with format such as "4M5NJ8" or "W1KQ4S" similarly to our Trip's ID in mockTrips.ts
 - **first name**
 - **last name**
 - **Signed Up Date**
- **Trips Organized** an object such as {completed: x, cancelled: y}
 - **Trips Joined** an object such as {completed: x, cancelled: y}
  - **Description**
 - **Languages** an array of strings such as [language1, language2, language3]
  - **HomeBase** {city: city1, country: country1"
   - **Car Details** brand, model, color, year, km (i.e. 100K+)
- **Email** 
- **Phone**
- **Tags** i.e. Superhost, Superguest

When generating values, replace placeholders (i.e. x, y, language1, language2,language3, city1, country1 ) by something that makes sense. Here are some clues:
 - All our users are based in Barcelona
 - Most users speak Spanish. Most speak English. Then some speak Russian, French, Italian, Catalan, Portugues, German, Dutch, and other european languages.
 - Most users drive European cars, but there is a bit of foreign cars too.
 - Most users signed up in the last 12 months
 - Most users organized maximum 23 trips
 - Most users joined maximum 23 trips

Show me a sample of how the data would look like.

-----------------------

# Prompt BU: USERS SKILLS

Add this field to each user:

 - **kitesurfSkills**: an array of strings such as [trick1, trick2, trick3, etc]

90% users have tricks of Super Easy Level:
Body Drag Upwind
Edging Upwind
Basic Jump (Small Pop)
Slide Turn
Toe-Side Riding

40% users have some tricks of Easy Level:
Basic Backroll (Low Height)
Heel-to-Toe Carve Transition
Toe-to-Heel Carve Transition
Downloop Transition
Tail Grab (Small Jump)
Nose Grab (Small Jump)
Surface 360
Pendulum Jump

20% users have some tricks of Medium Level:
Backroll Transition
Frontroll Transition
Powered Pop Jump
Dark Slide
Double Backroll (Small Height)
One-Foot Jump
Raley (Unhooked)
Shifty (Hooked or Unhooked)
Backroll Tail Grab
Toeside-to-Blind Transition

8% users have some tricks of 
Difficult Level:
Frontroll to Blind
S-Bend (Unhooked)
Back Mobe
Slim Chance
Handlepass (Air Pass)
