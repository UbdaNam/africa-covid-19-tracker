import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const baseURL =
  "https://restcountries.com/v3.1/region/africa?fields=name,flags";
const initialState = {
  countries: [],
  isLoading: false,
  error: "",
};

export const fetchCountries = createAsyncThunk(
  "countries/fetchCountries",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(baseURL);
      if (!response.ok) {
        rejectWithValue(response.statusText || "Something went wrong");
      }
      const responseJSON = await response.json();
      const data = responseJSON.sort((a, b) =>
        a.name.common.localeCompare(b.name.common)
      );
      return data;
    } catch (err) {
      rejectWithValue(err.message || "Something went wrong");
    }
  }
);
const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = "";
        state.countries = payload;
      })
      .addCase(fetchCountries.pending, (state) => {
        state.isLoading = true;
        state.error = "";
      })
      .addCase(fetchCountries.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const countriesSelector = (state) => state.countries;
export default countriesSlice.reducer;
