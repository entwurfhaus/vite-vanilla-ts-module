# vite-vanilla-ts-module

<p align="center">
    <img alt="license" src="https://img.shields.io/github/license/entwurfhaus/vite-vanilla-ts-module?style=flat-square" />
    <img alt="bundlephobia" src="https://img.shields.io/bundlephobia/min/@entwurfhaus/vite-vanilla-ts-module?style=flat-square" />
    <img alt="vulnerabilities" src="https://img.shields.io/snyk/vulnerabilities/github/entwurfhaus/vite-vanilla-ts-module?style=flat-square" />
    <img alt="release" src="https://img.shields.io/github/v/tag/entwurfhaus/vite-vanilla-ts-module?label=release&style=flat-square" />
</p>

This is a `vite` boilerplate project, created via `vanilla-ts` template. Primarily, for rapid `ts` supported modules for publishing onto `npm`.

![yarn build](2022-05-28_12-46-08.jpg "yarn build")

## Getting Started

```
yarn
npx husky add .husky/pre-commit "npx sort-package-json"
npx husky add .husky/pre-commit "yarn prettier"
```

Lastly, your file `.husky/pre-commit` should look like below:

```
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx sort-package-json
yarn prettier
```

And when ready to publish to `npm`:

```
npm login
npm publish
```
