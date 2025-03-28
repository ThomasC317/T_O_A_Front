import axios from "axios";
import { API_USER_URL } from "@/utils/constants"

export const getUsers = async () => {
  const response = await axios.get(`${API_USER_URL}/all`);
  return response.data;
};

export const createUser = async (username, email, password) => {
  const response = await axios.post(`${API_USER_URL}/create`, { username, email, password });
  return response.data;
};

export const removeUser = async (userId) => {
  const response = await axios.delete(`${API_USER_URL}/delete/${userId}`);
  return response.data;
};

export const updateUser = async (userId, username, email, password) => {
  const response = await axios.put(`${API_USER_URL}/update/${userId}`, { username, email, password });
  return response.data;
};
