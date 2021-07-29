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

## Continous Deployment

Trigger: when code is pushed to the `main` branch, e.g. after merging in a branch  
Definition: `./github/workflows/kodeworks-CD.yml`

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

# Tech stack

- React
- NextJS
- TailwindCSS
- Storybook

## Dependencies

### [@tailwindcss-aspect-ratio](https://github.com/tailwindlabs/tailwindcss-aspect-ratio)

- Official plugin to TailwindCSS used to set the aspect ratio of images at different screen sizes.

### [use-scroll-position](https://github.com/n8tb1t/use-scroll-position)

- Used in `hooks/useScrollBasedOpacity.js` to change opacity based on scroll position.

### [postcss-font-magician](https://github.com/csstools/postcss-font-magician)

- Used to load custom fonts in `postcss.config.js` using a `urlPrefix`-variable to support Github Pages without a custom domain.

## Storybook

> 💡 Helps us document components for reuse and automatically visually test our components to prevent bugs.

### Configuration

- The main configuration file is `.storybook/main.js`
- `.storybook/preview.js` is used to add CSS generated by TailwindCSS to all components
- `.storybook/preview-head.html`

### Storybook static

- Build static version of storybook with `yarn build-storybook`.
- Serve static version of storybook with `npx http-server storybook-static`
