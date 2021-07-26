// If you want to use other PostCSS plugins, see the following:
// https://tailwindcss.com/docs/using-with-preprocessors
const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ''

module.exports = {
  plugins: {
    'postcss-import': {},
    tailwindcss: {},
    'postcss-font-magician': {
      custom: {
        'NON Natural Grotesk': {
          variants: {
            normal: {
              100: {
                local: ['NON Natural Grotesk Thin', 'non-natural-grotesk-thin'],
                url: {
                  woff2: prefix + '/fonts/non-natural-grotesk-thin.woff2',
                  woff: prefix + '/fonts/non-natural-grotesk-thin.woff',
                },
              },
              300: {
                local: [
                  'NON Natural Grotesk Light',
                  'non-natural-grotesk-light',
                ],
                url: {
                  woff2: prefix + '/fonts/non-natural-grotesk-light.woff2',
                  woff: prefix + '/fonts/non-natural-grotesk-light.woff',
                },
              },
              400: {
                local: [
                  'NON Natural Grotesk Regular',
                  'non-natural-grotesk-regular',
                ],
                url: {
                  woff2: prefix + '/fonts/non-natural-grotesk-regular.woff2',
                  woff: prefix + '/fonts/non-natural-grotesk-regular.woff',
                },
              },
              500: {
                local: [
                  'NON Natural Grotesk Medium',
                  'non-natural-grotesk-medium',
                ],
                url: {
                  woff2: prefix + '/fonts/non-natural-grotesk-medium.woff2',
                  woff: prefix + '/fonts/non-natural-grotesk-medium.woff',
                },
              },
              700: {
                local: ['NON Natural Grotesk Bold', 'non-natural-grotesk-bold'],
                url: {
                  woff2: prefix + '/fonts/non-natural-grotesk-bold.woff2',
                  woff: prefix + '/fonts/non-natural-grotesk-bold.woff',
                },
              },
            },
          },
        },
      },
    },
    autoprefixer: {},
  },
}
