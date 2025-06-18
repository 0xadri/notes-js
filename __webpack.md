
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

# How to setup Webpack + ESLint?

1. A. Initialize ESLint configuration using `npx eslint --init` 

Answer all the questions prompted according to your project setup. 

In the final prompt, it will ask you whether you want to install the required packages.

This will also create ESLint the config file.

1. B. Install packages Manually

That's if you're confident and know which packages to install. For instance:

>     npm install --save-dev eslint @eslint/js typescript typescript-eslint eslint-webpack-plugin

Then create ESLint Config file in root directory: `eslint.config.js` (note the change from `.eslintrc` since ESLint v9.0.0).

Note the recent change to "ESLint flat config".

2. Add to webpack.config.js file:

>     const ESLintPlugin = require('eslint-webpack-plugin');
>     
>     module.exports = {
>       ...
>       plugins: [new ESLintPlugin()],
>       ...
>     };

3. In the ESLint Config File, add a test rule:

>     export default [
>     	{
>         "rules": {
>           "max-len": [1, 70, 2, {"ignoreComments": true}]
>         }
>       },
>     ];

4. Tips

See fully resolved config ESLint uses: 

`npx eslint --print-config path/to/index.js`

You might need to output it to a file:

`npx eslint --print-config path/to/index.ts > full-eslint-config.json`

### Docs

ESLint in VSCode, HowTo https://www.robinwieruch.de/vscode-eslint/

ESLint in Webpack, HowTo https://www.robinwieruch.de/webpack-eslint/

https://webpack.js.org/plugins/eslint-webpack-plugin/

https://eslint.org/docs/

https://eslint.org/docs/latest/use/configure/migration-guide

https://eslint.org/docs/latest/use/configure/configuration-files

https://typescript-eslint.io/getting-started/

-------------------------------------------------------

# How to setup Prettier + ESLint?

1. Setup Prettier

1.a. install: `npm install --save-dev --save-exact prettier`

1.b. create an empty config file: `node --eval "fs.writeFileSync('.prettierrc','{}\n')"`

1.c. create a .prettierignore file to let the Prettier CLI and editors know which files to not format: `node --eval "fs.writeFileSync('.prettierignore','# Ignore artifacts:\nbuild\ncoverage\n')"`

2. Config ESLint Accordingly

2.a. install: `npm i -D eslint-config-prettier`

2.b. install: `npm i -D eslint-plugin-prettier`

### Docs

https://prettier.io/docs/install

https://github.com/prettier/eslint-config-prettier

https://github.com/prettier/eslint-config-prettier

-------------------------------------------------------

# Setup Git Hooks to run the linter on push or commit?

1. install `husky` and create a sample pre-commit hook: `npm install husky --save-dev && npm exec husky init`

2. Edit the `husky` pre-commit hook in `.husky/pre-commit` by adding: `npm run lint && npm test`

3. Setup `lint-staged` so we only lint and format the code that has changed in the commit

https://github.com/typicode/husky

https://github.com/lint-staged/lint-staged

-------------------------------------------------------

# Setup A11 JSX Linter Plugin

1. install:

2. config ESLint:

import jsxA11y from "eslint-plugin-jsx-a11y";

  ...
  jsxA11y.flatConfigs.recommended,
  ...

3. add image element with missing alt: `<img src=""></img>`

4. run linter: `npm run lint`

It should show an error

-------------------------------------------------------

# 

-------------------------------------------------------

# 

-------------------------------------------------------

# 

-------------------------------------------------------

# 

-------------------------------------------------------

# 



