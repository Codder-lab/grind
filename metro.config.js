const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");
const path = require("path");

const config = getDefaultConfig(__dirname);

// 👇 Tell Metro to use the CommonJS build of rxjs instead of esm5
config.resolver.extraNodeModules = {
  ...(config.resolver.extraNodeModules || {}),
  rxjs: path.resolve(__dirname, "node_modules/rxjs/dist/cjs"),
};

module.exports = withNativeWind(config, { input: "./src/global.css" });
