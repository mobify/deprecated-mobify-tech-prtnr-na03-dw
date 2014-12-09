#mobify-tech-prtnr-na03-dw

This repository contains the code for the mobify-tech-prtnr-na03-dw Adaptive.js project. 

## Documentation

For documentation for Adaptive.js, including tool installation, and information on running your project in the Mobify Cloud, please see our [cloud documentation](https://cloud.mobify.com/docs/adaptivejs/).

## Support 

Please contact <support@mobify.com> for assistance.

## Project Information

- **Project Slug**: mobify-tech-prtnr-na03-dw
- **Site URL**: http://mobify-tech-prtnr-na03-dw.demandware.net/on/demandware.store/Sites-SiteGenesis-Site

## Installation

To install, first clone the repository:

```
git clone https://github.com/<organization>/mobify-tech-prtnr-na03-dw.git
```

## Running locally

Adaptive.js uses [grunt.js](http://gruntjs.com/) to run, build, test, and deploy. The following grunt tasks are available:

### `grunt preview`

Builds the project and runs a local development server, allowing the project to be run locally. The preview command additionally outputs the preview URL of the target site, allowing you to easily navigate to [preview.mobify.com](https://preview.mobify.com) to enable previewing.

For more information on previewing, please see our [preview documentation](https://cloud.mobify.com/docs/adaptivejs/getting-started/#/previewing-your-adaptation/).

### `grunt lint`

Runs jshint and jscs against the project, ensuring that code style and stynax are correct. For more information on lint errors, please see [jslinterrors.com](http://jslinterrors.com).

To find out more about Mobify's code style rules, please see the [Mobify Code Style](https://github.com/mobify/mobify-code-style) repository.

### `grunt test`

Runs our unit and integration tests.

```
// runs tests in the terminal/command line
grunt test

// runs tests in the browser, viewable at http://localhost:8888/tests/runner
grunt test_browser
```

### `grunt nightwatch`

Runs nightwatch, our WebDriver system test framework written in Node.js.

```
// runs all tests
grunt nightwatch

// runs a specific group
grunt nightwatch --group path/to/my/tests/

// runs a specific test file
grunt nightwatch --test path/to/my/tests/test.js
```

### `grunt push`

Builds and deploys a version of this project to [cloud.mobify.com](https://cloud.mobify.com).

```
grunt push -m "Bundle for January 1st"
```

