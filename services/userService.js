import axios from "axios";

const API_URL = "http://localhost:5000/api/users"; // Adapte l'URL selon ton back

export const getUsers = async () => {
  const response = await axios.get(`${API_URL}/all`);
  return response.data;
};

export const createUser = async (username, email, password) => {
  const response = await axios.post(`${API_URL}/create`, { username, email, password });
  return response.data;
};

export const removeUser = async (userId) => {
  const response = await axios.delete(`${API_URL}/delete/${userId}`);
  return response.data;
};

export const updateUser = async (userId, username, email, password) => {
  const response = await axios.put(`${API_URL}/update/${userId}`, { username, email, password });
  return response.data;
};
