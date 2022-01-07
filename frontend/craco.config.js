const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = function () {
  const isProductionBuild = process.env.NODE_ENV === 'production';
  const analyzerMode = process.env.REACT_APP_INTERACTIVE_ANALYZE ? 'server' : 'json';

  const plugins = [];

  if (isProductionBuild) {
    plugins.push(new BundleAnalyzerPlugin({ analyzerMode }));
  }

  return {
    typescript: {
      enableTypeChecking: false /* (default: true)  */,
    },
    webpack: {
      plugins,
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
      // configure: {
      //   optimization: {
      //     runtimeChunk: false,
      //     splitChunks: {
      //       cacheGroups: {
      //         vendor: {
      //           test: /[\\/]node_modules[\\/](exceljs|xlsx)[\\/]/,
      //           name: 'vendor',
      //           chunks: 'all',
      //         },
      //       },
      //     },
      //   },
      // },
    },
  };
};
