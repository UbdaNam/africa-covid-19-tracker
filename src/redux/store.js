import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from "./countries/countriesSlice";

const store = configureStore({
  reducer: {
    countries: countriesReducer,
  },
});

export default store;
