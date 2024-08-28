// src/services/api.js
import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";

// Пример базовой функции для выполнения GET-запросов
export const fetchCampersAPI = async () => {
  const response = await axios.get("/");
  console.log("Данные с сервера:", response.data);
  return response.data.items;
};
