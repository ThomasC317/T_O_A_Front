import axios from "axios";
import { API_VILLAGE_URL } from "@/utils/constants"

export const getVillage = async (villageId) => {
    const response = await axios.get(`${API_VILLAGE_URL}/${villageId}`);
    return response.data;
  };
  
  export const createVillage = async (villageName, saveId) => {
    const response = await axios.post(`${API_VILLAGE_URL}/create`, { villageName, saveId });
    return response.data;
  };
  
  export const updateResource = async (villageId, newResource) => {
    try {
      console.log("Appel API avec", villageId, newResource);
      const response = await axios.put(`${API_VILLAGE_URL}/${villageId}/resource`, { newResource });
      return response.data;
    } catch (error) {
      console.error("Erreur lors de l'update des ressources :", error.response?.data || error.message);
      throw error;
    }
  };
  
  export const updateResourcePerSecond = async (villageId, newResourcePerSecond) => {
    const response = await axios.put(`${API_VILLAGE_URL}/update-resource-per-second`, { villageId, newResourcePerSecond });
    return response.data;
  };
  
  export const updateRemainingPoints = async (villageId, pointsToAdd) => {
    const response = await axios.put(`${API_VILLAGE_URL}/update-remaining-points`, { villageId, pointsToAdd });
    return response.data;
  };
  
  export const updateLevel = async (villageId) => {
    const response = await axios.put(`${API_VILLAGE_URL}/update-level/${villageId}`);
    return response.data;
  };
