# React Fundamentals Workshop by Ben Ilegbodu

[![Maintenance Status](https://img.shields.io/badge/status-maintained-brightgreen.svg)](https://github.com/benmvp/react-workshop/pulse)
[![Build Status](https://travis-ci.org/benmvp/react-workshop.svg?branch=master)](https://travis-ci.org/benmvp/react-workshop)
[![license](https://img.shields.io/github/license/benmvp/react-workshop.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

[![Watch on GitHub](https://img.shields.io/github/watchers/benmvp/react-workshop.svg?style=social)](https://github.com/benmvp/react-workshop/watchers)
[![Star on GitHub](https://img.shields.io/github/stars/benmvp/react-workshop.svg?style=social)](https://github.com/benmvp/react-workshop/stargazers)
[![Tweet](https://img.shields.io/twitter/url/https/github.com/benmvp/react-workshop.svg?style=social)](https://twitter.com/intent/tweet?text=Check%20out%20React%20Fundamentals%20Workshop%20by%20%40benmvp!%0A%0Ahttps%3A%2F%2Fgithub.com%2Fbenmvp%2Freact-workshop)

A step-by-step workshop for learning React fundamentals. Best if accompanied with live facilitation. 🙂

## Many thanks!

- [Create React App](https://github.com/facebookincubator/create-react-app) - makes it painless to spin up a React environment
- [React Docs](http://facebook.github.io/react) - lots of content has been borrowed from here

## To run completed app

Assuming you have a version of [node](https://nodejs.org/en/) installed, [install `nvm`](https://github.com/creationix/nvm#install-script) and then close & reopen your terminal.

Install the latest stable version of node (you need Node >= 6):

```sh
nvm install node
```

[Fork the repo](https://github.com/benmvp/react-workshop/fork) and create a local clone (be sure to replace `<YOUR-USERNAME>` with your own):

```sh
git clone https://github.com/<YOUR-USERNAME>/react-workshop.git
```

Change to [`end`](end/) directory:

```sh
cd react-workshop/end
```

Install all of the dependencies ([`yarn`](https://yarnpkg.com/en/) is preferred):

```sh
# Yarn
yarn

# NPM
npm install
```

Start API server (running at [http://localhost:9090/](http://localhost:9090/)):

```sh
# Yarn
yarn run start:api

# NPM
npm run start:api
```

In a **separate terminal window/tab**, start the app:

```sh
# Yarn
yarn start

# NPM
npm start
```

After the app is initially built, a new browser window should open up at [http://localhost:3000/](http://localhost:3000/).

## Exercises

All of the exercises make use of [ES6](http://www.benmvp.com/learning-es6-series/) so you may need to brush up on the new JavaScript features if they are not familiar. Each step in the workshop builds on top of the previous one. If at any point you get stuck, you can find the answers in the source code of the given step. Any given step can be used as a starting point to continue on to the remaining steps.

You can start at the [beginning](00-begin/). Afterwards follow these steps:

1. [JSX](01-jsx/)
1. [Environment setup](02-components/)
1. [Lists](03-lists/)
1. [Fetching from server](04-fetch/)
1. [Email View](05-email-view/)
1. [Email Form](06-email-form/)
1. [Submit email form](07-submit-email-form/)
1. [Delete email](08-delete-email/)
1. [Mark unread/read](09-mark-unread/)
1. [Styling](10-styling/)
1. [Email Form Modal](11-email-form-modal/)
1. [API lib](12-api-lib/)
1. [Action-Reducers](13-action-reducers/)

## License

[MIT](LICENSE)
