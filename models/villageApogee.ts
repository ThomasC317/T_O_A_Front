import { Apogee } from "@/models/apogee";
import { Village } from "@/models/village";

export interface VillageApogee {
    id: number;
    village?: Village;
    villageId?: number;
    apogee?: Apogee;
    apogeeId?: number;
  }