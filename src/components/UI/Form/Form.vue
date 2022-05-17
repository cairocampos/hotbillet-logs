<template>
  <form :class="[`space-y-${vertical}`, `text-${size}`]">
    <slot />
  </form>
</template>

<script lang='ts'>
import { defineComponent, PropType } from 'vue';
type FormSize = "sm"|"md"
export default defineComponent({
  props: {
    size: {
      type: String as PropType<FormSize>,
      default: "sm"
    },
    vertical: {
      type: [String,Number],
      default: '4'
    }
  },
  setup() {
    //
  }
})
</script>

<style lang='scss' scoped>
</style>