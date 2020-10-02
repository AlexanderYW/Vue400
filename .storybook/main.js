const path = require('path')

module.exports = {
  stories: ['../tests/**/*.stories.@(ts|js|mdx)'],
  addons: [
    '@storybook/preset-scss',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-storysource',
    '@storybook/addon-viewport',
    '@storybook/addon-backgrounds',
    '@storybook/addon-docs',
    '@storybook/addon-controls'
  ],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.
    config.watch = true

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    },
    {
      test: /\.(png|svg|jpg|gif)$/,
      use: [
        'file-loader',
      ],
      include: path.resolve(__dirname, "../")
    });

    // Return the altered config
    return config;
  },
};
