const path = require('path')

module.exports = {
  entry: ['./src/index.js'],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'sass-loader' // compiles Sass to CSS, using Node Sass by default
        ],
        exclude: /node_modules/
      },
      {
          test: /\.js$/,
          include: path.join(__dirname),
          exclude: /(node_modules)|(dist)/,
          use: {
              loader: 'babel-loader',
              options: {
                  presets: ['env']
              }
          }
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    path: path.resolve(`${__dirname}/dist`),
    publicPath: '/',
    filename: 'index.js',
    library: '',
    libraryTarget: 'commonjs'
  },
  devServer: {
    contentBase: './dist'
  }
}
