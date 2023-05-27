import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  countryDetails: {},
  isLoading: false,
  error: '',
};

export const fetchCountryDetails = createAsyncThunk(
  'details/fetchCountryDetails',
  async (country, { rejectWithValue }) => {
    const baseURL = `https://disease.sh/v3/covid-19/countries/${country}?strict=true`;
    try {
      const response = await fetch(baseURL);
      if (!response.ok) {
        const rejectedResponse = await response.json();
        return rejectWithValue(
          rejectedResponse.message || 'Something went wrong',
        );
      }
      const responseJSON = await response.json();
      return responseJSON;
    } catch (err) {
      return rejectWithValue(err.message || 'Something went wrong');
    }
  },
);
const detailsSlice = createSlice({
  name: 'details',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountryDetails.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = '';
        state.countryDetails = payload || {};
      })
      .addCase(fetchCountryDetails.pending, (state) => {
        state.isLoading = true;
        state.error = '';
        state.countryDetails = {};
      })
      .addCase(fetchCountryDetails.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.countryDetails = {};
        state.error = payload;
      });
  },
});

export const detailsSelector = (state) => state.countryDetails;
export default detailsSlice.reducer;
