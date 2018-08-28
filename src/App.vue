<template>
  <div id="app">
    <app-column></app-column>
  </div>
</template>

<script>
  import Column from './Column.vue';

  export default {
    name: 'app',
    components: {
      appColumn: Column
    },
  }
</script>

<style></style>
