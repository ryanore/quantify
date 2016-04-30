var path = require('path');
var webpack = require('webpack');


module.exports = {
  devtool: 'cheap-module-eval-source-map',

  /*Add an entry for the stub data, otherwise webpack won't serve it*/
  entry: {
    main: [
      'webpack-hot-middleware/client',
      './src/index'
    ]
  },

  /*** serve chunks of js based on the entry [name]*/
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/public/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    })
  ],
  resolve: {
    extensions: ['', '.js'],
    root: path.join(__dirname, 'src'),
    modulesDirectories: ['node_modules'],
    alias: {
      app: path.join(__dirname,'src')
    }
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      exclude: /node_modules/
    },
    {
      test: /\.(scss|sass)$/,
      loader: 'style-loader!css-loader!sass-loader?sourceMap'
    }],
    preLoaders: [{
      test: /\.jsx?$/,
      loaders: ['eslint'],
      include: path.resolve(__dirname, "src"),
      alias: {
        app: path.join(__dirname,'src')
      }
    }]
  }
};
