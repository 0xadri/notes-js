
-------------------------------------------------------

# What are Pure Components in React?

TLDR: a special component type that avoids unnecesarry re-renders by checking if the props and state really changed.

Pure Components are legacy React components written with classes, with React.PureComponent and React.Component.

PureComponent does a shallow comparison on state change: when comparing scalar values it compares their values, but when comparing objects it compares only references.

Use React.PureComponent when you can satisfy any of the below conditions.

 - State/Props should be an immutable object
 - State/Props should not have a hierarchy
 - You should call forceUpdate when data changes

https://legacy.reactjs.org/docs/react-api.html#reactpurecomponent

https://stackoverflow.com/questions/41340697/react-component-vs-react-purecomponent

-------------------------------------------------------

#  Can React components inherit from each other? 

No, React favours composition over inheritance - components can ensemble in different ways but do not inherit from each other.

-------------------------------------------------------

# What are Semantic HTML tags?

These are tags that define the meaning of the content they contain.

They make HTML more understandable for both humans and machines, including search engines and accessibility tools.

These are some of the roughly 100 semantic elements available.

Examples:

`<header>`: Defines the header of a document or a section. 
`<h1>`: Defines a top title
`<nav>`: Defines a section of navigation links. 
`<main>`: Defines the main content of a document. 
`<article>`: Defines a self-contained piece of content that can be distributed or reused independently. 
`<aside>`: Defines content that is tangentially related to the surrounding content, like a sidebar. 
`<footer>`: Defines the footer of a document or a section. 
`<section>`: Defines a generic section of a document. 
`<figure>`: Defines self-contained content like images, diagrams, or code listings. 

https://developer.mozilla.org/en-US/docs/Glossary/Semantics

https://web.dev/learn/html/semantic-html/

-------------------------------------------------------

# What's ARIA?

ARIA stands for Accessible Rich Internet Applications.

ARIA roles provide semantic meaning to elements on a webpage, enabling assistive technologies to better understand and interact with the content.

If Semantic HTML tags isn’t possible or relevant enough, utilize the 'role' attribute and ARIA labels to define the purpose and function of elements.

So either:
 
 1. Non-Semantic HTML with 'role' attribute and ARIA label. i.e. `<div role="application">`
 
 2. Semantic HTML with 'role' attribute and ARIA label. i.e. `<section role="banner">`

https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles

https://web.dev/learn/accessibility/aria-html

https://wpshout.com/wai-aria-roles/

https://stackoverflow.com/questions/4509761/whats-the-best-semantic-way-to-wrap-a-search-area

-------------------------------------------------------

# Do you know some tools for Accessibility?

axe DevTools - Web Accessibility Testing

A11y ESLint plugin - static evaluation of the JSX to spot accessibility issues in React apps

-------------------------------------------------------

# What are the Best Practices for Accessibility?

Use Semantic HTML.

Use `role` attribute (ARIA) when needed.

Use appropriate contrast for text to ensure readability.

Use the `tabindex` HTML attribute to control the focus order.

Use dev tools to test the quality of the accessibility of your page.

Use A11 to check you have the right accessibility for your target audience https://www.a11yproject.com/checklist/

-------------------------------------------------------

# What are the key concepts of a component framework?

Component frameworks, aka component-based frameworks.

- OOP - Components as the main abstraction 

- Declarative Programming for simpler/readable component structures (JSX)

- The State Machine pattern - to model and manage data in a deterministic way

- Virtual DOM to make UI reconciliation fast

-------------------------------------------------------

# What are the pros of using Component-Based Architecture?

If we split the UI into isolated and reusable pieces we can build it just like we do with Lego pieces. 

That makes development a lot faster and more reliable - we can unit test our components and we eliminate undesired side effects.

-------------------------------------------------------

# What's Declarative Programming?

In react, it is done with JSX.

Simplifies UI construction by allowing developers to declare what the UI should look like, rather than manually manipulating the DOM.

-------------------------------------------------------

# What's the difference between essential state vs derived state?

essential state = independent state

derived state = calculated from other state variables

Redundant state is a derived state that is treated as essential state. 

