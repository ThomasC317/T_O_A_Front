import axios from "axios";

const API_URL = "http://localhost:5000/api/village"; // Mets l'URL de ton back

export const addSkillPoint = async (villageName, statId, level, assignedPoints) => {
  const response = await axios.put(`${API_URL}/add-skill-point`, { villageName, statId, level, assignedPoints });
  return response.data;
};