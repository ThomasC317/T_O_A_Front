import axios from "axios";
import { API_SKILL_URL } from "@/utils/constants"

export const addSkillPoint = async (villageName, statId, level, assignedPoints) => {
  const response = await axios.put(`${API_SKILL_URL}/add-skill-point`, { villageName, statId, level, assignedPoints });
  return response.data;
};