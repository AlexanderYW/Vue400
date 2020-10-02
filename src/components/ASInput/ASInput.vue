<template>
  <div class="as-input" :class="data.class" :style="`width:${width}ch;`">
    <label v-if="label">{{ label }}</label>
    <div class="as-input-field">
      <input
        :value="value"
        type="text"
        ref="caretInput"
        :style="`width:${width}ch;`"
        v-bind="$attrs"
        v-on="inputListeners"
        spellcheck="false"
      />
      <span class="as-input-field__content" v-html="parsedValue"></span>
      <span class="as-input-field__cursor" :style="{
        marginLeft: `${cursorPosition}ch`,
        width: `${cursorWidth}ch`
      }"></span>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Model } from 'vue-property-decorator'
import { FluidMixin } from '../../mixins/fluid'
import { DataMixin } from '../../mixins/data'

@Component({
  mixins: [DataMixin, FluidMixin],
  props: {
    label: {
      type: String,
      default: null
    },
    width: {
      type: Number,
      default: null
    },
  },
  data() {
    return {
      cursorPosition: 0,
      cursorWidth: 1
    }
  },
  methods: {
    cursorModifier: function ({target, type}) {
      if (type !== 'input') {
        this.$emit(type, event)
      }
      this.$set(this, 'cursorPosition', target.selectionStart - target.value.length)
      this.$set(this, 'cursorWidth', (target.selectionEnd - target.selectionStart) || 1)
    }
  },
  computed: {
    inputListeners: function () {
      var vm = this
      // `Object.assign` merges objects together to form a new object
      return Object.assign({},
        // We add all the listeners from the parent
        this.$listeners,
        // Then we can add custom listeners or override the
        // behavior of some listeners.
        {
          // This ensures that the component works with v-model
          input: function (event: any) {
            vm.$emit('input', event.target.value)
            vm.cursorModifier(event)
          },
          mouseup: function (event: any) {
            vm.cursorModifier(event)
          },
          mousemove: function (event: any) {
            vm.cursorModifier(event)
          },
          keyup: function (event: any) {
            vm.cursorModifier(event)
          },
          select: function (event: any) {
            vm.cursorModifier(event)
          },
          touchend: function (event: any) {
            vm.cursorModifier(event)
          },
          click: function (event: any) {
            vm.cursorModifier(event)
          },
          dbclick: function (event: any) {
            vm.cursorModifier(event)
          }
        }
      )
    },
    parsedValue: function() {
      return this.value.replace(/ /g, '<span class="emulate-space"> </span>')
    }
  } as any,
})
export default class ASInput extends Vue {
  @Model('input', { type: String }) public value!: string
}
</script>

<style>

</style>