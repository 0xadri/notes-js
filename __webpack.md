
-------------------------------------------------------

# Docs

https://webpack.js.org/guides/

-------------------------------------------------------

# Pending

File always read/executed from bottom to top and right to left?

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

# Webpack Basic Setup Explained

>     const path = require('path')
>     const HtmlWebpackPlugin = require('html-webpack-plugin');
>     
>     module.exports = {
>         entry: {   // 1
>             main: path.join(__dirname, "src/index.js"),
>         },
>         output: {   // 2
>             path: path.join(__dirname, '..', 'dist')
>         },
>         plugins: [
>             new HtmlWebpackPlugin({   // 3
>                 title: 'Webpack Configuration Split',
>             }),
>         ],
>     };

1. Entry Point - tells webpack where to start building the dependency graph, this is used to create the bundle 

2. Output - tells webpack where to create the outcome of the process - but not the naming of chunks since it depends on the environment

3. HtmlWebpackPlugin - tells webpack to generate the HTML index file

-------------------------------------------------------

# Further Webpack Setup Explanations

1. Add Cache Busting - a unique hash to created bundle - any change in files means new hash value
2. Generate the HTML index file
3. Add Sentry to the project

>       output: {
>         path: path.resolve(__dirname, "build"),
>         filename: "[contenthash].bundle.js",   //[1]
>         publicPath: "/",
>       },
>       plugins: [
>         new HtmlWebpackPlugin({   //[2]
>           template: path.join(__dirname, "public", "index.html"),
>         }),
>         new Dotenv(),
>         sentryWebpackPlugin({   //[3]
>           org: "supa-org",  // change this to match yours
>           project: "awesome-react",  // change this to match yours           
>           authToken: "aiemn47==+iHDXvjMb8", // Get auth tokens here https://sentry.io/orgredirect/organizations/:orgslug/settings/auth-tokens/
>         }),
>       ],

https://webpack.js.org/configuration/output/

https://webpack.js.org/plugins/html-webpack-plugin/

https://webpack.js.org/configuration/plugins/

-------------------------------------------------------

# Essential plugins: `file-loader` plugin

`file-loader` allows to import file-based assets into our webpack managed JS and CSS files.

Some examples of files we may want to import include images (.jpg and .png) and font files (.woff2 and .eot).

We just need to make sure we tell webpack to run file-loader whenever it comes across one of these files.

Install with `npm install file-loader --save-dev`

Add loader to webpack config:

>       module: {
>         entry: './src/app.js',
>         output: {
>           path: __dirname + '/dist',
>           filename: 'build.js'
>         },
>         loaders: [
>           ...
>           {
>             test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
>             use: [
>               {
>                 loader: 'file-loader',
>                 options: {
>                   name: '[name].[ext]',
>                   outputPath: 'fonts/'
>                 }
>               }
>             ]
>           }
>           ...
>         ]
>       },

This will tell webpack to search for any fonts being pulled in through one of our webpack entry points, in this case, our entry point is a file in a `src` directory called `app.js`.

If webpack finds any font files being referenced inside of any CSS files being pulled into `app.js`, it'll duplicate the font files, and place them into whatever directory we specify using `outputPath`. 

This is required for our fonts to be referenced correctly within our compiled down version of our CSS located in `/dist`. 

In this instance, `webpack` and `file-loader` will duplicate all fonts to a folder called `fonts/` within our `dist/` directory since the output path of the fileLoader is relative to the path specified in the `output.path` property of the overall webpack config.

https://www.chriscourses.com/blog/loading-fonts-with-webpack

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

`module` is where we pass the rules for bundling files

 - `test` - file extension that needs to be targeted by the specific loader

 - `exclude` - files to be ignored by the bundler.

Deets:
 
1. `babel-loader` is added and setup fir react
2. `ts-loader` is added
3. `css-loader` and `style-loader` are added - must be written in that exact order
4. `file-loader` is added

>       module: {
>         rules: [
>           {
>             test: /\.m?js|jsx$/,
>             exclude: /(node_modules|bower_components)/,
>             use: {
>               loader: "babel-loader",  //[1]
>               options: {
>                 presets: [
>                   "@babel/preset-react",
>                   ["@babel/preset-env", { targets: { ie: "11" } }],
>                 ],
>               },
>             },
>           },
>           {
>             test: /\.ts|tsx?$/,
>             use: "ts-loader",   //[2]
>             exclude: /node_modules/,
>           },
>           {
>             test: /\.(sa|sc|c)ss$/,
>             use: ["style-loader", "css-loader"],  //[3]
>           },
>           {
>             test: /\.(png|jpe?g|gif)$/i,
>             use: [
>               {
>                 loader: "file-loader",  //[4]
>               },
>             ],
>           },
>         ],
>       },
  
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

