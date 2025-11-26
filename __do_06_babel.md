
-------------------------------------------------------

# AI and DevOps: Heads Up

AI can be pretty bad at everything devops related. 

That includes doing project configuration with Vite, Webpack, Linter, Prettier and the likes.

-------------------------------------------------------

# Common Node Packages To Install

npm install --save-dev babel-loader

npm install --save-dev @babel/preset-env @babel/preset-react

npm install core-js

-------------------------------------------------------

# What is Babel?

Babel is a JavaScript transpiler.

Allows you to use next generation JavaScript, today.

Convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.

Note: Webpack does also polyfill our code by default, but babel has much broader support and more complete polyfills.

-------------------------------------------------------

# Babel, JSX and React

Babel can convert JSX syntax.

`@babel/preset-react` is a Babel preset that allows you to transpile React JSX syntax and some React-specific features into standard JavaScript.

>     const element = <h1>Hello, world!</h1>;

becomes:

>     // Classic runtime:
>     React.createElement("h1", null, "Hello, world!");

>     // OR with automatic runtime:
>     import { jsx as _jsx } from "react/jsx-runtime";
>     const element = _jsx("h1", { children: "Hello, world!" });

-------------------------------------------------------

# Babel Preset Env

`npm install --save-dev @babel/preset-env`

This preset automatically determines which transformations and polyfills are needed based on your target environment (e.g., specific browsers or Node.js versions).

-------------------------------------------------------

# Babel yearly presets

Babel yearly presets refer to the now-deprecated convention Babel used to group JavaScript language features by the year they were standardized (e.g., ECMAScript 2015, 2016, etc.). 

These presets made it easier for developers to transpile modern JavaScript down to a version compatible with older browsers or environments.

Examples of Yearly Presets:
 - babel-preset-es2015 (for ECMAScript 2015 / ES6)
 - babel-preset-es2016
 - babel-preset-es2017

DEPRECATED - as of Babel 7, the yearly presets were deprecated in favor of a more flexible and modern preset: `@babel/preset-env`

-------------------------------------------------------

# Babel config file

Both `babel.config.json` and `.babelrc` are used to configure Babel, but they serve slightly different purposes, especially when working with monorepos or multiple packages.

### `.babelrc`

Purpose:
 - Project-local configuration for Babel.
 - Applies only to the directory it's in and its subdirectories.

Best for:
 - Single-package projects
 - Simple setups

Format can be: `.babelrc`, `.babelrc.json`, or `.babelrc.js`.

### `babel.config.json`

Purpose:
 - Root-level configuration that applies to the entire project, including monorepos or projects with nested packages.

Best for:
 - Monorepos
 - Large apps with multiple packages or modules
 - Centralized configuration

Format must be: `babel.config.json` or `babel.config.js`.


