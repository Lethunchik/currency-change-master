import { configureStore } from "@reduxjs/toolkit";
import exchSliceReducer from "./slices/exchSlice";
import geoSliceReducer from "./slices/geoSlice";


const store = configureStore({
  reducer: {
    geo: geoSliceReducer,
    exch: exchSliceReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
