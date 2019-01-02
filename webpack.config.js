const path = require("path");

module.exports = {
  entry: "./my-el.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "my-el.js"
  },
  optimization: {
    minimize: false
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        // We need to transpile Polymer itself and other ES6 code
        // exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: {
                    browsers: [
                      // Best practice: https://github.com/babel/babel/issues/7789
                      ">=1%",
                      "not ie 11",
                      "not op_mini all"
                    ]
                  },
                  debug: true
                }
              ]
            ],
            plugins: [
              ["@babel/plugin-syntax-object-rest-spread", { useBuiltIns: true }]
            ]
          }
        }
      }
    ]
  }
};
