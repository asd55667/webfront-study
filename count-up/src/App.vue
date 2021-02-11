<template>
  <span>{{ displayValue }}</span>
</template>

<script>
import {
  requestAnimationFrame,
  cancelAnimationFrame,
} from './requestAnimationFrame'

export default {
  props: {
    // incremented range
    startVal: {
      type: Number,
      required: true,
    },
    endVal: {
      type: Number,
      required: true,
    },
    // how long animation to display
    duration: {
      type: Number,
      required: true,
    },
    autoplay: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      localStartVal: this.startVal,
      localDuration: this.duration,
      displayValue: this.startVal,
      printVal: null,
      startTime: null,
      timestamp: null,
      rAF: null,
    }
  },
  mounted() {
    if (this.autoplay) {
      this.start()
    }
  },
  watch: {
    startVal() {
      if (autoplay) {
        this.start()
      }
    },
    endVal() {
      if (autoplay) {
        this.start()
      }
    },
  },
  methods: {
    start() {
      this.localStartVal = this.startVal
      this.localDuration = this.duration
      this.startTime = null
      this.rAF = requestAnimationFrame(this.count)
    },
    count(timestamp) {
      // init
      if (!this.startTime) this.startTime = timestamp
      this.timestamp = timestamp
      const progress = timestamp - this.startTime

      // next frame
      this.printVal =
        this.localStartVal +
        (this.endVal - this.localStartVal) * (progress / this.localDuration)

      // boundary clip
      this.printVal = this.printVal > this.endVal ? this.endVal : this.printVal
      this.displayValue = this.printVal.toFixed(0)

      if (progress < this.localDuration) {
        this.rAF = requestAnimationFrame(this.count)
      }
    },
  },
  destroyed() {
    cancelAnimationFrame(this.rAF)
  },
}
</script>
