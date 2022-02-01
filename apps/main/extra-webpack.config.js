const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default

module.exports = (angularWebpackConfig, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(angularWebpackConfig, options)

  singleSpaWebpackConfig.output.jsonpFunction = '@micro-frontends-demo/main';

  singleSpaWebpackConfig.module.loaders = [
    {
      test: /\.ts$/,
      loaders: [
        'awesome-typescript-loader'
      ]
    },
    {
      test: /\.(ts|js)$/,
      loaders: [
        'angular-router-loader'
      ]
    }
  ]

  // Feel free to modify this webpack config however you'd like to
  return singleSpaWebpackConfig
}