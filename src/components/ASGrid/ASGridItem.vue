<template>
  <div
    class="as-grid-item"
    :style="{
      ...columnComputedStyle,
      ...rowComputedStyle,
      ...templateAreaComputedStyle
    }"
  >
    <slot />
  </div>
</template>

<script>
import { gridItemMixin, gridAreaMixin } from '../../mixins/grid'

export default {
  name: 'ASGrid',
  mixins: [
    gridItemMixin,
    gridAreaMixin
  ],
  props: {
  },
  data () {
    return {
    }
  },
  computed: {},
  watch: {},
  mounted () {
  },
  created () {
  },
  beforeDestroy () {
  },
  methods: {
  }
}
</script>