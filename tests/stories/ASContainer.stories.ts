/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'

// import * as components from '../components'
import { ASContainer } from '../../src/components/ASContainer'

storiesOf('ASContainer', module)
  .add('Normal', () => ({
    components: { ASContainer },
    template: '<ASContainer>Container content</ASContainer>'
  } as object))
  .add('Fluid', () => ({
    components: { ASContainer },
    template: '<ASContainer fluid>Container content</ASContainer>'
  } as object))