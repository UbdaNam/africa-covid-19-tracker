import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from "./countries/countriesSlice";
import detailsReducer from "./details/detailsSlice";

const store = configureStore({
  reducer: {
    countries: countriesReducer,
    countryDetails: detailsReducer,
  },
});

export default store;
