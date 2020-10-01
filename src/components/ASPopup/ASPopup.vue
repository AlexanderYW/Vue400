<template>
  <div class="as-popup" v-if="value" v-on="inputListeners">
    <div class="as-popup-title">
      test
    </div>
    test
  </div>
</template>

<script lang="ts">
import { Vue, Component, Model } from 'vue-property-decorator'

@Component({
  props: {
  },
  data() {
    return {
    }
  },
  methods: {
    hidePopup: function () {
      this.$emit('input', false)
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
        }
      )
    }
  },
})
export default class ASPopup extends Vue {
  @Model('input', { type: String }) public value!: string
}
</script>