# Split Webpack configuration to be environment-specific

1. Specify environment variables in `package.json`

>     "scripts": {
>       "build": "webpack --config webpack.prod.js"
>       "dev": "webpack serve --open --config webpack.dev.js"
>       "start": "webpack-dev-server --config webpack.dev.js",
>     },
  
2. Create 3 config files

`webpack.common.js` - common chunk, instructions necessary both in development and production

`webpack.dev.js` - development chunk

`webpack.prod.js` - production chunk

3. Copy/Paste everything from `webpack.config.js` into `webpack.common.js`

4. Install `webpack-merge` package: `npm i -D webpack-merge`

5. Setup `webpack.prod.js`

Add this:

>    const { merge } = require('webpack-merge');
>    const common = require("./webpack.common.js");
>    
>    module.exports = merge(common, {
>    ...
>    });

Cut/paste anything in `webpack.common.js` that is production only into `webpack.prod.js`

Typically you will have:

>       mode: "production",
>       output: {
>         filename: "[contenthash].bundle.js",
>       },

Note that `production` mode in our webpack configuration enables `Tree Shaking` for our bundle. 

This greatly decreases the bundle size, i.e. by 80%, by removing all the code that is not used from our codebase and the dependencies (node_modules).

5. Setup `webpack.dev.js`

Add this:

>    const { merge } = require('webpack-merge');
>    const common = require("./webpack.common.js");
>    
>    module.exports = merge(common, {
>    ...
>    });

Cut/paste anything in `webpack.common.js` that is development only into `webpack.dev.js`

>       mode: "development",
>       devtool: "inline-source-map",
>       output: {
>         filename: "bundle.js",
>       },

6. Fix ESLint `.eslintignore`

Add: `webpack.*.js`

https://dev.to/didof/how-to-split-dev-prod-webpack-configuration-n53

-------------------------------------------------------

# Source maps in webpack 

Files that enable debugging of your code even after it's been bundled, minified, and optimized for production.

They provide a mapping between the transformed (e.g., minified) code and the original source code, allowing you to step through your original code in a browser's developer tools during debugging, despite the code being highly optimized for performance. 


>    devtool: 'inline-source-map'

or

>    devtool: 'source-map'

-------------------------------------------------------

# Image optimization using webpack

Various plugins available such as:
 - `image-webpack-loader` - most popular
 - `compression-webpack-plugin`
 - `image-minimizer-webpack-plugin` - plugin version of `imagemin`
 - `responsive-loader` - generates multiple responsive images and outputs them as `srcset`
 - `webpack-image-srcset-loader` - similar to `responsive-loader`
 - `svg-sprite-loader` - optimizes and bundles SVG files as `sprites`

https://cloudinary.com/blog/guest_post/optimize-images-using-webpack-in-react

https://www.npmjs.com/package/compression-webpack-plugin

https://webpack.js.org/plugins/image-minimizer-webpack-plugin/

-------------------------------------------------------

# Font optimization using webpack

Loading fonts in Webpack involves setting up rules that handle different font formats, such as WOFF and TTF. 

In Webpack 5, the `asset/resource` module streamlines this process, automatically placing fonts in the appropriate output directory.

Improving fonts includes:

1. Subsetting - an important technique where only the necessary characters from a font are included, reducing file size.

2. Preloading fonts - helps them load faster, improving performance.

Typical checklist:

 - fonts should be hosted on the server - not loaded from 3rd party servers
 
 - fonts styling loaded via CSS

 - webpack config has a `file-loader` setup
 
>    module.exports = {
>    entry: path.join(__dirname, "src/index.tsx"),
>      ...
>      module: {
>        rules: [
>          ...
>          {
>            test: /\.(woff2)$/i,
>            use: {
>              loader: "file-loader",
>              options: {
>                outputPath: "fonts/",
>                name: "[contenthash]_[name].[ext]",
>              },
>            },
>          },
>          ...
>        ],
>      },
>    };

`file-loader` allows our webpack managed JS and CSS files to import file-based assets i.e. images and fonts

This will tell webpack:

 - in this case, our entry point is `index.tsx` file in `src` directory.

 - search for any `.woff2` file being pulled in through one of our webpack entry points, even if indirectly i.e. referenced inside of a CSS file referenced inside our webpack entry points

 - if found, duplicate the font files, and place them into the directory specified using `outputPath`. 

This is required for our fonts to be referenced correctly within our compiled down version of our CSS located in `/dist`. 

