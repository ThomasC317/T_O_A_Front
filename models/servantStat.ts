import { Servant } from "@/models/servant";
import { Stat } from "@/models/stat";

export interface ServantStat {
    id: number;
    servant?: Servant;
    servantId?: number;
    stat?: Stat;
    statId?: number;
    value: number;
  }