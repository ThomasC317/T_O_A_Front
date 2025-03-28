import axios from "axios";
import { API_VILLAGE_FARMER_URL } from "@/utils/constants"

export const getVillageFarmers = async (villageId) => {
  const response = await axios.get(`${API_VILLAGE_FARMER_URL}/${villageId}`);
  return response.data;
};

export const createVillageFarmer = async (villageId, farmerId) => {
  const response = await axios.post(`${API_VILLAGE_FARMER_URL}/create`, { villageId, farmerId });
  return response.data;
};

export const setVillageFarmerIsActive = async (villageFarmerId, isActive) => {
  const response = await axios.put(`${API_VILLAGE_FARMER_URL}/active/${villageFarmerId}`, { isActive });
  return response.data;
};

export const setVillageFarmerLevel = async (villageFarmerId, nextUpgradeCost, newResourcePerSecond) => {
  const response = await axios.put(`${API_VILLAGE_FARMER_URL}/level/${villageFarmerId}`, { nextUpgradeCost, newResourcePerSecond });
  return response.data;
};


