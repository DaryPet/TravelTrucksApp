import { configureStore } from "@reduxjs/toolkit";
import campersReducer from "./camperSlice";
import filtersReducer from "./filterSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const filtersPersistConfig = {
  key: "filters",
  storage,
};

const persistedFiltersReducer = persistReducer(
  filtersPersistConfig,
  filtersReducer
);

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    filters: persistedFiltersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);