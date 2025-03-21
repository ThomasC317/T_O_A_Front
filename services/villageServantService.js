import axios from "axios";

const API_URL = "http://localhost:5000/api/village"; // Mets l'URL de ton back

export const getVillageServants = async (villageId) => {
    const response = await axios.get(`${API_URL}/servants/${villageId}`);
    return response.data;
  };
  
  export const createVillageServant = async (villageId, servantId) => {
    const response = await axios.post(`${API_URL}/servants/create`, { villageId, servantId });
    return response.data;
  };
  