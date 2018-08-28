<template>
  <div id="app-vertical-ruler">
    <ul class="vertical-ruler__list">
      <li
        class="vertical-ruler__list__item"
        v-for="(item, index) of getData"
      >Y: {{ index + 1 }}
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'app-vertical-ruler',
    computed: {
      getData() {
        return this.$store.state.cellData
      }
    }
  }
</script>
<style scoped>
  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  #app-vertical-ruler {
    width: 100px;
  }

  .vertical-ruler__list {
    list-style: none;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    align-items: center;
    justify-content: center;
  }

  .vertical-ruler__list__item {
    height: 31px;
    width: 100px;
    background-color: #23ffa5;
    padding: 5px 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
