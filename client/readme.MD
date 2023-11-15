## Table of Contents

- [Installation](#installation)
- [Project-Structure](#project-structure)
- [Support](#support)
- [Contributing](#contributing)

## Installation

Download to your project directory, add `README.md`, and commit:

delete .yarnrc.yml

```sh
corepack enable
yarn set version berry
```
Withing your .yarnrc.yml
make sure you have the following lines:
```nodeLinker: node-modules
yarnPath: .yarn/releases/yarn-berry.cjs
```
Then run
```
yarn install
```

## Project-Structure

- [App](#app)
- [Pages](#pages)
- [Widgets](#widgets)
- [Features](#features)
- [Entities](#entities)
- [Shared](#shared)

## App
App
: app-wide settings, styles and providers are found here

## Pages
Pages
: compositional layer to construct full pages from entities, features and widgets.

## Features
Features
: user interactions, actions that bring business value to the user (e.g)[ SendComment, AddToCart, UsersSearch, navigation, slider, categoryselector]

## Widgets
Widgets
: compositional layer to combine entities and features into meaningfulblocks [ footer, herosection, sidebar, slideritem, cardselect]


## Entities
Entities
: business entities. (e.g User,Product,Order)

## Shared
Shared
:reusable functionality, detached from the specifics of the project/business.(e.g. UIKit, libs, APIS)

[ constants, libs, router, store, styles, ui]