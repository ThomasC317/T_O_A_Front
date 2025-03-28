import axios from "axios";
import { API_VILLAGE_ITEM_URL } from "@/utils/constants"

export const createVillageItem = async (villageId, itemId) => {
    const response = await axios.post(`${API_VILLAGE_ITEM_URL}/create`, { villageId, itemId });
    return response.data;
  };
  
  export const getVillageItems = async (villageId) => {
    const response = await axios.get(`${API_VILLAGE_ITEM_URL}/${villageId}`);
    return response.data;
  };