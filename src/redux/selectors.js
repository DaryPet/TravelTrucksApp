// import { createSelector } from "@reduxjs/toolkit";
// import { selectCampers } from "./camperSlice";
// import { selectFilters } from "./filterSlice";

// export const selectCampers = (state) => state.campers.items;
// export const selectFavorites = (state) => state.campers.favorites;
// export const selectFilters = (state) => state.filters;

// export const selecteFiltredCampers = createSelector(
//   [selectCampers, selectFilters],

//   (campers, filters) => {
//     // console.log(campers);
//     // if (!Array.isArray(campers)) {
//     //   return [];
//     // }
//     return campers.filter((camper) => {
//       const matchesEquipment = filters.equipment.every((equipment) => {
//         return camper[equipment] === true;
//       });
//       const matchesType = filters.type ? camper.type === filters.type : true;
//       const matchesLocation = camper.location
//         .toLowerCase()
//         .includes(filters.location.toLowerCase());
//       return matchesEquipment && matchesType && matchesLocation;
//     });
//   }
// );

// src/redux/campers/selectors.js
export const selectCampers = (state) => state.campers.items;
export const selectCampersLoading = (state) => state.campers.loading;
export const selectCampersError = (state) => state.campers.error;
