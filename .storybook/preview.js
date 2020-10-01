/* eslint-disable import/no-extraneous-dependencies */
import { addDecorator } from '@storybook/vue'
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'

import '!style-loader!css-loader!sass-loader!../src/scss/AS400.scss'

addDecorator(() => ({
  template: '<div style="min-height: calc(100vh - 60px);"><story/></div>',
}))

export const parameters = {
  viewport: {
    viewports: MINIMAL_VIEWPORTS,
  },
  controls: {
    expanded: true,
    hideNoControlsWarning: true
  },
  backgrounds: {
    default: 'black',
    values: [
      { 
          name: 'black', 
          value: '#000000'
      },
      { 
        name: 'blue', 
        value: '#0000ff'
      },
      { 
          name: 'white', 
          value: '#ffffff' 
      },
    ],
  }
};
