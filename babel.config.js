module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [
    'transform-export-extensions',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-transform-runtime'
  ]
}
