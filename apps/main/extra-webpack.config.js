const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default

module.exports = (angularWebpackConfig, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(angularWebpackConfig, options)

  singleSpaWebpackConfig.output.libraryName = 'angular_main'
  singleSpaWebpackConfig.output.libraryTarget = 'umd';

  singleSpaWebpackConfig.module.rules = [{ parser: { system: false } }]

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