const path = require("path");

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
          }
        ],
        include: path.resolve(__dirname, "../")
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
        include: path.resolve(__dirname, "../")
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              appendTsSuffixTo: [/\.vue$/],
              transpileOnly: true // used with ForkTsCheckerWebpackPlugin
            },
          }
        ],
      }
    ]
  }
};