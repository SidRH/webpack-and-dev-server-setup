const path = require('path');

module.exports = {
    entry: "./src/app.js",
    mode: "production",
    devServer: {
        contentBase: './public'
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'public')
    }
      
}