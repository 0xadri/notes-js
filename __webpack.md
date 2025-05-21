
-------------------------------------------------------

# Docs

https://webpack.js.org/guides/

-------------------------------------------------------

# Setup Webpack

1. `npm i --save-dev webpack`

Note it's only installed for dev environment.

2. Inside `package.json`, add:

>     "scripts": {
>         "build": "webpack --config webpack.config.js"
>     }

Note you might have to only add the "build" line.

2. Create `webpack.config.js` and add:

>     const path = require('path');
>     
>     module.exports = {
>       mode: 'production',
>       entry: './app.js',
>       output: {
>         path: path.join(__dirname, 'dist'),
>         publicPath: '/',
>         filename: 'final.js',
>       },
>       target: 'node',
>     };

Note you might want to change "./app.js" to your correct path.

https://webpack.js.org/guides/installation/

-------------------------------------------------------

# Build

`npm run build`

Then locally preview your build:
`npm run preview`

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
