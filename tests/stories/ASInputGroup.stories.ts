/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

// import * as components from '../../src/components'
import { ASInputGroup } from '../../src/components/ASInputGroup'
import { ASInput } from '../../src/components/ASInput'

storiesOf('ASInputGroup', module)
  .add('Group', () => ({
    components: { ASInputGroup, ASInput },
    data() {
      return {
        inputValue: ''
      }
    },
    template: `
    <ASInputGroup>
        <label>Name</label>
        <ASInput v-model="inputValue" />
    </ASInputGroup>
    `,
    methods: { action: action('Action triggered!') }
  } as object))