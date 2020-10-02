/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

// import * as components from '../components'
import { ASFunctionKey } from '../components/ASFunctionKey'

storiesOf('ASFunctionKey', module)
  .add('Function key - Enter', () => ({
    components: { ASFunctionKey },
    template: '<ASFunctionKey trigger="enter" label="Save modified data" @action="action" />',
    methods: { action: action('Action triggered!') }
  }))
  .add('Function key - Function key 1 (F1)', () => ({
    components: { ASFunctionKey },
    template: '<ASFunctionKey trigger="f1" label="Save modified data" @action="action" />',
    methods: { action: action('Action triggered!') }
  }))