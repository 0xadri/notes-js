
-------------------------------------------------------

# Docs

https://vite.dev/guide/

-------------------------------------------------------

# Build

`npm run build`

https://v4.vitejs.dev/guide/static-deploy.html

-------------------------------------------------------

# HTTPS on localhost

`npm install -D @vitejs/plugin-basic-ssl`

> import basicSsl from '@vitejs/plugin-basic-ssl'
> 
> export default {
>   plugins: [
>     basicSsl()
>   ]
> }

https://stackoverflow.com/questions/69417788/vite-https-on-localhost

-------------------------------------------------------

# Env Variables and Modes

Debugging
 1. Make sure your `.env` file is in the root of your project. Not in the `src` folder.
 2. Make sure your variables start with `VITE_`
