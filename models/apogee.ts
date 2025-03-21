import { Village } from "@/models/village";
import { VillageApogee } from "@/models/villageApogee";

export interface Apogee {
    id: number;
    maxResource: number;
    maxFarmersLevel: number;
    level: number;
    statMultiplier: number;
    Village: Village[];
    VillageApogee?: VillageApogee;
  }