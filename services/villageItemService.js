import axios from "axios";

const API_URL = "http://localhost:5000/api/village"; // Mets l'URL de ton back

export const createVillageItem = async (villageId, itemId) => {
    const response = await axios.post(`${API_URL}/items/create`, { villageId, itemId });
    return response.data;
  };
  
  export const getVillageItems = async (villageId) => {
    const response = await axios.get(`${API_URL}/items/${villageId}`);
    return response.data;
  };