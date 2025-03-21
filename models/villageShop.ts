import { Village } from "@/models/village";
import { VillageShopItem } from "@/models/villageShopItem";

export interface VillageShop {
    id: number;
    village?: Village;
    villageId?: number;
    villageShopItems: VillageShopItem[];
  }
  