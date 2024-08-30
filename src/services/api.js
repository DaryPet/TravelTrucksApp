import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";

export const fetchCampersAPI = async () => {
  const response = await axios.get("/");
  return response.data;
};

export const fetchCamperById = async (id) => {
  const response = await axios.get(`/${id}`);
  return response.data;
};

// export async function fetchFeatures(id) {
//   const response = await axios.get(`/${id})/equipmet`);
//   console.log(response);
//   return response.data;
// }