In this instance, `webpack` and `file-loader` will duplicate all fonts to a folder called `fonts/` within our `dist/` directory since the output path of the fileLoader is relative to the path specified in the `output.path` property of the overall webpack config.

-------------------------------------------------------

# CSS optimization using webpack

Best Practice:

1. Extract our CSS as a separate file that can be cached differently

2. Minify our CSS so the file we ship to the browser is smaller

3. Extract the Critical CSS and priotise it

Most popular plugins:

 - `css-minimizer-webpack-plugin` - optimize and minify your CSS

 - `mini-css-extract-plugin` - extracts CSS into separate files, 1 CSS file per JS file
 
 - `html-critical-webpack-plugin` - extracts critical CSS

Implementation:

1. Install plugins

npm i --save-dev mini-css-extract-plugin

npm i --save-dev css-minimizer-webpack-plugin 

npm i --save-dev html-critical-webpack-plugin

2. Extract and Minify CSS

Add `mini-css-extract-plugin` and `css-minimizer-webpack-plugin` to webpack config:

>    const MiniCssExtractPlugin = require("mini-css-extract-plugin");
>    const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
>    
>    module.exports = {
>      ...
>      module: {
>        rules: [
>          {
>            test: /\.s?css$/,
>            use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
>          },
>        ],
>      },
>      optimization: {
>        minimizer: [
>          // For webpack v5, you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line // `...`,
>          new CssMinimizerPlugin(),
>        ],
>      },
>      plugins: [new MiniCssExtractPlugin({filename: "[contenthash].css"})],
>    };

3. Extract Critical CSS

We automatically extract the above-the-fold CSS and ship it in a different file that will be priotised. 

This will reduce the CLS while also improving the FCP, especially in big applications.

Add `html-critical-webpack-plugin` to webpack config:

>    const HtmlCriticalWebpackPlugin = require("html-critical-webpack-plugin");
>    const path = require("path");
>    
>    module.exports = merge(common, {
>      ...
>      plugins: [
>        ...
>       new HtmlCriticalWebpackPlugin({
>            base: path.resolve(__dirname, 'build'),
>            src: 'index.html',
>            dest: 'index.html',
>            inline: true,
>            minify: true,
>            extract: true,
>            width: 375,
>            height: 565,
>            penthouse: {
>              blockJSRequests: false,
>            }
>        })
>      ],
>      ...
>    });

This is what `html-critical-webpack-plugin` does:

 - Reads the file from disk as defined by the `src` option

 - Extracts the CSS from that file that is deemed as "critical" - it uses `Pupetter` to render the app in the background

 - Writes the new file back to disk with that critical CSS inlined, at the location of the `dest` option

Docs:

https://webpack.js.org/loaders/style-loader/#examples

https://webpack.js.org/plugins/css-minimizer-webpack-plugin/

https://webpack.js.org/plugins/mini-css-extract-plugin/

https://www.npmjs.com/package/html-critical-webpack-plugin

https://github.com/anthonygore/html-critical-webpack-plugin

-------------------------------------------------------

# JS Optimization: JavaScript Bundle Analysis with Webpack

1. Install plugin

`npm install --save-dev webpack-bundle-analyzer`

-------------------------------------------------------

# JS Optimization: Remove Unused Dependencies From Production

You can either:

 - go thru each package under `"dependencies": { ... }` and check if it's used
 
 - use `depcheck` package to do that for you - tho depcheck says "no longer actively maintained"

Note: `tree-shaking` already removes most unused dependencies. Tho it's good practice to keep things as clean as possible.

https://www.npmjs.com/package/depcheck

-------------------------------------------------------

# JS Optimization: Replace Heavy Dependencies From Prod By Custom Implementation

Submit your package.json to https://bundlephobia.com/

It will go through your production dependencies, packages under `"dependencies": { ... }`) and allow you to order by size.

Go thru the largest packages and check if their usage.

If one is barely used, i.e. for a single method, then replace it by your own implementation.

Create the relevant file under `utils`, add the implementation (AI is your friend).

Then replace the imports and remove the dependency from package.json

Check your changes by re-running the build and analysis.

`npm run build`

`npm run analyze`

-------------------------------------------------------

# JS Optimization: Code Splitting By Route With Webpack

Code Splitting By Route = Route-based code splitting = Bundle Splitting 

TLDR: only load the code needed for the current view.

Code splitting allows to produce numerous bundles, each bundle can be dynamically loaded during runtime - you lazy-load code on-demand.

Benefits: 

 - Shorter initial load time

 - Easier scalability for large apps

