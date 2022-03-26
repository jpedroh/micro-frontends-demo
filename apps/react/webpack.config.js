const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "micro-frontends-demo",
    projectName: "react",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    externals: ['@micro-frontends-demo/auth'],
  });
};
