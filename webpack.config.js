const path = require("path");

module.exports = {
    entry: './my-el.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'my-el.js'
    },
    optimization: {
        minimize: false
    }
}