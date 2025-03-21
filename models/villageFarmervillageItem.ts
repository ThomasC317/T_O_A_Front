import { VillageFarmer } from "@/models/villageFarmer";
import { VillageItem } from "@/models/villageItem";

export interface VillageFarmerVillageItem {
    id: number;
    villageFarmer?: VillageFarmer;
    villageFarmerId?: number;
    villageItem?: VillageItem;
    villageItemId?: number;
  }
  