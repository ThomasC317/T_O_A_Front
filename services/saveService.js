import axios from "axios";

const API_URL = "http://localhost:5000/api/save"; // Adapte l'URL selon ton back

export const getSaves = async () => {
  const response = await axios.get(`${API_URL}/all`);
  return response.data;
};

export const getSave = async () => {
  const response = await axios.get(`${API_URL}/active`);
  return response.data;
};

export const createSave = async () => {
  const response = await axios.post(`${API_URL}/create`);
  return response.data;
};

export const removeSave = async (saveId) => {
  const response = await axios.delete(`${API_URL}/delete/${saveId}`);
  return response.data;
};

export const updateLastDisconnectDateForSave = async (saveId) => {
  const response = await axios.put(`${API_URL}/update-last-disconnect`, { saveId });
  return response.data;
};

export const updateIsActiveForSave = async (saveId, isActive) => {
  const response = await axios.put(`${API_URL}/update-is-active`, { saveId, isActive });
  return response.data;
};
