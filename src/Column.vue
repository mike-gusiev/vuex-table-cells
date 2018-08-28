<template>
  <div id="app-column">
    <app-horizontal-ruler></app-horizontal-ruler>
    <div class="wrapper">
      <app-vertical-ruler></app-vertical-ruler>
      <div>
        <ul class="grid-list" v-for="(row, i) of getData">
          <li class="grid-list__item" v-for="(cell, index) of row.cellItemArray">
            <input
              class="grid-list__item__checkbox"
              @click="toggle(cell)"
              type="checkbox"
            >
            <input
              class="grid-list__item__input"
              ref="inputData" :disabled="!cell.inputIsActive"
              type="number"
              v-model="cell.inputValue"
              @keypress="focusInput(cell)"
            >
            <button
              class="grid-list__item__button"
              @click="saveData(row, cell, index, i)"
              v-bind:class="{ active: cell.saveIsVisible }"
            >Save
            </button>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
  import HorizontalRuler from './Horizontal-ruler'
  import VerticalRuler from './Vertical-ruler'

  export default {
    name: 'app-column',
    data() {
      return {
        scrolledBottom: false,
        scrolledRight: false
      }
    },
    computed: {
      getData() {
        return this.$store.state.cellData
      }
    },
    watch: {
      scrolledBottom(scrolled) {
        if (scrolled) {
          setTimeout(() => {
            this.$store.commit('addDataBottom')
          }, 500)
        }
      },

      scrolledRight(scrolled) {
        if (scrolled) {
          setTimeout(() => {
            this.$store.commit('addDataRight')
          }, 500)
        }
      }
    },
    methods: {
      toggle(cell) {
        this.$store.commit('toggle', cell)
      },
      saveData(row, cell, index, i) {
        let rowElement = i + 1;
        let columnElement = index + 1;

        console.log('Coordinates: ' + 'X: ' + columnElement + ',' + 'Y: ' + rowElement);
        console.log('Value: ' + cell.inputValue);

        if (cell.checkBoxActive === true) {
          console.log('Checkbox state: Activated');
        } else {
          console.log('Checkbox state: Deactivated');
        }

        if (cell.inputIsActive === true) {
          console.log('Input state: Active');
        } else {
          console.log('Input state: Disable');
        }
        console.log('  ');
        console.log('  ');
        cell.saveIsVisible = !cell.saveIsVisible;
        return cell
      },
      focusInput(cell) {
        this.$store.commit('focusInput', cell)
      },
      bottomVisible() {
        const scrollY = window.scrollY;
        const visible = document.documentElement.clientHeight;
        const pageHeight = document.documentElement.scrollHeight;
        const bottomOfPage = visible + scrollY >= pageHeight;
        return bottomOfPage || pageHeight < visible;
      },
      rightVisible() {
        const scrollX = window.scrollX;
        const visible = document.documentElement.clientWidth;
        const pageWidth = document.documentElement.scrollWidth;
        const rightOfPage = visible + scrollX >= pageWidth;
        return rightOfPage || pageWidth < visible;
      }
    },
    beforeCreate() {
      this.$store.commit('createArray')
    },
    created() {
      window.addEventListener('scroll', () => {
        this.scrolledBottom = this.bottomVisible();
        this.scrolledRight = this.rightVisible()
      });
    },
    components: {
      appHorizontalRuler: HorizontalRuler,
      appVerticalRuler: VerticalRuler
    }
  }
</script>

<style scoped>
  .wrapper {
    display: flex;
  }

  .grid-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
  }

  .grid-list__item {
    max-width: 141px;
    width: 100%;
    margin: 5px;
    display: flex;
    align-items: center;
  }

  .grid-list__item__input {
    max-width: 50px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .grid-list__item__button {
    width: 0;
    opacity: 0;
    visibility: hidden;
  }

  .active {
    margin: 0 10px;
    max-width: 50px;
    width: 100%;
    opacity: 1;
    visibility: visible;
  }
</style>
