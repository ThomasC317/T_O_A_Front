import axios from "axios";

const API_URL = "http://localhost:5000/api/villages/"

export const getVillage = async (villageId) => {
    const response = await axios.get(`${API_URL}`,{villageId});
    return response.data;
  };
  
  export const createVillage = async (villageName, saveId) => {
    const response = await axios.post(`${API_URL}/create`, { villageName, saveId });
    return response.data;
  };
  
  export const updateResource = async (villageId, newResource) => {
    const response = await axios.put(`${API_URL}/update-resource`, { villageId, newResource });
    return response.data;
  };
  
  export const updateResourcePerSecond = async (villageId, newResourcePerSecond) => {
    const response = await axios.put(`${API_URL}/update-resource-per-second`, { villageId, newResourcePerSecond });
    return response.data;
  };
  
  export const updateRemainingPoints = async (villageId, pointsToAdd) => {
    const response = await axios.put(`${API_URL}/update-remaining-points`, { villageId, pointsToAdd });
    return response.data;
  };
  
  export const updateLevel = async (villageId) => {
    const response = await axios.put(`${API_URL}/update-level/${villageId}`);
    return response.data;
  };
