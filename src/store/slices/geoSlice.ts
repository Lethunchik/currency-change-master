import { createSlice } from "@reduxjs/toolkit";




const initialState: {userLocation : string} = {
  userLocation: "",
};

export const geoSliceReducer = createSlice({
  name: "geolocation",
  initialState,
  reducers: {
    setCurrentLocation(state, action) {
      state.userLocation = action.payload;
    },
  },
});

export const { setCurrentLocation } = geoSliceReducer.actions;

export default geoSliceReducer.reducer;
