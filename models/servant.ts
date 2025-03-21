import { ServantStat } from "@/models/servantStat";
import { VillageServant } from "@/models/villageServant";

export interface Servant {
    id: number;
    name: string;
    description: string;
    quality: number;
    VillageServant?: VillageServant;
    ServantStat?: ServantStat;
  }