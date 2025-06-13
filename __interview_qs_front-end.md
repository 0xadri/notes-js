
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

# The product manager complained the web application you are building is slow which frustrates users. What is the first step to fix it?

Running a Core Web Vitals analysis with tools like Lighthouse to understand where the perception of slow comes from

https://web.dev/articles/optimize-vitals-lighthouse

-------------------------------------------------------

# How can you improve a bad CLS(Cumulative Layout Shift)?

By adding a visual placeholder library i.e. skeleton, shimmer

https://shimmereffectreact.vercel.app/

https://github.com/tomzaku/react-native-shimmer-placeholder

-------------------------------------------------------

# Which web performance metric will improve the most if we add a CDN to our architecture?

FCP(First Contentful Paint) - the time it takes to render the first text, image, non-white canvas, or non-white SVG.

Adding a CDN will most likely:

Decrease the download time of the assets(because the assets are geographically distributed which reduces the network latency)
Decrease the size of the assets(compression, content negotiation)
Apply the right http caching headers

-------------------------------------------------------

# Client(Browser) Caching is managed by:

Indicating that the file should be cached by the browser and reused in the following requests(using HTTP headers), unless a new version is released

-------------------------------------------------------

# Server-Side rendering(SSR) would have the most positive impact on the following web performance metric:

FCP(First Contentful Paint) - the time it takes to render the first text, image, non-white canvas, or non-white SVG.

Rendering the application on the server will decrease the time we need to show something to the users because it speeds up the rendering(as the client receives pre-rendered html instead of JS).

Server Side Rendering prevents the White Screen of Death(WSD), which is a common issue with client side rendering.

https://web.dev/articles/rendering-on-the-web

-------------------------------------------------------

# Which method is used in production environments to implement cache busting and ensure that users always load the most recent version of a resource like CSS or JavaScript files?

Appending a unique hash based on the file's content to the filename.

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

# 

-------------------------------------------------------

# 

-------------------------------------------------------

# 
