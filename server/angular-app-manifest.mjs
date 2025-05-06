
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://www.satishpandey.co.in/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 6074, hash: '39bcf6145661291718ceaf10a7a2885a9118b181cc4b97d9f08604e2b1c03d1a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1090, hash: 'ef7a697ba9fdadd1e79d8dc9eaf602509047f4e52baa657423e0783f89f90906', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'main-IIO3AIVH.css': {size: 26054, hash: '3KMEVki9tus', text: () => import('./assets-chunks/main-IIO3AIVH_css.mjs').then(m => m.default)},
    'styles-Q2NVJ6XV.css': {size: 330521, hash: 'UuXIJdAPqJI', text: () => import('./assets-chunks/styles-Q2NVJ6XV_css.mjs').then(m => m.default)}
  },
};
