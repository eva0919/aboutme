module.exports = {
  entry: "./src/base.js",
  output: {
    path: `${__dirname}/build`,
    filename: "base.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          }
        ]
      }
    ]
  },
  // plugins 放置所使用的外掛
  plugins: []
};
