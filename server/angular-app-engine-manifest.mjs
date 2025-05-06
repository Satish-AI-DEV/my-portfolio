
export default {
  basePath: 'https://www.satishpandey.co.in',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
