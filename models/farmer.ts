import { VillageFarmer } from "@/models/villageFarmer";

export interface Farmer {
    id: number;
    name: string;
    description: string;
    baseResourcePerSecond: number;
    quality: number;
    VillageFarmer?: VillageFarmer;
  }