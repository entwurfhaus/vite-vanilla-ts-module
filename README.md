# vite-vanilla-ts-module

This is a Vite `vanilla-ts` boilerplate, for developing `ts` supported modules for publishing onto `npm`.

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
