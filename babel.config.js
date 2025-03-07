module.exports = {
  "presets": [
    "@babel/preset-react",
    "@babel/preset-typescript",
    ["@babel/preset-env", { targets: { node: 'current' } }]
  ],
  "plugins": ["@babel/plugin-transform-react-constant-elements"]
}