module.exports = {
  publicPath: './',
  css: {
    extract: false
  },
  chainWebpack: config => {
    config.module.rules.delete('eslint');
  },
};
