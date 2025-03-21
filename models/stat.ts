import { ServantStat } from "@/models/servantStat";
import { Skill } from "@/models/skill";

export interface Stat {
    id: number;
    name: string;
    description: string;
    Skill?: Skill;
    ServantStat?: ServantStat;
  }