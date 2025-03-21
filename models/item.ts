import { VillageItem } from "@/models/villageItem";
import { VillageShopItem } from "@/models/villageShopItem";

export interface Item {
    id: number;
    name: string;
    description: string;
    value: number;
    icon: string;
    generalType: number;
    quality: number;
    type: number;
    VillageItem?: VillageItem;
    VillageShopItem?: VillageShopItem;
  }