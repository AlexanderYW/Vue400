const gridItemMixin = {
  props: {
    columnStart: {
      type: [String, Number]
    },
    columnSpan: {
      type: [String, Number]
    },
    rowStart: {
      type: [String, Number],
      default: undefined
    },
    rowSpan: {
      type: [String, Number],
      default: undefined
    },
  },
  data() {
    return {}
  },
  created () {},
  methods: {},
  computed: {
    columnComputedStyle(): Object {
      if (typeof this.columnStart !== "undefined" && typeof this.columnSpan !== "undefined") {
        return {
          gridColumn: `${this.columnStart} / span ${this.columnSpan}`,
        }
      }
      return {}
    },
    rowComputedStyle(): Object {
      if (typeof this.rowStart !== "undefined" && typeof this.rowSpan !== "undefined") {
        return {
          gridRow: `${this.rowStart} / span ${this.rowSpan}`
        }
      }
      return {}
    }
  }
}

const gridUtilsMixin = {
  props: {
    gridFlow: {
      type: [String]
    }
  },
  data() {
    return {}
  },
  created () {},
  methods: {}
}

const gridAreaMixin = {
  props: {
    gridArea: {
      type: String
    }
  },
  computed: {
    templateAreaComputedStyle(): Object {
      if (typeof this.gridArea !== "undefined") {
        return {
          gridArea: this.gridArea
        }
      }
      return {}
    }
  }
}

const gridSiteMixin = {
  props: {
    gridTemplateColumns: {
      type: String,
      default: "auto"
    },
    gridTemplateRows: {
      type: String,
      default: "80px calc(100vh - 160px) 80px"
    },
    gridTemplateAreas: {
      type: String,
      default: `
        "header"
        "main"
        "footer"
      `
    }
  },
  computed: {
    templateComputedStyle(): Object {
      return {
        display: 'grid',
        gridTemplateColumns: this.gridTemplateColumns || null,
        gridTemplateRows: this.gridTemplateRows || null,
        gridTemplateAreas: this.gridTemplateAreas || null
      }
    }
  }
}

export { gridItemMixin, gridUtilsMixin, gridSiteMixin, gridAreaMixin }