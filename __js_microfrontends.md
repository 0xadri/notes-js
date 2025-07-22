
-------------------------------------------------------

# Docs

https://turborepo.com/

https://turborepo.com/docs


https://module-federation.io/

https://webpack.js.org/concepts/module-federation/


https://storybook.js.org/

https://storybook.js.org/docs

-------------------------------------------------------

# Micro-frontend architecture

Architectural approach where a frontend application is broken into smaller, independent pieces, each owned and developed by different teams, and then composed together to form a complete app.

Key Characteristics:

 - Each micro-frontend is a self-contained app (e.g., header, search bar, dashboard).

 - Built using the same or different frameworks (React, Vue, etc.).

 - Integrated into a host app (shell) at runtime or build time.

-------------------------------------------------------

# Why micro-frontend architecture?

Development Speed: work in parallel, and deploy independently.

Independent deployments

Better team autonomy

Easier code ownership

Scales well for large apps

-------------------------------------------------------

# Module Federation

Multiple separate builds form a single application. 

These separate builds act like containers and can expose and consume code among themselves, creating a single, unified application.

Each build acts as a container and also consumes other builds as containers. 

This way, each build is able to access any other exposed module by loading it from its container.

-------------------------------------------------------

# Use Cases For Module Federation

 - Separate builds per page
 
 - Components library as container

-------------------------------------------------------

# Module Federation Setup In Webpack

c.f. Webpack notes

-------------------------------------------------------

# Turborepo

Solves your monorepo's scaling problem.

High-performance build system for monorepos in JavaScript and TypeScript.

Developed by Vercel.

Makes managing and building monorepos faster and smarter by:

 - Caching builds

 - Running tasks in parallel

 - Skipping work that hasn’t changed

Deets:

Remote Cache stores the result of all your tasks, meaning that your CI never needs to do the same work twice.

Additionally, task scheduling can be difficult in a monorepo. You may need to build, then test, then lint...

Turborepo schedules your tasks for maximum speed, parallelizing work across all available cores.

-------------------------------------------------------

# What Is a Monorepo?

A monorepo is a single codebase (repository) that contains multiple projects or packages i.e. a frontend app, backend service, and shared libraries.

-------------------------------------------------------

# Storybook

Frontend workshop for building UI components and pages in isolation.

A sandbox to render components without interference - i.e. from app business logic or context.

Develop and share hard-to-reach states and edge cases - without the need to run your whole app.

Focus development on each variation of a component, even the hard-to-reach edge cases.

Build complex UIs with many requirements and countless UI variations:

 - devices
 
 - browsers
 
 - accessibility
 
 - performance
 
 - async states

-------------------------------------------------------

cd apps

npx create-react-app design-system

cd design-system

npx storybook init

- what configuration should we install? -> RECOMMENDED  # If everything goes well, it automatically opens http://localhost:6006/

npm install -D @storybook/react@^9.0.15

npx build-storybook --version   # to check `build-storybook` works properly

npm install -D @storybook/cli@^9.0.15   # install specific version of the cli

npx build-storybook --version

npx storybook@9 init       # install specific version of the storybook, matches the version of your dependencies like @storybook/react@^9.0.15.

- what configuration should we install? -> RECOMMENDED  # If everything goes well, it automatically opens http://localhost:6006/

-------------------------------------------------------

running `npx create-react-app design-system` inside an existing monorepo or Turborepo project, which is not the ideal approach. Here are the steps

cd PROJECT_ROOT

rm -rf apps/design-system   # if you already have the folder created

npx create-react-app design-system --template cra-template

mv design-system apps/design-system

Then setup storybook inside that new project:

cd apps/design-system

npx storybook@9 init       # install specific version of the storybook, matches the version of your dependencies like @storybook/react@^9.0.15.

- what configuration should we install? -> RECOMMENDED  # If everything goes well, it automatically opens http://localhost:6006/

npx build-storybook --version   # to check `build-storybook` works properly

npm install -D @storybook/react@^9.0.15

In apps/design-system/package.json:

  "dependencies": {
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
+   "@movie-app/ui": "*",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
  },
  
And in apps/design-system run:

npm install

# Test the alias with a small script or check it manually

cd apps/design-system/.storybook/

ls PATH_ENTERED_IN_CONFIG

# Make sure the @movie-app/ui package is built:

cd packages/ui

npm run build 

-------------------------------------------------------

# 

cd /Users/adrienberthou/all-that-jazz/reactappsss/week-5-serverless-deployment-0xadri/

npm run build

npm i --omit=dev

mv ./node_modules ./build/node_modules

cp ./.env ./build/.env

cp ./src/middleware/swagger.yaml ./build/middleware/swagger.yaml

cd build && zip -r ../archive14.zip . && cd ..

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