Redundant state will result in convoluted components that re-render too many times due to unecesarry state updates.

-------------------------------------------------------

# What does "Lifting State Up" mean?

When multiple components need access to the same state, the state is 'lifted up' to their common ancestor and passed down as props.

-------------------------------------------------------

# What's Prop Drilling?

When state is passed down from a parent component through various levels of nested child components as props. 

This can lead to scenarios where intermediate components, which do not directly need the state for their own purposes, still have to pass it down to their children. 

It can result in bloated components making the code more coupled, less testable, and more brittle.

-------------------------------------------------------

# What's the Best Practice when using Context API?

Use of Context and Providers for distributing global state (like authentication data or translation settings) across multiple components.

These can be placed at different points in the component tree, not just at the top level.

-------------------------------------------------------

# What's useReducer() ?

useReducer is a React Hook that provides an alternative way to manage component state, particularly useful for more complex state logic. 

It allows you to manage state using a reducer function, similar to how Redux manages state. The useReducer hook returns the current state and a dispatch function that triggers state updates based on actions

-------------------------------------------------------

# What are Third-Party State Management Libraries? Why would you use them?

These libraries offer pre-built solutions for managing complex application state and/or complex state transitions.

They often implement the Observer Pattern.

Known libraries: Redux, XState, Recoil, Zustand.

Cons: adds another dependency.

TLDR: shiny thing you might not need.

-------------------------------------------------------

# What are some State Management Anti-Patterns?

Overstoring State: Storing both essential and derived state variables in your state management system, leading to redundancy, unnecessary complexity, and potential performance issues

Lifting State Too High

Premature Use of State Libraries

Overloading a Single Context Provider: Consolidating all global states into a single provider, causing unnecessary re-renders across multiple components.

Neglecting Reducer for Complex State: not using the reducer pattern for complex state transitions, leading to convoluted state management by abusing simpler state hooks like useState or useEffect.

-------------------------------------------------------

# What's the Best Practice for Sate Management?

Focus on Essential State: Identify and manage only the essential state.

Optimal State Placement: Instead of lifting state too high, place state in the lowest common ancestor component.

Leveraging Native Framework Features: Before turning to third-party libraries, fully utilize the native state management features of your framework. For React: useState, useReducer, and Context API.

Multiple Context Providers: Use multiple context providers to manage different pieces of global state, i.e. one for language, one for auth, one for theme. This approach reduces unnecessary re-renders and keeps your application more performant.

Use Reducers for Complexity: For complex state logic, especially when dealing with nested state or multiple state transitions, employ reducer patterns (like useReducer in React) to simplify state management and enhance readability.

-------------------------------------------------------

# In a react app, what are some easiest components to Unit Test? What does it imply?

Components located at the bottom of the component tree are generally easier to Unit Test. 

They tend to be stateless, simply rendering props, which makes them straightforward for testing. 

This implies we test these first and then gradually move up the tree to test more components.

-------------------------------------------------------

# What happens when as you move up the component tree when Unit Testing?

Testing complexity increases due to dependencies on child components.

In such cases, Unit Tests may become cumbersome, and it's better to switch to End-To-End Testing.

-------------------------------------------------------

# What is the most effective method to prevent Cross-Site Scripting (XSS) attacks in a frontend application?

Validating and sanitizing all user input before rendering it on the webpage

-------------------------------------------------------

# To prevent XSS Attacks for accessing sensitive data from our cookies we should?

Set cookies as HttpOnly.

When cookies are used in web applications, they are automatically included in every request sent to the server. By setting a cookie with the HttpOnly attribute, you ensure that the cookie cannot be accessed by JavaScript running in the browser. This restriction is crucial because it prevents malicious scripts injected into your web pages from accessing the cookie's contents.

This security feature is essential in scenarios where an attacker might exploit XSS vulnerabilities to execute unauthorized scripts in a user's browser. Such scripts could attempt to steal cookie data, including potentially sensitive session tokens. With HttpOnly enabled, even if an attacker succeeds in injecting malicious script, the script would not be able to read the cookie, reducing the risk of session hijacking.