Gotchas:

 - Must wrap lazy-loaded components in Suspense with a fallback UI.

 - If a chunk fails to load, e.g. due to a network issue, you may need to handle that gracefully.

 - Some libraries, e.g. analytics, error boundaries, need careful placement to cover async-loaded routes.

Implementation:

1. Install Package

`npm install @loadable/component`

`npm i --save-dev @types/loadable__component`

2. Add Lazy Loading To Route

>    ...
>    import loadable from "@loadable/component";
>    
>    const Loading = () => (<h1>Loading</h1>);
>    
>    const LoadableMoviePage = loadable(() => import("./views/MoviePage"), {
>      fallback: <Loading />
>    });
>    ...
>       <Route path="/movie/:id" element={<LoadableMoviePage />}></Route>
>    ...

Bonus:

Code Splitting by Route

"entry point" tells Webpack where to start building the dependency graph of your application. 

By specifying multiple entry points, you can create multiple bundles, each of which can be loaded independently.

Docs:

https://www.dhiwise.com/post/optimizing-your-react-applications-with-webpack-code-splitting

https://rahuljain-dev.medium.com/unveiling-the-power-of-code-splitting-with-webpack-for-react-and-redux-applications-cc5a7cadf7d0

-------------------------------------------------------

# JS Optimization: Lazy Loading & Dynamic Import

Warning: not Webpack specific

Lazy Loading = Module Lazy Loading = Just In Time Loading

Lazy loading modules that are not needed for the initial load.

Module will be loaded asynchronously.

Implementation:

>   -import _ from "lodash"
>   
>   export default function MovieCard({ movie }: MovieCardProps) {
>     ...
>     const theme = useSelector((state: RootState) => state.themeReducer.theme);
>   + const [shortPlot, setShortPlot] = useState(movie.overview);
>   
>     function plotShorten(text: string, length = 250) {
>        // const shortText = _.take(text.split(""), length).join("");
>        // return shortText + "...";
>   +    return import("lodash").then((_) => {    // dynamic import
>   +      const shortText = _.default.take(text.split(""), length).join("");
>   +      setShortPlot(shortText + "...");
>       });
>     }
>   
>   + useEffect(() => {
>   +   plotShorten(movie.overview);
>   + }, [movie]);
>   
>     return (
>       ...
>           <MoviePlot color={context.theme.foreground}>
>   +         Plot: {shortPlot}
>           </MoviePlot>
>     )
  
Because the module will be loaded asynchronously we can only use it in places that accept a Promise. 

To use it in JSX we need to add a new state that will get updated when the module is.

https://webpack.js.org/guides/code-splitting/#dynamic-imports

-------------------------------------------------------

#  JS Optimization: Compress and Minify JS with Webpack

Various plugins:

 - `compression-webpack-plugin` - Compress
 
 - `terser-webpack-plugin` - Minify and Uglify - shipped with Webpack 5
 
 - `UglifyJS` - Minify and Uglify - the former standard

Implementation:

1. Compress static assets using `compression-webpack-plugin`

Install plugin

`npm i --save-dev compression-webpack-plugin`

Add Plugin to Webpack Config file

>   const CompressionPlugin = require("compression-webpack-plugin");
>   
>   module.exports = {
>     plugins: [
>       new CompressionPlugin({
>         filename: "[path][base].gz",
>         algorithm: "gzip",
>         test: /\.js$|\.css$|\.html$/,
>         threshold: 10240,
>         minRatio: 0.8,
>       }),
>       ...
>     ]
>   };

2. Set up `Brotli` as a better compression algorithm

Add one more compression plugin to Webpack Config file

>   module.exports = {
>      plugins: [
>       ...
>       new CompressionPlugin({
>         filename: "[path][base].br",
>         algorithm: "brotliCompress",
>         test: /\.(js|css|html|svg)$/,
>         compressionOptions: { level: 11 },
>         threshold: 10240,
>         minRatio: 0.8,
>       })
>       ...
>      ]
>   };

When running the build, you will get 2 compressed versions of the bundles: one in ".gzip" and the other in ".br".

Depending on the browser requests, the server will send the smallest one in a process called `Content Negotiation`.

3. Explicitly Minify and Uglify with `terser-webpack-plugin`

Webpack 5 ships with the latest `terser-webpack-plugin`. 

You must install `terser-webpack-plugin` only if you wish to customize the options.

`npm i --save-dev terser-webpack-plugin`


Docs:

https://webpack.js.org/plugins/compression-webpack-plugin/

https://www.npmjs.com/package/terser-webpack-plugin

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

-------------------------------------------------------

# 

-------------------------------------------------------

# 








