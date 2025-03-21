import { User } from "@/models/user";
import { Village } from "@/models/village";

export interface Save {
    id: number;
    user: User;
    userId: number;
    village?: Village;
    villageId?: number;
    isActive: boolean;
    lastDisconnectDate: Date;
  }