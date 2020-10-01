/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

// import * as components from '../components'
import { ASCommandline } from '../components/ASCommandline'

storiesOf('ASCommandline', module)
  .add('Commandline', () => ({
    components: { ASCommandline },
    template: `
      <div>
        <ASCommandline v-model="commandValue" label="Selection or command" v-on:keyup.enter="action" />
        <span>{{ commandValue }}</span>
      </div>
    `,
    data() {
      return {
        commandValue: ''
      }
    },
    methods: { action: action('Action triggered!') }
  } as object))