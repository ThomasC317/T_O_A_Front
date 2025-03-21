import { Stat } from "@/models/stat";
import { Village } from "@/models/village";

export interface Skill {
    id: number;
    village?: Village;
    villageId?: number;
    stat?: Stat;
    statId?: number;
    assignedPoints: number;
  }