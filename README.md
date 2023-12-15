# vite-vanilla-ts-template-extended (AKA `vite-vanilla-ts-module`)

<p align="center">
    <img alt="license" src="https://img.shields.io/github/license/entwurfhaus/vite-vanilla-ts-module?style=flat-square" />
    <img alt="release" src="https://img.shields.io/github/v/tag/entwurfhaus/vite-vanilla-ts-module?label=release&style=flat-square" />
    <img alt="github stars" src="https://img.shields.io/github/stars/entwurfhaus/vite-vanilla-ts-module?style=flat-square" />
    <img alt="GitHub Workflow Status (with event)" src="https://img.shields.io/github/actions/workflow/status/entwurfhaus/vite-vanilla-ts-module/develop.yml?style=flat-square" />
    <img alt="documentation" src="https://img.shields.io/website?label=documentation&style=flat-square&up_message=online&url=http%3A%2F%2Fvite-vanilla-ts-module.entwurfhaus.com%2F">
    <img alt="visits" src="https://hits.deltapapa.io/github/entwurfhaus/vite-vanilla-ts-module.svg" />
</p>

<p align="center">
    <img alt="bundlephobia" src="https://img.shields.io/bundlephobia/min/entwurfhaus/vite-vanilla-ts-module?style=flat-square" />
    <img alt="vulnerabilities" src="https://img.shields.io/snyk/vulnerabilities/github/entwurfhaus/vite-vanilla-ts-module?style=flat-square" />
</p>

A starter `vanilla-ts` (extended) template that began with Vite 3.x, prepared for writing `node` utility libraries in `typescript`. This starter is meant to provide rapid `node` package development and publishing onto `npm`.

![yarn build](_screenshots/2022-06-04_12-01-14.jpg "yarn build")

## Getting Started

```
yarn
yarn prepare
npx husky add .husky/pre-commit "yarn build"
npx husky add .husky/pre-commit "yarn prettier"
```

Lastly, your file `.husky/pre-commit` should look like below:

```
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

yarn build
yarn prettier
```

## Testing with Vitest

Run `yarn test:run` or `yarn test:coverage` to produce code coverage report.

![yarn test:run](_screenshots/2022-06-04_12-03-10.jpg "yarn test:run")

The code coverage report will indicate, if all test cases are 100% covered, flawed logic and so on.

## Running `vite`

Run `yarn dev` to open `index.html` via `http://localhost:5174`.

It contains some quick links, to the `stats.html` and coverage `index.html` files.

![yarn dev](_screenshots/2022-06-04_12-06-34.jpg "yarn dev")

## Build your package

Run `yarn build`, and check the `dist` folder for the final build output.

> If there are issues with the package, check `package.json` (props `main`, `module`, `typings`, `files` and etc), `tsconfig.json` (such as `allowJs`) and dependency versions (especially `vite`) to narrow down the build or typings errors you're experiencing.

## Publishing

And when ready to publish to `npm`:

```
npm login
npm publish
```
