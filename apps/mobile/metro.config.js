const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const path = require('path');
/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  resolver: {
    unstable_enableSymlinks: true,
  },
  watchFolders: [
    path.resolve(__dirname, '../../node_modules'),
    path.resolve(__dirname, '../../node_modules/@packages/hq-ecommerce-ui'),
    path.resolve(__dirname, '../../packages'),
    path.resolve(__dirname, '../../apps'),
  ],
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
