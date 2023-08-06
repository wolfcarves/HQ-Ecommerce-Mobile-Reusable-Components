module.exports = {
  presets: [
    ['@babel/preset-env', {
      targets: {
        node: 'current'
      }
    }],
    '@babel/preset-typescript',
    'module:metro-react-native-babel-preset'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        src: './src',
        components: './src/components'
      }
    }],
    'react-native-reanimated/plugin'],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
};
