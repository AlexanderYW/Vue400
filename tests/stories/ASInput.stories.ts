/* eslint-disable import/no-extraneous-dependencies */
// import { Meta, Story } from '@storybook/vue/types-6-0'; // TODO: Storybook 6.1.x
import { Meta, Story } from '@storybook/vue/dist/typings.d'; // Storybook 6.0.x
import { ASInput } from '../../src/components/ASInput'

export default {
  title: 'ASInput',
  component: ASInput,
  argTypes: {
    label: { control: { type: 'text' } },
    width: { control: { type: 'text' } },
  },
} as Meta;

export const InputWithProps: Story = (args, { argTypes }) => ({
  components: { ASInput },
  template: '<ASInput v-model="inputValue" :label="label" :width="width" v-on:keyup="action" />',
  props: Object.keys(argTypes),
  data() {
    return {
      inputValue: ''
    }
  },
  methods: {
    action () {
      console.log('Action triggered!')
    }
  }
});
InputWithProps.args = {
  label: 'Text input',
  width: 15,
};
