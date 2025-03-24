import { Save } from "@/models/save";
import { Village } from "./village";

export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  village: Village[];
  activeVillage: Village | null;
  saves: Save[];
}