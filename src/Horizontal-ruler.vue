<template>
  <div id="app-horizontal-ruler">
    <ul class="horizontal-ruler__list">
      <li
        class="horizontal-ruler__list__item"
        v-for="(item, index) of getData"
      >X: {{ index + 1 }}
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'app-horizontal-ruler',
    computed: {
      getData() {
        return this.$store.state.cellData[0].cellItemArray
      }
    },
  }
</script>
<style scoped>
  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  #app-horizontal-ruler {
    width: 100%;
  }

  .horizontal-ruler__list {
    list-style: none;
    display: flex;
    align-items: center;
    margin: 0;
    padding-left: 100px;
  }

  .horizontal-ruler__list__item {
    min-width: 100px;
    background-color: #23ffa5;
    padding: 5px 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
