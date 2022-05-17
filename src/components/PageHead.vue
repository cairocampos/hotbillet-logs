<template>
  <div>
    <h2 class="text-2xl text-zinc-700">
      <slot>
        {{title}}
      </slot>
    </h2>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: ""
  }
})
</script>

<style scoped>

</style>