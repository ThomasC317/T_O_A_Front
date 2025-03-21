import axios from "axios";

const API_URL = "http://localhost:5000/api/village"; // Mets l'URL de ton back

export const getApogeeVillage = async (villageId) => {
    const response = await axios.get(`${API_URL}/apogee/${villageId}`);
    return response.data;
  };
  
  export const createApogeeVillage = async (villageId, apogeeId) => {
    const response = await axios.post(`${API_URL}/apogee/create`, { villageId, apogeeId });
    return response.data;
  };
  