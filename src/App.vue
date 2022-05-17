<template>
  <!-- <Header /> -->
  <main id="main" class="container mx-auto my-8">
    <router-view v-slot="{ Component }">
      <transition
        name="slide"
        mode="out-in"
      >
        <component
          :is="Component"
          :key="$route.path"
        />
      </transition>
    </router-view>
  </main>
</template>

<script setup lang="ts">
import Button from './components/UI/Button/Button.vue';
// import Header from './components/Header.vue';

</script>

<style scoped>

</style>