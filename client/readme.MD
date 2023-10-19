delete .yarnrc.yml

corepack enable
yarn set version berry

```
    Withing your .yarnrc.yml
    make sure you have the following lines:

nodeLinker: node-modules

yarnPath: .yarn/releases/yarn-berry.cjs
```
yarn install