-------------------------------------------------------

# To prevent Man In The Middle Attacks from accessing sensitive data from cookies we should write the cookies with the following property:

Secure - when set, ensures that cookies are sent only over HTTPS, protecting them from interception via man-in-the-middle attacks on insecure networks.

-------------------------------------------------------

# Which HTTP header is important for preventing clickjacking attacks?

X-Frame-Options.

X-Frame-Options, when set to DENY or SAMEORIGIN, prevents the webpage from being displayed in a frame, which is a common technique used in clickjacking attacks.

What's Clickjacking?

TLDR: hidden malicious iframe.

Imagine an attacker who builds a web site that has a button on it that says “click here for a free iPod”. However, on top of that web page, the attacker has loaded an iframe with your email account, and lined up exactly the “delete all messages” button directly on top of the “free iPod” button. The victim tries to click on the “free iPod” button but instead actually clicked on the invisible “delete all messages” button. In essence, the attacker has “hijacked” the user’s click, hence the name “Clickjacking”.

-------------------------------------------------------

# What's Treeshaking?

The process through which the module bundler removes unused dependencies (dead code).

-------------------------------------------------------

# What is the default behavior of a click on the submit button of a <form/> in the web browser?

A GET request on the form url with the form content in the body and a page refresh.

The form data will be submitted to the current URL. This is because when the action attribute is omitted, the browser defaults to submitting the form back to the URL of the page the form is on.

The default HTTP method for form submission is GET. Therefore, the form data will be appended to the URL as encoded query parameters.

After the submission, the browser will refresh the page with the form data visible in the address bar.

-------------------------------------------------------

# How can we debug in production after the code was compressed, uglified and minified ?

We must emit Source Maps from our build process.

-------------------------------------------------------

# In our Webpack setup, we use TypeScript with the TypeScript loader to transpile our code and ES6 import/export for our modules. However, we noticed that tree shaking did not work(when building for production), and we are still shipping unused modules in the final bundle. What could be the reason for this issue?

TLDR: TypeScript output is set to compile to ES5 or earlier, using CommonJS modules which do not support tree shaking.

ES6 modules (import/export syntax) are necessary for tree shaking to work effectively because they support static analysis, whereas CommonJS modules (require/module.exports) do not. If TypeScript transpiles code to use CommonJS modules, Webpack will not be able to perform tree shaking, resulting in unused code being included in the production bundle.

Ensuring that the TypeScript compiler (tsconfig.json) is set to output ES6 modules (by setting "module": "es6" or "module": "esnext") will solve the issue.

The other options are wrong for different reasons:

Side Effects: An incorrect configuration of the sideEffects property can indeed affect tree shaking by causing Webpack to include modules that it otherwise might exclude, this is more about optimizing an already functional tree shaking setup rather than the primary cause of tree shaking failing entirely. If tree shaking isn't working at all, the issue is more likely related to how the modules are handled, as in using CommonJS instead of ES6 modules.

Webpack Mode: Setting the Webpack mode to development indeed disables or reduces optimization processes, including tree shaking. However, the question implies the inspection of a production build, where the production mode should be used.

Polyfills: Incorrect handling of polyfills can increase the bundle size but isn't directly related to tree shaking of your own code modules. Polyfills typically affect how modern JavaScript features are supported in older browsers and are managed through Babel rather than impacting Webpack's tree shaking directly.

-------------------------------------------------------

# To make components easier to test we should:

1. Keep component dependencies minimal

2. Avoid using global state(unless necessary)

-------------------------------------------------------

# Composition Over Inheritance is an OOP principle that states …

… that we can achieve new functionality by grouping components(or functions) into higher order components in higher order structures

-------------------------------------------------------

# The relationship between state and the UI is said to be deterministic. What does that mean?

1. for each version of the state, there is a unique version of the UI(User Interface)

2. the state is the source of truth and the UI is a function of that state

Modern JS frameworks circle around the idea of "the UI as a function of state". 

This simplifies development and testing because is easy to predict how the application will look like, if we know the state. 

