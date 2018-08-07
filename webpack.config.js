module.exports = {
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: './dist/bundle.js'
    },
    devtool: 'source-map', 
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    }
}

// const path = require('path');

// module.exports = {
//   entry: [
//     './client/src/Index.js'
//   ],
//   output: {
//     filename: 'bundle.js',
//     path: path.join(__dirname, 'client/dist')
//   },
//   module: {
//     rules: [
//       {
//         test: /\.jsx?$/,
//         use: [
//           'babel-loader'
//         ],
//         exclude: /node_modules|packages/,
//       },
//       {
//         test: /\.css$/,
//         use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
//       }
//     ],
//   },
//   resolve: {
//     extensions: ['.js', '.jsx']
//   }
// };