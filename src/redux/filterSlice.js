import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    location: "",
    type: "",
    equipment: [],
  },
  reducers: {
    changeLocation(state, action) {
      state.location = action.payload;
    },
    changeType(state, action) {
      state.type = action.payload;
    },
    toggleEquipment(state, action) {
      const equipment = action.payload;
      state.equipment = state.equipment.includes(equipment)
        ? state.equipment.filter((e) => e !== equipment)
        : [...state.equipment, equipment];
    },
    clearFilters(state) {
      state.location = "";
      state.type = "";
      state.equipment = [];
    },
  },
});

export const { changeLocation, changeType, toggleEquipment, clearFilters } =
  filterSlice.actions;
export const selectFilters = (state) => state.filters;

export default filterSlice.reducer;
