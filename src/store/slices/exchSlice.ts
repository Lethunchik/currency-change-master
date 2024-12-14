import { createSlice } from "@reduxjs/toolkit";

interface IinitialState {
  inputCurrency: string;
  targetCurrency: string;
  currencyArray: Array<string>;
  amount: number;
  inputVal: number;
  targetVal: number;
}

const initialState: IinitialState = {
  inputCurrency: "USD",
  targetCurrency: "EUR",
  currencyArray: [],
  amount: 0,
  inputVal: 0,
  targetVal: 0,
};

export const exchSliceReducer = createSlice({
  name: "exch",
  initialState,
  reducers: {
    setInputCurrency(state, action) {
      state.inputCurrency = action.payload;
    },
    setTargetCurrency(state, action) {
      state.targetCurrency = action.payload;
    },
    setCurrency(state, action) {
      state.currencyArray = [...Object.keys(action.payload)];
    },
    switchCurrency(state) {
      [state.targetCurrency, state.inputCurrency] = [
        state.inputCurrency,
        state.targetCurrency,
      ];
    },
    setExch(state, action) {
      state.inputVal = action.payload;
    },
  },
});

export const {
  setCurrency,
  setInputCurrency,
  setTargetCurrency,
  switchCurrency,
  setExch,
} = exchSliceReducer.actions;

export default exchSliceReducer.reducer;
