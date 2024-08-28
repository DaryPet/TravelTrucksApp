import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers } from "./operations.js";
// import { selectFilters } from "./filterSlice.js";

const camperSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }),
  // .addCase(fetchCampersById.pending, (state) => {
  //   state.loading = true;
  //   state.error = null;
  // }),
  // .addCase(fetchCampersById.fulfilled, (state, action) => {
  //   const camperIndex = state.items.findIndex(
  //     (e) => e.id === action.payload.id
  //   );
  //   if (camperIndex > -1) {
  //     state.items[camperIndex] = action.payload;
  //   }
  //   state.loading = false;
  // })
  // .addCase(fetchCampersById.rejected, (state, action) => {
  //   state.loading = false;
  //   state.error = action.payload;
  // }),
});

export const selectCampers = (state) => {
  state.campers.items;
};
export const selectLoading = (state) => {
  state.campers.loading;
};

export const selectError = (state) => state.campers.error;

export default camperSlice.reducer;
