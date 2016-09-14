module.exports = {
  entry: './src/base.js',
  output: {
    filename: './build/base.js'       
  },
  module: {
    loaders: [
        { 
            test: /\.js$/, 
            loader: 'jsx-loader?harmony' 
        }, 
        {
            test: /\.less$/,
            loader: 'style!css!less'
        },
        {
          test: /\.scss$/,
          loader: 'style!css!sass'
        }]
  }
};