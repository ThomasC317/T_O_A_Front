import { Farmer } from "@/models/farmer";
import { ItemStat } from "@/models/itemStat";
import { Village } from "@/models/village";
import { VillageFarmerVillageItem } from "@/models/villageFarmervillageItem";

export interface VillageFarmer {
    id: number;
    name: string;
    description: string;
    baseResourcePerSecond: number;
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