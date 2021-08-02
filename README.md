# Getting started

`yarn` to install dependencies  
`yarn dev` to start development

## Recommended VSCode setup

- Rename `.vscode/recommended.settings.json` to `.vscode/settings.json` to enable recommended VSCode settings

### VSCode Extensions

- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
  - Automated code formatting
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
  - Improves the coding experience when using TailwindCSS with features such as autocomplete, CSS Linting and hover preview.
- [Headwind](https://marketplace.visualstudio.com/items?itemName=heybourn.headwind)
  - An opinionated class sorter for TailwindCSS, ensures consistent ordering of classes.

# CI/CD

## Continous Integration

Trigger: on all Pull Requests to the `main` branch  
Definition: `./github/workflows/kodeworks-CI.yml`

### [paths-filter](https://github.com/dorny/paths-filter)

Used for change-detection, so that steps unrelated to changes don't have to be executed.

## Continous Deployment

Trigger: when code is pushed to the `main` branch, e.g. after merging in a branch  
Definition: `./github/workflows/kodeworks-CD.yml`

## Running Github Actions locally

The [act library](https://github.com/nektos/act) makes local testing of Github Actions relatively straight forward, providing faster feedback so you don't have to push code to Github to test changes in a workflow.

- [Install act (and Docker)](https://github.com/nektos/act#installation) locally on your machine
- Run `act -j <name-of-workflow-job-you-want-to-test>` e.g. `act -j test`
- If you don't want to use the large image requiring +20GB:
  - Select the Medium size image of act.
  - The job will fail because `yarn` is not part of the medium image.
  - Add `- run: npm i -g yarn` to the start of the job to use `yarn` in the workflow
- Comment out any cache (`#cache: 'yarn'`) since the Cache Service is not available in the Docker container.
- Do your changes, and run `act -j <name-of-workflow-job-you-want-to-test>` to re-run the job locally
- Remember to uncomment any cache and remove `- run: npm i -g yarn` afterwards!

# Hosting

The site is hosted at https://kodeworks.github.io/kodeworks.no-poc

## Subpath

- The use of a subpath (`/kodeworks.no-poc`) requires a URL prefix for navigation and resources.
  - Resources can use `utils/urlPrefix.js`
    - Fonts are added using [postcss-font-magician](#postcss-font-magician) in order to utilize `utils/urlPrefix.js`
  - Navigation is [handled by NextJS](https://nextjs.org/docs/api-reference/next.config.js/basepath) using `basePath` in `next.config.js`
  - The environment variable `NEXT_PUBLIC_BASE_PATH` used for the subpath is defined in `./github/workflows/kodeworks-CD.yml`

## NextJS limitations

Since we host a static HTML app without a Node.js server, [some NextJS functionality relying on a Node.js server is not available](https://nextjs.org/docs/advanced-features/static-html-export#caveats).

Most notably:

- The [`next/image`](https://nextjs.org/docs/api-reference/next/image)-component is not available
- [`getServerSideProps`](https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering) is not supported
- [`API Routes`](https://nextjs.org/docs/api-routes/introduction) are not supported

# Mental model of repository

- [Pages](https://nextjs.org/docs/basic-features/pages) are React components defined in the `/pages`-folder
  - `_document.js` is a [custom NextJS-component](https://nextjs.org/docs/advanced-features/custom-document) used to augment the `<html>` and `<body>` tag
  - `_app.js` is a [custom NextJS-component](https://nextjs.org/docs/advanced-features/custom-app) used to control page initialization
- [Routing](https://nextjs.org/docs/routing/introduction) is dictated by the structure of components/folders in the `/pages`-folder
  ```
    Folder structure:               URL:
    pages/
    ├── index.html                  /
    ├── folk/                       /folk -> returns 404 since it is a folder
    │   ├── ola-nordmann.js         /folk/ola-nordmann
    │   └── eirik.js                /folk/eirik
    └── prosjekter.js               /prosjekter
        └──  [prosjekt].js          /prosjekter/prosjekt -> see dynamic routes below 👇
  ```
  - [dynamic routes](https://nextjs.org/docs/routing/dynamic-routes) are used in `/pages/prosjekter/[prosjekt].js`
- `components/` are structured according to [the atomic design methodology](https://bradfrost.com/blog/post/atomic-web-design/)
- Storybook-stories are located next to the component
- `data/` contains content for people, projects and tech used in components
- `hooks/` contains custom React hooks
- `utils/` contains custom functions for small/repetitive operations
- `public/` contains static public resources
- `styles/` contains `*.css`.

## Config files

- `.github/workflows/` defines [CI/CD](#cicd)
- `.storybook/` configures [Storybook](#storybook)
- `next.config.js` configures [NextJS](https://nextjs.org/docs/api-reference/next.config.js/introduction)
- `postcss.config.js` configures [PostCSS](#postcss)
- `tailwind.config.js` configures [TailwindCSS](#tailwindcss)
  ***
- `.vscode/` configures [VS Code](#recommended-vscode-setup)
- `.prettierrc` configures [prettier](#vscode-extensions)
- `.gitignore` [specifies untracked files](https://git-scm.com/docs/gitignore)

# Tech stack

- [React](https://reactjs.org/)
- [NextJS](#nextjs)
- [TailwindCSS](#tailwindcss)
- [Storybook](#storybook)

## Dependencies

### [@tailwindcss-aspect-ratio](https://github.com/tailwindlabs/tailwindcss-aspect-ratio)

- Official plugin to TailwindCSS used to set the aspect ratio of images at different screen sizes.

### [use-scroll-position](https://github.com/n8tb1t/use-scroll-position)

- Used in `hooks/useScrollBasedOpacity.js` to change opacity based on scroll position.

### [postcss-font-magician](https://github.com/csstools/postcss-font-magician)

- Used to load custom fonts in `postcss.config.js` using a `urlPrefix`-variable to support Github Pages without a custom domain.

## [NextJS](https://nextjs.org/)

> 💡 A React Framework providing an awesome developer experience.

NextJS enables us to export our React App to static HTML [with some limitations](#nextjs-limitations), which we serve with [Github Pages](#hosting).

## [TailwindCSS](https://tailwindcss.com/)

> 💡 A utility-first CSS framework that lets us provide styling without leaving the HTML/JSX.

- Utility-first means that each TailwindCSS class does one thing and one thing only.
- Uses [PurgeCSS](https://purgecss.com/) to remove all unused CSS.
- Configured in `tailwind.config.js`
- Easy to customize existing utilities in `tailwind.config.js`

## [PostCSS](https://postcss.org/)

> 💡 A tool for transforming CSS with JavaScript.

- Configured in `postcss.config.js`
- TailwindCSS is a plugin to PostCSS.
- [Autoprefixer](https://github.com/postcss/autoprefixer) adds vendor prefixes to CSS rules using [Can I use](https://caniuse.com/)
- [postcss-font-magician](https://github.com/csstools/postcss-font-magician) generates `@font-face`-rules using environment variables to handle fonts hosted with subpath.
- [postcss-preset-env](https://preset-env.cssdb.org/) enables us to write modern CSS, and let the plugin fix polyfills based on targeted browsers.
- [List of more plugins](https://github.com/postcss/postcss/blob/main/docs/plugins.md)

## [Storybook](https://storybook.js.org/)

> 💡 Helps us document components for reuse and automatically visually test our components to prevent bugs.

### Configuration

- The main configuration file is `.storybook/main.js`
- `.storybook/preview.js` is used to add CSS generated by TailwindCSS to all components

### Storybook static

- Build static version of Storybook with `yarn build-storybook`.
- Serve static version of storybook with `npx http-server storybook-static`

### Storybook CI

- The `.github/workflows/kodeworks-CI.yml`-workflow tries to build a static version of Storybook if the change detection job detects any changes defined to be related to Storybook.
