
-------------------------------------------------------

# Docs

https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

-------------------------------------------------------

# RESTful API Consumption: Principles [Best Practices]

1. handle `fetch()` errors in `try/catch block`, NOT react error boundaries
2. use three states: `data`, `loading` and `error`
3. use a `API Utility Layer`, a separate utility file with all the API calls
4. handle errors in the `Component Layer` (via try/catch block) 
 
Read more
 - Handling Fetch Errors: use try/catch block, NOT react error boundaries https://stackoverflow.com/questions/74269197/is-it-a-good-or-bad-practice-to-use-react-error-boundaries-to-handle-fetch-error
 - https://lokeshchoudharyprogrammer.medium.com/best-practices-for-fetching-data-in-react-63ba88d76b2a

-------------------------------------------------------

# HTTP Messages

Mechanism used to exchange data between a server and a client in the HTTP protocol.

Two parts
 1. Request
 2. Response

https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Messages

-------------------------------------------------------

# HTTP Request Has 4 Parts

 1. Method
 2. Location (url)
 3. Headers
 4. Content (body)

-------------------------------------------------------

# Request Methods

 - `GET`: get resource from server
 - `POST`: sends a resource to server, to then receive one (i.e. create or append resource; form submissions like login, search)
 - `HEAD`: checks the state of a resource (i.e. whether a web page has updated its content)
 - `PUT`: put resource to server (i.e. create or override resource)
 - `DELETE`: delete resource on server
 - `PATCH`: update parts of an existing resource on the server
 - `OPTIONS`: to check whether follow-up request (i.e. DELETE) is allowed

But ultimately you can run any code you want. These are used to break down the route for a single path into many routes.

https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods

-------------------------------------------------------

# RESTful API: Idempotent Methods

`GET`, `PUT`, `DELETE`, `HEAD`, `OPTIONS`, and `TRACE` methods are supposed to be idempotent.

Meaning that no matter how many times the request is made, the server's state remains the same after the first request.

-------------------------------------------------------

# RESTfull URL Representation

TODO

-------------------------------------------------------

# Preflight Request

It is an HTTP request of the OPTIONS method, sent before the request itself, in order to determine if it is safe to send it.
 
It is only after the server has sent a positive response that the actual HTTP request is sent.

-------------------------------------------------------

# Request Headers

Has meta information about the request.

Extremely important metadata i.e. who's requesting the data? What type of data is expecting?

### User-Agent 

An identity header that tells the server who's requesting the document.

Your web browser identifies itself with a `User-Agent` string w format "Browser Name, Operating System, Some version numbers".

`User-agent` helps the server to determine whether to serve or deny the client.

### Cookie

Store persistent data. 

A vital feature for websites to keep track of user state: user logins, configuration preferences etc.

## Accept 

Accet headers (also Accept-Encoding, Accept-Language etc.) contain information about what sort of content we're expecting.

Chrome browser uses this: `text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8`

https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers

-------------------------------------------------------

# HTTP Response Has 3 Parts

 1. Status Code
 2. Headers
 3. Content (body? document? source?) - optional?

-------------------------------------------------------

# Response Status Codes

### Categories

- `2xx`: Successful responses !!

- `4xx`: Client ERROR responses 
- `5xx`: Server ERROR responses

- `1xx`: Informational responses
- `3xx`: Redirection messages

### The Classics

- `200`: OK
- `201`: OK and resource created i.e. new entry in database

- `400`: Bad Request
- `401`: Unauthorized (Unauthenticated)
- `403`: Forbidden (authenticated but not allowed to access)
- `404`: Not Found

- `500`: Internal Server Error
- `502`: Bad Gateway

Warning: this is just a convention, yes you can return wrong code that does not match the actual status of your response.

https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status

-------------------------------------------------------

# `Content-Type` Header

`Content-Type` header is used to indicate the original media type of a resource before any content encoding is applied.

### `Content-Type` in URL-encoded form submission

>     Content-Type: application/x-www-form-urlencoded

### `Content-Type` in a REST API using JSON

>     Content-Type: application/json

Example of a 201 Created response showing the result of a successful request

>     HTTP/1.1 201 Created
>     Content-Type: application/json
>     
>     {
>       "message": "New user created",
>       "user": {
>         "id": 123,
>         "firstName": "Paul",
>         "lastName": "Klee",
>         "email": "p.klee@example.com"
>       }
>     }

https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Type

-------------------------------------------------------

# RESTful API: Fetching Data: Very Simple Example [Best Practice]

`fetch()` in `try/catch block`

Three states
 - `data`: updated with response data if `fetch()` is successful
 - `loading`: updated when start/end whether `fetch()` is successful or unsuccessful
 - `error`: updated if `fetch()` is unsuccessful

>     import { useState, useEffect } from 'react';
>     import Places from './Places.jsx';
>     import Error from './Error.jsx';
>     
>     export default function AvailablePlaces({ onSelectPlace }) {
>       const [availablePlaces, setAvailablePlaces] = useState([]);
>       const [isFetching, setIsFetching] = useState(false);  // loading state
>       const [error, setError] = useState();  // error state
>     
>       useEffect(() => {
>         async function fetchPlaces() {
>           setIsFetching(true);
>     
>           try {
>             const response = await fetch('http://localhost:3000/places');
>             const resData = await response.json();
>     
>             if (!response.ok) {
>               throw new Error('Failed to fetch places');
>             }
>     
>             setAvailablePlaces(resData.places);
>           } catch (error) {
>             setError({
>               message:
>                 error.message || 'Could not fetch places, please try again later.',
>             });
>           }
>     
>           setIsFetching(false);
>         }
>     
>         fetchPlaces();
>       }, []);
>     
>       if (error) {
>         return <Error title="An error occurred!" message={error.message} />;
>       }
>     
>       return (
>         <Places
>           title="Available Places"
>           places={availablePlaces}
>           isLoading={isFetching}
>           loadingText="Fetching place data..."
>           fallbackText="No places available."
>           onSelectPlace={onSelectPlace}
>         />
>       );
>     }

