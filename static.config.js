export default {
  getSiteProps: () => ({
    // TODO: configure site title
    title: 'Site Title',
  }),
  getRoutes: async () => {
    return [
      {
        path: '/',
        component: 'src/pages/Home',
      },
      {
        is404: true,
        component: 'src/pages/404',
      },
    ]
  },
  // TODO: configure siteRoot
  siteRoot: 'https://example.com',
}
