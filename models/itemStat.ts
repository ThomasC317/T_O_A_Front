import { Item } from "@/models/item";
import { Stat } from "@/models/stat";

export interface ItemStat {
  id: number;
  item?: Item;
  itemId?: number;
  stat?: Stat;
  statId?: number;
  value: number;
}