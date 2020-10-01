/* eslint-disable import/no-extraneous-dependencies */
import { Meta, Story } from '@storybook/vue/types-6-0';
import { ASPopup } from '../components/ASPopup'

export default {
  title: 'ASPopup',
  component: ASPopup,
  argTypes: {
    show: {
      control: {
        type: 'boolean',
      },
      default: true,
      description: 'Show or hides the popup'
    },
    horizontal: {
      control: {
        type: 'select',
        options: ['x-left', 'x-center', 'x-right'],
      },
      description: 'Horizontally align the popup'
    },
    vertical: {
      control: {
        type: 'select',
        options: ['y-top', 'y-center', 'y-bottom'],
      },
      description: 'Vertically align the popup'
    },
    title: {
      control: { type: 'text' },
      description: 'Title of the popup',
    },
    content: {
      control: { type: 'text' },
      description: 'Content of the popup',
    },
  },
} as Meta;

export const PopupWithProps: Story = (args, { argTypes }) => ({
  components: { ASPopup },
  template: `
    <ASPopup v-model="show" :class="[vertical, horizontal]" v-on:closed="action" v-on:opened="action" :title="title">
      <span>{{ content }}</span>
    </ASPopup>
  `,
  props: Object.keys(argTypes),
  data() {
    return {
    }
  },
  methods: {
    action () {
      console.log('Action triggered!')
    }
  }
});
PopupWithProps.args = {
  show: true,
  title: 'Popup title',
  content:'Popups can be very useful',
  vertical: 'y-top',
  horizontal: 'x-left'
};