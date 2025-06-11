
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


