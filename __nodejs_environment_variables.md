
# Node.js Environment Variables [Best Practices]

1. Never commit commit `.env` files
 1.a For production, use a secrets manager like `AWS Secrets Manager` or `HashiCorp Vault`
 1.b Improve developer onboarding by providing a `.env.example` file with all required variables (without real values) and documentation in your `README`.
2. Multi-layered approach using dotenv with environment-specific files such as `.env.dev` and `.env.prod`
3. Never use `process.env` directly throughout your codebase. Instead create a centralized config object that validates required variables and provides proper type conversion 

More
- always hash the passwords i.e. use `bcryt` library
- always encode the env variables i.e. encode it `base-64`

https://deadsimplechat.com/blog/environment-variables-in-nodejs/

-------------------------------------------------------

# Secret Environment Variables [Best Practices]

tl;dr: even if your frontend app is very small, you are obliged to make a Backend API, otherwise you expose all your secret environment variables such as database passwords.

Secrets like API keys for secure services (e.g., database access, private APIs, admin credentials) should only live and run on the `backend`. 

The best practice is to not access secrets like `SECRET_API_KEY` in frontend code at all.

If you include them in your `frontend` JavaScript, they’re visible to anyone in DevTools or by inspecting the bundle.

### In short
 - `backend` projects in nodejs+express: it's all good, go for it
 - `frontend` projects (i.e. in react): use a proxy or backend api to securely call third party services

-------------------------------------------------------

# Frontend Projects and Secret Environment Variables [Best Practices]

Instead of exposing your secret to the client, use a Backend API or Proxy:
- Your frontend calls your own API server (or serverless function).
- The backend uses `SECRET_API_KEY` securely to call the third-party service.
- The backend returns only the non-sensitive response to the frontend.

Bonus points
- You control rate limits
- You can filter/sanitize
- You can rotate secrets

### Example

Frontend code

>     const res = await fetch('/api/data');
>     const data = await res.json();

Backend code - Express, Next.js API route, or serverless function

>     app.get('/api/data', async (req, res) => {
>       const response = await fetch('https://api.service.com/data', {
>         headers: {
>           'Authorization': `Bearer ${process.env.SECRET_API_KEY}`,
>         },
>       });
>       const data = await response.json();
>       res.json(data); // filtered if needed
>     });

-------------------------------------------------------

# Common Beginner Mistakes

Make sure
- `.env` is in the root folder
- `.gitignore` contains `.env`, `.env.development`, `.env.production`, `nodemon.json`
- `readme` documents the required environment variables in `.env`, `nodemon.json` and/or other files
- when deploying on a Cloud Platforms-as-a-Service, you figure out if environment variables were included in the final javascript bundle, if not you must be set them up (prob manually) on the platform

-------------------------------------------------------

# JS Bundlers and Environment Variables

tl;dr: included in final bundle? it depends

### Webpack

For webpack, you must use an additional plugin such as `dotenv-webpack` or `DefinePlugin`.

You manually define which environment variables to expose - which are then included in the final bundle.

Note: it's not super clear how this works, need to investigate

### Vite

Vite has built-in `.env` support. It automatically loads `.env`, `.env.development`, etc.

Variables prefixed with `VITE_` are exposed to the client - and then included in the final bundle.

-------------------------------------------------------

# Environment Variables Setup On `Webpack`

c.f. dedicated notes file on `webpack`

-------------------------------------------------------

# Environment Variables Setup On `Vite`

c.f. dedicated notes file on `vite`