The opposite is having arbitrary UI changes and heavily imperative code (e.g. jQuery) which result in unpredictable UIs and bloated spaghetti code.

-------------------------------------------------------

# What are the 3 Pillars Of Web Performance?

1. Perceived Load Speed

2. ResponsivenessToInput/Interactivity

3. Visual Stability

-------------------------------------------------------

# What's the difference between Core Web Vitals and the 3 Pillars Of Web Performance?

Core Web Vitals are a set of metrics that measure key aspects of a webpage's user experience, specifically focusing on : loading speed, interactivity, and visual stability.

Same focus as 3 Pillars Of Web Performance. But different namings:

1. Largest Contentful Paint (LCP): Perceived Load Speed: how long it takes for the largest content element on a page to become visible. A good LCP score should be less than 2.5 seconds.

2. Interaction to Next Paint (INP): Responsiveness/Interactivity: how quickly a website responds to user interactions. A good INP score should be 200 milliseconds or less.

2.B. First Input Delay (FIP): Responsiveness/Interactivity: how long it takes for the first text/image on a page to become visible. Being deprecated, and replaced by INP.

3. Cumulative Layout Shift (CLS): Visual Stability: the amount of unexpected visual shifting during page loading. A good CLS score should be less than 0.1. 

There are additional Core Web Vitals:

FCP for First Contentful Paint: time at which the first text or image is painted. 

-------------------------------------------------------

# The product manager complained the web application you are building is slow which frustrates users. What is the first step to fix it?

Use:

1. Dev tools to run a `Core Web Vitals` analysis to understand where the perception of slow comes from - i.e. with Lighthouse (built-in with Google Chrome Dev Tools) or CatchPoint

2. `Real User Monitoring` (RUM) tools such as `Sentry` for gathering real-world user data is essential - production monitoring

3. `Chrome Performance Insights` (Chrome Dev Tool)

4. `Performance Tab` in Chrome Dev Tools

https://github.com/GoogleChrome/lighthouse

https://web.dev/articles/optimize-vitals-lighthouse

https://www.catchpoint.com/webpagetest

https://sentry.io/

https://www.speedcurve.com/

-------------------------------------------------------

# Any tips when using Lighthouse ?

1. Open an incognito window in Chrome when running Lighthouse - this removes Chrome addons and their heavy JavaScript 

2. Checkout the "Lighthouse Treemap" to see the treemap of all the JavaScript sent to our web browser

https://github.com/GoogleChrome/lighthouse

https://web.dev/articles/optimize-vitals-lighthouse

-------------------------------------------------------

# How can you improve a bad CLS (Cumulative Layout Shift)?

By adding a visual placeholder library i.e. skeleton, shimmer

https://shimmereffectreact.vercel.app/

https://github.com/tomzaku/react-native-shimmer-placeholder

-------------------------------------------------------

# Which web performance metric will improve the most if we add a CDN to our architecture?

FCP (First Contentful Paint) - the time it takes to render the first text, image, non-white canvas, or non-white SVG.

Adding a CDN will most likely:

Decrease the download time of the assets(because the assets are geographically distributed which reduces the network latency)
Decrease the size of the assets(compression, content negotiation)
Apply the right http caching headers

-------------------------------------------------------

# Client (Browser) Caching is managed by:

Indicating that the file should be cached by the browser and reused in the following requests(using HTTP headers), unless a new version is released

-------------------------------------------------------

# What are the most common ways to compress JavaScript for the web browser?

Gzip and Brotli.

Brotli offers a better compression ratio at similar compression levels. 

https://www.patterns.dev/vanilla/compression/

-------------------------------------------------------

# How do you optimize the JavaScript Bundle ?

JavaScript Bundle Optimization can be done with:

1. Bundle Cleanup: Analyze your bundle and reduce your JavaScript bundle size by removing unused code, uninstalling unused packages, or replacing them with vanilla js implementation. 

2. Minification and uglification: to reduce the size of the final javascript file.

3. Code Splitting: Implement code splitting and defer non-critical JavaScript to ensure that only necessary scripts are loaded initially for each page, improving SPA performance. Module bundlers will tag the non-critical scripts with defer or async so the browser will download them in parallel and parse and execute them after the first render.

