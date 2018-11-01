const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'app-react/index.js'),
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [path.resolve(__dirname), /nachos-ui/],
                use: {
                    loader: "babel-loader",
                    query: {
                        "babelrc": false,
                        "plugins": ["react-native-web"],
                        "presets": ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            }
        ]
    },
    resolve: {
        alias: {
            "react-native-linear-gradient": "react-native-web-linear-gradient"
        }
    }
};




