import { Farmer } from "@/models/farmer";
import { ItemStat } from "@/models/itemStat";
import { Village } from "@/models/village";
import { VillageFarmerVillageItem } from "@/models/villageFarmervillageItem";

export interface VillageFarmer {
    id: number;
    village?: Village;
    villageId?: number;
    farmer?: Farmer;
    farmerId?: number;
    totalResourceGenerated: number;
    isActive: boolean;
    level: number;
    quality: number;
    nextUpgradeCost: number;
    resourcePerSecond: number;
    VillageFarmerVillageItem?: VillageFarmerVillageItem;
    ItemStat?: ItemStat;
  }