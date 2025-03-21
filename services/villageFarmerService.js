import axios from "axios";

const API_URL = "http://localhost:5000/api/village"; // Mets l'URL de ton back

export const getVillageFarmers = async (villageId) => {
  const response = await axios.get(`${API_URL}/farmers/${villageId}`);
  return response.data;
};

export const createVillageFarmer = async (villageId, farmerId) => {
  const response = await axios.post(`${API_URL}/farmers/create`, { villageId, farmerId });
  return response.data;
};

export const setVillageFarmerIsActive = async (villageFarmerId, isActive) => {
  const response = await axios.put(`${API_URL}/farmers/active/${villageFarmerId}`, { isActive });
  return response.data;
};

export const setVillageFarmerLevel = async (villageFarmerId, nextUpgradeCost, newResourcePerSecond) => {
  const response = await axios.put(`${API_URL}/farmers/level/${villageFarmerId}`, { nextUpgradeCost, newResourcePerSecond });
  return response.data;
};


