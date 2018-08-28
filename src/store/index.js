import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const DEFAULT_CELL = {
  checkBoxActive: false,
  inputIsActive: true,
  saveIsVisible: false,
  inputValue: '',
};

export default new Vuex.Store({
  state: {
    cellData: [
      {
        cellItemArray: []
      },
    ]
  },
  mutations: {
    toggle(state, payload) {
      payload.checkBoxActive = !payload.checkBoxActive;
      payload.inputIsActive = !payload.inputIsActive;
      payload.saveIsVisible = !payload.saveIsVisible;
    },
    focusInput(state, payload) {
      payload.saveIsVisible = payload.inputValue !== '';
    },
    createArray(state) {
      const clientHeightItem = document.documentElement.clientHeight / 31;
      const verticalLength = Math.ceil(clientHeightItem);
      const clientWidthItem = document.documentElement.clientWidth / 90;
      const horizontalLength = Math.ceil(clientWidthItem);
      while (state.cellData.length < verticalLength) {
        state.cellData.push({
          cellItemArray: [
            { ...DEFAULT_CELL }
          ]
        });
        state.cellData.forEach((item) => {
          while (item.cellItemArray.length < horizontalLength) {
            item.cellItemArray.push({ ...DEFAULT_CELL })
          }
        })
      }
    },
    addDataBottom(state) {
      if (state.cellData.length < 40001) {
        for (let v = 0; v < 10; v++) {
          state.cellData.push({
            cellItemArray: [
              { ...DEFAULT_CELL }
            ]
          });
          state.cellData.forEach((item) => {
            if (item.cellItemArray.length < state.cellData[0].cellItemArray.length) {
              for (let i = 0; i < state.cellData[0].cellItemArray.length; i++) {
                item.cellItemArray.push({ ...DEFAULT_CELL })
              }
            }
          });
        }
      }

    },
    addDataRight(state) {
      state.cellData.forEach((item) => {
        if (item.cellItemArray.length < 40001) {
          for (let i = 0; i <= 10; i++) {
            item.cellItemArray.push({ ...DEFAULT_CELL })
          }
        }
      })
    }
  }
})
