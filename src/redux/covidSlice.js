import { createSlice } from "@reduxjs/toolkit";

const intialState = {
  isLoading: true,
  error: null,
  data: null,
};
const covidSlice = createSlice({
  name: "covid",
  intialState,
  reducers: {},
  extraReducer: () => {},
});

export default covidSlice.reducers;
