import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  country: "usa",
};

export const CountrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    selectCountry: (state, action) => {
      // console.log("selectCountry ran", action.payload);
      state.value = action.payload;
    },
  },
});

export const { selectCountry } = CountrySlice.actions;

export default CountrySlice.reducer;
