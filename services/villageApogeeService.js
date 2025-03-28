import axios from "axios";
import { API_VILLAGE_APOGEE_URL } from "@/utils/constants"

export const getApogeeVillage = async (villageId) => {
    const response = await axios.get(`${API_VILLAGE_APOGEE_URL}/apogee/${villageId}`);
    return response.data;
  };
  
  export const createApogeeVillage = async (villageId, apogeeId) => {
    const response = await axios.post(`${API_VILLAGE_APOGEE_URL}/apogee/create`, { villageId, apogeeId });
    return response.data;
  };
  