const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/graphql',
    createProxyMiddleware({
      target: process.env.PROXY_TARGET || 'https://example.com',
      changeOrigin: true,
      secure: false,
    })
  );
};
