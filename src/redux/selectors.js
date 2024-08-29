import { createSelector } from "reselect";

export const selectCampers = createSelector(
  (state) => state.campers.campers,
  (campers) => campers.items || []
);
export const selectCampersLoading = (state) => state.campers.loading;
export const selectCampersError = (state) => state.campers.error;
