import path from 'path';

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../src/client/app.js'),
    head: path.resolve(__dirname, '../src/client/head.js'),
  },

  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js'
  },

  resolve: {
    extensions: ['', '.js', '.scss'],
    modulesDirectories: ['src/client', 'node_modules']
  },

  module: {
    loaders: [
      {
        test: /\.js/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          cacheDirectory: true
        }
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass?outputStyle=expanded&' +
          'includePaths[]=' +
            (path.resolve(__dirname, '../node_modules/bootstrap-sass/assets')) + '&' +
          'includePaths[]=' +
            (path.resolve(__dirname, '../node_modules/bootstrap-sass/assets/stylesheets'))
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  }
};
