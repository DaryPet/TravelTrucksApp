import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    location: "",
    vehicleType: "",
    equipment: [],
  },
  reducers: {
    setLocation(state, action) {
      state.location = action.payload;
    },
    setVehicleType(state, action) {
      state.vehicleType = action.payload;
    },
    toggleEquipment(state, action) {
      if (state.equipment.includes(action.payload)) {
        state.equipment = state.equipment.filter(
          (item) => item !== action.payload
        );
      } else {
        state.equipment.push(action.payload);
      }
    },
    resetFilters(state) {
      state.location = "";
      state.vehicleType = "";
      state.equipment = [];
    },
  },
});

export const { setLocation, setVehicleType, toggleEquipment, resetFilters } =
  filtersSlice.actions;

export default filtersSlice.reducer;
