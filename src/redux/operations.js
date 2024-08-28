import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { fetchCampersAPI } from "../services/api.js";
// import { fetchCampersById } from "./camperSlice.js";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";

// export const fetchCampers = createAsyncThunk(
//   "campers/fetchAll",
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.get("/");
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const fetchCampers = createAsyncThunk(
//   "campers/fetchCampers",
//   async () => {
//     const response = await axios.get(
//       "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers"
//     );
//     console.log(response.data);
//     console.log("hahaha");
//     return response.data;
//   }
// );
export const fetchCampers = createAsyncThunk(
  "campers/fetchCampers",
  async (_, thunkAPI) => {
    try {
      const data = await fetchCampersAPI();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const fetchCampersById = createAsyncThunk(
//   "campers/fetchById",
//   async (id, thunkAPI) => {
//     try {
//       const response = await axios.get(`${baseURL}/${id}`);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
