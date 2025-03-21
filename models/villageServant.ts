import { Servant } from "@/models/servant";
import { Village } from "@/models/village";

export interface VillageServant {
    id: number;
    village?: Village;
    villageId?: number;
    servant?: Servant;
    servantId?: number;
  }