-------------------------------------------------------

# What's the Critical Rendering Path?

The Critical Rendering Path (CRP) is composed of several key steps for processing and displaying a web page:

1. HTML Request (fetch)

2. Parse HTML, Build DOM (render)

3. Blocking Resources in Head - fetch and process

  a. CSS Fetch and Process

  b. JavaScript Processing 

4. Render

  a. Render Tree Construction (CSSOM and DOM trees)

  b. Layout Calculation (Positions and Sizes for Elements)

  c. Paint
  
  d. Font and Images are loaded

-------------------------------------------------------

# What are Critical Tasks that block the First Render?

The following tasks will block the first render and result in a low FCP score:

1. CSS Download and Processing

2. Synchronous JavaScript Execution

3. HTML Parsing Pauses

-------------------------------------------------------

# What are the steps to build a high performance web app?
 
1. Diagnosis (Lighthouse)

2. Server Optimization (compression, caching)

3. Static Asset Optimization (css, js, images, fonts)

4. JavaScript Optimization (code splitting, lazy loading, dynamic imports)

5. Framework Optimization (react memo, decrease re-renderings)

In all of the points above: implement best practices and remove anti-patterns that crept in.

-------------------------------------------------------

# What can you do to optimize images?

1. Third-party Compression Tools: Before even beginning with webpack, consider using tools like TinyPNG or JPEGmini to compress your images. It ensures your starting point already involves optimized assets.

2. Lazy Loading: Always remember to incorporate lazy loading for images. Utilize the loading=“lazy” attribute on image tags. This ensures images load only when in the viewport, enhancing the initial page load time.

3. Content Delivery Network (CDN): If your React application is expected to have a wide user base, consider serving your images via a CDN. CDNs cache content across global servers, ensuring faster delivery times.

4. Responsive Images with srcSet: In today’s age of multiple devices, it’s crucial to serve the right image size to the right device. Use the srcSet attribute to handle this efficiently.

5. Optimize images using your build/bundling tool

-------------------------------------------------------

# How do you optimize images using webpack?

There are various plugins available such as:
 - `image-webpack-loader`
 - `compression-webpack-plugin`
 - `ImageMinimizerWebpackPlugin`

https://cloudinary.com/blog/guest_post/optimize-images-using-webpack-in-react

https://www.npmjs.com/package/compression-webpack-plugin

https://webpack.js.org/plugins/image-minimizer-webpack-plugin/

-------------------------------------------------------

# Server-Side rendering (SSR) would have the most positive impact on the following web performance metric:

FCP (First Contentful Paint) - the time it takes to render the first text, image, non-white canvas, or non-white SVG.

Rendering the application on the server will decrease the time we need to show something to the users because it speeds up the rendering (as the client receives pre-rendered html instead of JS).

Server Side Rendering prevents the White Screen of Death (WSD), which is a common issue with client side rendering.

https://web.dev/articles/rendering-on-the-web

-------------------------------------------------------

# What's code splitting?

Code splitting is a technique used in web development to break down a large JavaScript codebase into smaller, more manageable chunks that can be loaded independently. 

This allows browsers to download only the necessary code for the current page or functionality, improving initial load time and overall performance.

This is done by the bundler, i.e. webpack or vite

https://webpack.js.org/guides/code-splitting/

-------------------------------------------------------

# What's Cache Busting? And which method is used in production environments to implement cache busting?

Cache Busting ensures that users always load the most recent version of a resource like CSS or JavaScript files.

It is done in production by appending a unique hash based on the file's content to the filename.

This is often done by the bundler, i.e. webpack or vite

https://webpack.js.org/guides/caching/

-------------------------------------------------------

# What's Critical CSS?

Critical CSS, aka Critical Path CSS, aka Above the fold CSS.

It is the CSS applied to above-the-fold elements. 
 
It is the CSS responsible for content a viewer sees on page load, before scrolling.

-------------------------------------------------------

# From a web performance perspective, which image format is generally considered the best (high compression rates that still maintain good image quality)?