source: https://github.com/academind/react-complete-guide-course-resources/blob/main/code/15%20HTTP%20Requests/03-handling-errors/src/components/AvailablePlaces.jsx

-------------------------------------------------------

# RESTful API: Fetching Data: With Helper File [Best Practice]

## Problem Statement

I want `fetch()` calls in a separate utility file with all the various functions taking care of the API calls.

aka the `API Utility Layer`.

Should handling errors (the `try/catch block`) be in the `API Utility Layer` or in the `Component Layer` (react component)?

Should the functions return "the three states": `data state`, `loading state`, `error state`? or just the `response`?

## Solution Explained

If you swallow the error in the `API Utility Layer`, the `Component Layer` loses control.

Hence, handling errors in the `Component Layer` (via try/catch block) is generally considered best practice.

Your `API Utility Layer` is responsible for:
 - Making the request
 - Returning the parsed data
 - Throwing errors when something goes wrong

Your `Component Layer` (react component) is responsible for:
 - Deciding how to respond to errors (show an alert, redirect, retry, show fallback UI)
 - Updating "the three states": data state, loading state, error state.

## Solution Code

`src/api/apiService.js`

>     const BASE_URL = 'https://your-api-domain.com/api';
>     
>     // Generic fetch wrapper with Authorization header
>     async function apiFetch(endpoint, options = {}, retry = true) {
>       const token = "XYZ"; // needs hardcoding
>     
>       const headers = {
>         'Content-Type': 'application/json',
>         ...(token && { Authorization: `Bearer ${token}` }),
>         ...options.headers,
>       };
>     
>       const response = await fetch(`${BASE_URL}${endpoint}`, {
>         ...options,
>         headers,
>       });
>     
>       if (response.status === 401) {
>         throw new Error('Unauthorized');
>       }
>     
>       if (!response.ok) {
>         const error = await response.json();
>         throw new Error(error.message || 'API error');
>       }
>     
>       return await response.json();
>     }
>     
>     // Exported API utility functions
>     export function getUsers() {
>       return apiFetch('/users');
>     }
>     
>     export function getUser(id) {
>       return apiFetch(`/users/${id}`);
>     }
>     
>     export function createUser(data) {
>       return apiFetch('/users', {
>         method: 'POST',
>         body: JSON.stringify(data),
>       });
>     }
>     
>     export function updateUser(id, data) {
>       return apiFetch(`/users/${id}`, {
>         method: 'PUT',
>         body: JSON.stringify(data),
>       });
>     }
>     
>     export function deleteUser(id) {
>       return apiFetch(`/users/${id}`, {
>         method: 'DELETE',
>       });
>     }

`UserList.jsx`

>     import React, { useEffect, useState } from 'react';
>     import { getUsers } from '../api/apiService';
>     
>     function UserList() {
>       const [users, setUsers] = useState([]);
>       const [error, setError] = useState(null);
>       const [loading, setLoading] = useState(true);
>     
>       useEffect(() => {
>         const loadUsers = async () => {
>           try {
>             const data = await getUsers();
>             setUsers(data);
>           } catch (err) {
>             setError(err.message);
>           } finally {
>             setLoading(false);
>           }
>         };
>     
>         loadUsers();
>       }, []);
>     
>       if (loading) return <p>Loading users...</p>;
>       if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;
>     
>       return (
>         <div>
>           <h2>User List</h2>
>           <ul>
>             {users.map(user => (
>               <li key={user.id}>{user.name}</li>
>             ))}
>           </ul>
>         </div>
>       );
>     }
>     
>     export default UserList;

-------------------------------------------------------

# API: Fetching Data: With Custom Hook [Best Practice]

## Problem Statement

Use a custom hooks. It allows to reuse logic with React Hooks.

-------------------------------------------------------

# Database:

https://loadforge.com/guides/speed-up-your-react-app-best-practices-for-database-caching

-------------------------------------------------------

# API: Send JSON Data with POST

        let url = 'http://localhost:8080/feed/post';
        let method = 'POST';
        
        fetch(url, {
          method: method,
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            title: 'Epic Title',
            content: 'Useful content you will never forget.'
          })
        })

-------------------------------------------------------

# `express-validator` 

`express-validator` is a set of `express.js` middlewares that wraps the extensive collection of validators and sanitizers offered by `validator.js`.

Validate and sanitize your express requests.

https://express-validator.github.io/docs/

-------------------------------------------------------

# `express-validator` example

Validation rules in router

>     // POST /feed/post
>     router.post('/post', 
>       [
>         body('title')
>           .trim() // trim its value
>           .isLength({ min: 7 }) // validate it's minimum 7 characters
>           .withMessage('title too short'), // add error msg
>         body('content').trim().isLength({ min: 7 })
>       ],
>       feedController.createPost
>     );

Check passed validation in controller

>     exports.createPost = (req, res, next) => {
>       const errors = validationResult(req);
>       if (!errors.isEmpty()){
>         return res.status(422).json({ message: 'Validation failed sry.', errors: errors.array() })
>       }
>       
>       res.status(201).json({
>         // ...code
>       });
>     };


