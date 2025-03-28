import axios from "axios";
import { API_SAVE_URL } from "@/utils/constants"

export const getSaves = async () => {
  const response = await axios.get(`${API_SAVE_URL}/all`);
  return response.data;
};

export const getSave = async () => {
  const response = await axios.get(`${API_SAVE_URL}/active`);
  return response.data;
};

export const createSave = async () => {
  const response = await axios.post(`${API_SAVE_URL}/create`);
  return response.data;
};

export const removeSave = async (saveId) => {
  const response = await axios.delete(`${API_SAVE_URL}/delete/${saveId}`);
  return response.data;
};

export const updateLastDisconnectDateForSave = async (saveId) => {
  const response = await axios.put(`${API_SAVE_URL}/update-last-disconnect`, { saveId });
  return response.data;
};

export const updateIsActiveForSave = async (saveId, isActive) => {
  const response = await axios.put(`${API_SAVE_URL}/update-is-active`, { saveId, isActive });
  return response.data;
};
