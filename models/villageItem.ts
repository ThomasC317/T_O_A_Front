import { Item } from "@/models/item";
import { ItemStat } from "@/models/itemStat";
import { Village } from "@/models/village";
import { VillageFarmerVillageItem } from "@/models/villageFarmervillageItem";

export interface VillageItem {
    id: number;
    village?: Village;
    villageId?: number;
    item?: Item;
    itemId?: number;
    apogeeLevel: number;
    VillageFarmerVillageItem?: VillageFarmerVillageItem;
    ItemStat?: ItemStat;
  }