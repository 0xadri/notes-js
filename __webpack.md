
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

Note you might want to change `./app.js` to your correct path.

https://webpack.js.org/guides/installation/

-------------------------------------------------------

# Build

1. `npm run build`

2. `node ./dist/final.js`

This is to locally preview your buid.

Note you may want to change `./final.js` to your correct path.

-------------------------------------------------------

# Environment Variables Setup On `Webpack`

1. `npm i dotenv-webpack --save-dev`

Note it's only installed for dev environment.

2. Update Your `webpack.config.js`

>     const Dotenv = require('dotenv-webpack');
>     
>     module.exports = {
>       plugins: [
>         new Dotenv({
>           path: './.env',          // default
>           safe: false,             // true = use .env.example to validate
>           systemvars: false,       // true = also load system environment variables
>           allowEmptyValues: false  // true = allow empty env vars
>         })
>       ]
>     };

3. Create Your `.env` File

4. Access Vars In Your Code

>     console.log(process.env.PUBLIC_API_URL);

-------------------------------------------------------

# Development vs Production

https://webpack.js.org/guides/development/

https://webpack.js.org/guides/production/

-------------------------------------------------------

# Cache Busting

This includes a hash in the filename which changes every build.

Prevents browser from caching outdated files.

-------------------------------------------------------

# Cache Busting HowTo

1. Add to `webpack.config.js`:

>     const HtmlWebpackPlugin = require('html-webpack-plugin');

And then 

>     plugins: [new HtmlWebpackPlugin({
>       template: "./src/template.html",
>       hash: true
>     })],

2. modify in `webpack.config.js`:

>     filename: "[contenthash].bundle.js",

https://webpack.js.org/plugins/html-webpack-plugin/

-------------------------------------------------------

# Setup Webpack With React

https://webkul.com/blog/webpack-with-react/

-------------------------------------------------------

# How to setup TypeScript + Babel + Webpack?

https://stackoverflow.com/questions/38320220/how-to-setup-typescript-babel-webpack

-------------------------------------------------------

# 

-------------------------------------------------------

# 

-------------------------------------------------------

# 

-------------------------------------------------------

# 



