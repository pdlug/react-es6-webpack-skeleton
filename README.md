# Skeleton/starter for apps using ES6, React, and webpack

This project provides basic structure and configuration for starting a react
app using ES6 (via Babel) with webpack as a build tool.

Components:

* [React](https://facebook.github.io/react/)
* [Bootstrap](http://getbootstrap.com/) for some basic styles
* [ESLint](http://eslint.org/) with the
[Airbnb Javascript Style Guide](https://github.com/airbnb/javascript#arrow-functions)
rules.
* [webpack](https://webpack.github.io/) for building and packaging

## Installation

    git clone https://github.com/pdlug/react-es6-webpack-skeleton.git

    npm install

## Structure

* `src/client` - client side code
* `src/server` - server side code (e.g. an API server to support the client
  app). A simple express app that serves the static files is provided as an
  example.

## Development

Start the webpack dev server on [http://localhost:8080/](http://localhost:8080/):

    npm start

Check your code for style violations:

    npm lint

Run the server:

    npm run server

## TODO

* More structured client code example (components, routing, stores, etc.)
* Don't allow production build to succeed if lint fails
