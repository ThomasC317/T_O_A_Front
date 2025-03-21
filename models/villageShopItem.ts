import { Item } from "@/models/item";
import { VillageShop } from "@/models/villageShop";

export interface VillageShopItem {
    id: number;
    item?: Item;
    itemId?: number;
    villageShop?: VillageShop;
    villageShopId?: number;
  }