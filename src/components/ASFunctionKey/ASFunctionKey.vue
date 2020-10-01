<template>
  <span>{{ trigger.toUpperCase() }}={{ label }}</span>
</template>

<script>
export default {
  props: {
    trigger: {
      type: String
    },
    label: {
      type: String
    }
  },
  created() {
    window.addEventListener('keydown', this.handler);
  },
  beforeDestroy() {
    window.removeEventListener('keydown', this.handler);
  },
  methods: {
    handler (event) {
      if (this.triggerKey === event.key || this.trigger === event.key.toLowerCase()) {
        event.preventDefault()
        this.$emit('action', event);
        event.stopPropagation()
      }
    }
  },
  computed: {
    triggerKey() {
      var key = this.keys[this.trigger]
      
      return key
    },
    keys() {
      var keys = {
        'shift': 'Shift',
        'ctrl': 'Control',
        'meta': 'Meta',
        'alt': 'Alt',
        'arrowup': 'ArrowUp',
        'arrowleft': 'ArrowLeft',
        'arrowright': 'ArrowRight',
        'arrowdown': 'ArrowDown',
        'altgraph': 'AltGraph',
        'esc': 'Escape',
        'enter': 'Enter',
        'tab': 'Tab',
        'space': ' ',
        'pageup': 'PageUp',
        'pagedown': 'PageDown',
        'home': 'Home',
        'end': 'End',
        'del': 'Delete',
        'backspace': 'Backspace',
        'insert': 'Insert',
        'numlock': 'NumLock',
        'capslock': 'CapsLock',
        'pause': 'Pause',
        'contextmenu': 'ContextMenu',
        'scrolllock': 'ScrollLock',
        'browserhome': 'BrowserHome',
        'mediaselect': 'MediaSelect'
      }
      return keys;
    }
  }
}
</script>

<style>

</style>