WebP

-------------------------------------------------------

# If you want to display different images depending on the viewport size to enhance responsiveness and optimize loading times, which HTML attribute should you use?

The `srcset` attribute with the `<img>` tag.

This attribute allows you to define multiple source images along with their dimensions, enabling the browser to choose the most appropriate image based on the screen resolution and device orientation.

-------------------------------------------------------

# Which performance metric is most directly affected by excessive re-renders in web frameworks such as React, Vue, or Angular?

1. INP(Interaction to Next Paint) - the time it takes to paint the next frame after a user interaction.
2. First Input Delay (FID) measures the time from when a user first interacts with a page (i.e., when they click a link

Interaction to Next Paint (INP): measures the responsiveness of an application by tracking the time from when a user interacts with the page to when the browser is able to update the visual display in response to that interaction. 

First Input Delay (FID): measures the time from when a user first interacts with a page (i.e., when they click a link, tap on a button, or use a custom, interactive control) to the time when the browser is actually able to begin processing event handlers in response to that interaction.

Excessive re-renders can significantly delay both metrix as they often involve additional computations and DOM manipulations, which block the main thread. This leads to longer wait times for visual updates after interactions, such as clicks or key presses, directly impacting the user's perceived responsiveness of the application.

-------------------------------------------------------

#  True statements about Server-Side Rendering (SSR)

SSR improves SEO by allowing web crawlers to see the fully rendered page.

SSR generally doesn't impact static websites as they do not rely heavily on rendering processes that benefit from server-side rendering.

SSR can actually increase the TFB(Time To First Byte) as we need to first render the application on the server and then send the rendered response.

-------------------------------------------------------

# In which order will the event handlers be called when the user clicks the button?

 - most inner button has: `addEventListener("click", onButtonClick)`

- inner div has: `addEventListener("click", onContainerClick, {capture: true})`

- outer div has: `addEventListener("click", onOuterContainerClick)`

The correct answer is Capturing & Bubbling: onButtonClick() > onOuterContainerClick() > onContainerClick(). 

Here's the sequence of events when the "Submit" button is clicked:

 - onContainerClick() — Because the {capture: true} option is used, this event handler is set to execute during the capturing phase, which occurs before the target phase (where the event occurs on the element that was actually clicked).

 - onButtonClick() — This occurs at the target phase, specifically on the button element where the click event actually happened.

 - onOuterContainerClick() — This event handler is not specified to execute during the capturing phase (the default is bubbling), so it will execute last, during the bubbling phase after the event has reached the outer_container in the propagation sequence.

The capturing phase occurs from the outermost element down to the target element, and the bubbling phase occurs from the target element up to the outermost element. Since the onContainerClick is explicitly set to capture, it goes first, followed by the button's click handler as the event target, and finally, the event bubbles up to the outer_container.


-------------------------------------------------------

# You are working on a big front-end code base. In the last releases, you had several bugs due conflicts between CSS classes with the same name. Some CSS classes were used and extended in different parts of the code leading to unpredictable element styles. Which of the following would solve the problem?

Adding JSS (CSS in JS) which eliminates conflicts by generating unique class names(using the component/file name).

JSS (CSS in JS) automatically prefixes the CSS classes with a unique hash generated at build time.

-------------------------------------------------------

# If you want to include the padding in the width calculation of an HTML element using CSS, which CSS property should you adjust?

Set the `box-sizing` property to `border-box`.

-------------------------------------------------------

# when should you use HTML ARIA attributes?

Whenever we cannot use semantic HTML tags

Semantic HTML elements (such as <nav>, <article>, <button>, etc.) provide built-in accessibility features by conveying the meaning and structure of the content to both users and assistive technologies(like screen readers).

However, in cases where semantic HTML alone cannot adequately describe the interactive or dynamic nature of certain elements (such as custom widgets or dynamic content), ARIA attributes should be used to supplement accessibility.

-------------------------------------------------------

# examples of poor accessibility?

- Poor contrast between text and background - this directly impacts accessibility, as it can make content difficult or impossible to read for users with visual impairments

- Using images of text instead of actual text - screen readers cannot interpret text within images. Users who rely on screen readers or have visual impairments will not be able to access the information conveyed in the images, resulting in a loss of content and functionality.

Incorrect Answers:

- Including decorative images with empty alt attributes - Decorative images do not need an alt attribute because they do not convey any meaningful information to users.

- Not optimizing images for fast loading times(with lazy loading) - this might improve the performance of the page, but it does not impact accessibility.

-------------------------------------------------------

# How do we solve accessibility issues as part of our development code quality process?

 - Running Accessibility audits with tools like Lighthouse or the axe DevTools

 - Setting up the a11y linter to catch accessibility issues in the IDE(HTML, JSX, etc)

-------------------------------------------------------

# What is the most effective method to prevent Cross-Site Scripting (XSS) attacks in a frontend application?

1. Validating and sanitizing all user input before rendering it on the webpage.

2. Avoid rendering user inputs or scripts directly in the application — in React do not use __dangerouslySetInnerHtml and avoid setting innerHTML in general

XSS Attacks(Cross-Site Scripting) happens when the attacker:

 - Can persist JavaScript code in our system

 - Our users load and execute that code on their web browsers

-------------------------------------------------------

# To prevent XSS Attacks for accessing sensitive data from our cookies we should?

Set cookies as HttpOnly

-------------------------------------------------------

# To prevent Man In The Middle Attacks from accessing sensitive data from cookies we should write the cookies with the following property:

secure

-------------------------------------------------------

# Which HTTP header is important for preventing clickjacking attacks?

X-Frame-Options

-------------------------------------------------------

# What is the result of transpiling JSX code to JavaScript?

JSX compiles to React.createElement() calls that build the Virtual Dom

-------------------------------------------------------

# Do React components inherit from each other?

No

-------------------------------------------------------

# What's a HOC(Higher Order Component) ?

A higher-order component is a function that takes a component and returns a new component.

Whereas a component transforms props into UI, a higher-order component transforms a component into another component.

HOCs are common in third-party React libraries, such as Redux’s connect and Relay’s createFragmentContainer.

-------------------------------------------------------

# Our application requires users to authenticate for them to see our premium content. We want an easy way to show/hide certain components depending on if the user is logged in or not. What do you think is the cleanest(least coupled) way to do that?

Add our auth state to `React.Context` (`useContext()`)and subscribe our components to it.

-------------------------------------------------------

# What are Code Transpilers?

Code Transpilers are frontend tools that can make code transformations like JSX to JS and TS to JS.

They also add polyfills depending on the source code and what the target environments(users’ browsers) support.

-------------------------------------------------------

# What are Module Bundlers?

Module Bundlers combine several javascript files(modules) into a single one(the bundle) to be shipped to the browser. 

They usually rely on an internal structure built from the import statements in your code called the dependency graph. 

Module Bundlers can also ingest formats like CSS, SASS, and JPEG and apply web performance transformations like code minification, and compression to the bundle. 

-------------------------------------------------------

# What's a Dependency Graph?

An internal tree-like structure created by module bundlers based on imports and exports in your code.

-------------------------------------------------------

# What are Polyfills?

A piece of code that replaces a missing language feature in browsers that do not support it yet, for example, object deconstruction in Internet Explorer. 

-------------------------------------------------------

# What's Tree Shaking?

Only possible when using ES Static imports (vs Common JS imports).
 
Removal of dead code (unused code) by the module bundler for a smaller final bundle and better performance.

-------------------------------------------------------

# What are Source Maps?

Transforms the code that runs in the browser to the original source which makes it easier to debug. 

-------------------------------------------------------

# What's cache busting?

a technique used in web development to ensure users always see the latest version of website resources (like CSS and JavaScript files) by preventing the browser from using cached, potentially outdated versions. 

It works by appending a unique identifier, such as a version number or timestamp, to the file's URL, causing the browser to treat it as a new file and download it from the server, bypassing the cache.

Often by appending a hash to file names.

-------------------------------------------------------

# 

-------------------------------------------------------

# 
