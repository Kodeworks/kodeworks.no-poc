# Getting started

`yarn` to install dependencies  
`yarn dev` to start development

## VSCode setup

- Rename `.vscode/recommended.settings.json` to `.vscode/settings.json` to enable recommended VSCode settings
- Recommended plugins [Todo]

# Tech stack

- React
- NextJS
- TailwindCSS
- Storybook

## Dependencies

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

# Next.js + Tailwind CSS Example

This example shows how to use [Tailwind CSS](https://tailwindcss.com/) [(v2.2)](https://blog.tailwindcss.com/tailwindcss-2-2) with Next.js. It follows the steps outlined in the official [Tailwind docs](https://tailwindcss.com/docs/guides/nextjs).

It uses the new [`Just-in-Time Mode`](https://tailwindcss.com/docs/just-in-time-mode) for Tailwind CSS.

## Preview

Preview the example live on [StackBlitz](http://stackblitz.com/):

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/with-tailwindcss)

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss&project-name=with-tailwindcss&repository-name=with-tailwindcss)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example with-tailwindcss with-tailwindcss-app
# or
yarn create next-app --example with-tailwindcss with-tailwindcss-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).