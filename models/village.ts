import { Apogee } from "@/models/apogee";
import { Save } from "@/models/save";
import { Skill } from "@/models/skill";
import { VillageApogee } from "@/models/villageApogee";
import { VillageFarmer } from "@/models/villageFarmer";
import { VillageItem } from "@/models/villageItem";
import { VillageServant } from "@/models/villageServant";
import { VillageShop } from "@/models/villageShop";

export interface Village {
    id: number;
    name: string;
    save?: Save;
    level: number;
    resourcePerSecond: number;
    resource: number;
    totalResource: number;
    remainingSkillPoints: number;
    skills: Skill[];
    xp: number;
    requiredXpToLevelUp: number;
    apogee?: Apogee;
    villageServants: VillageServant[];
    villageFarmers: VillageFarmer[];
    villageItem: VillageItem[];
    villageShops: VillageShop[];
    apogeeId?: number;
    VillageApogee?: VillageApogee;
  }