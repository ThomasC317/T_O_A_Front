import axios from "axios";
import { API_VILLAGE_SERVANT_URL } from "@/utils/constants"

export const getVillageServants = async (villageId) => {
    const response = await axios.get(`${API_VILLAGE_SERVANT_URL}/${villageId}`);
    return response.data;
  };
  
  export const createVillageServant = async (villageId, servantId) => {
    const response = await axios.post(`${API_VILLAGE_SERVANT_URL}/create`, { villageId, servantId });
    return response.data;
  };
  