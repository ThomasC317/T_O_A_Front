import { Village } from "@/models/village";
import { GameStats } from "@/utils/GameStats";

// Define action types
export enum VillageActionTypes {
  SET_VILLAGE= "SET_VILLAGE",
  SET_XP = "SET_XP",
  SET_LEVEL = "SET_LEVEL",
  UPDATE_RESOURCE = "UPDATE_RESOURCE",
  SET_TOTAL_RESOURCE = "SET_TOTAL_RESOURCE",
  SET_PASSIVE_RESOURCE = "SET_PASSIVE_RESOURCE",
  SET_ONCLICK_RESOURCE = "SET_ONCLICK_RESOURCE",
  SET_SKILL_RELOAD_TIME = "SET_SKILL_RELOAD_TIME",
  SET_SKILL_DISPLAYED_RELOAD_TIME = "SET_SKILL_DISPLAYED_RELOAD_TIME",
  SET_SKILL_DURATION_TIME = "SET_SKILL_DURATION_TIME",
  SET_SKILL_DISPLAYED_DURATION_TIME = "SET_SKILL_DISPLAYED_DURATION_TIME",
  SET_SKILL_IS_ACTIVE = "SET_SKILL_IS_ACTIVE",
  SET_SKILL_REMAINING_TIME = "SET_SKILL_REMAINING_TIME",
  SET_XP_FOR_LEVEL_UP = "SET_XP_FOR_LEVEL_UP",
  SET_PLAYER_STATS = "SET_PLAYER_STATS",
  SET_CRITICAL_CHANCES = "SET_CRITICAL_CHANCES",
  SET_SHOP_REDUCTION = "SET_SHOP_REDUCTION",
  SET_FARMER_RENDER_BONUS = "SET_FARMER_RENDER_BONUS",
  SET_XP_RENDER_BONUS = "SET_XP_RENDER_BONUS",
  SET_APOGEE_LEVEL = "SET_APOGEE_LEVEL",
  SET_MAX_RESOURCE = "SET_MAX_RESOURCE"
}

// export interface PlayerStats {
//     xp: number;
//     level: number;
//     resource: number;
//     totalResource: number;
//     passiveResource: number;
//     onclickResource: number;
//     requiredXpForLevelUpMultiplier: number;
//     requiredXpForLevelUp: number;
//     stats: GameStats;
//     criticalChances: number;
//     shopReduction: number;
//     farmerRenderBonus: number;
//     xpRenderBonus: number;
//     apogeeLevel:number;
//     maxResource: number;
//   }

//   export interface Village {

//   }

interface SetVillageAction {
  type: VillageActionTypes.SET_VILLAGE;
  payload: Village;
}
  
  
interface SetXpAction {
    type: VillageActionTypes.SET_XP;
    payload: number;
  }
  
  interface SetLevelAction {
    type: VillageActionTypes.SET_LEVEL;
    payload: number;
  }
  
  interface UpdateResourceAction {
    type: VillageActionTypes.UPDATE_RESOURCE;
    payload: number;
  }
  
  interface SetTotalResourceAction {
    type: VillageActionTypes.SET_TOTAL_RESOURCE;
    payload: number;
  }
  
  interface SetPassiveResourceAction {
    type: VillageActionTypes.SET_PASSIVE_RESOURCE;
    payload: number;
  }
  
  interface SetOnclickResourceAction {
    type: VillageActionTypes.SET_ONCLICK_RESOURCE;
    payload: number;
  }
  
  interface SetSkillReloadTimeAction {
    type: VillageActionTypes.SET_SKILL_RELOAD_TIME;
    payload: {
      id: number;
      reloadTime: number;
    };
  }
  
  interface SetSkillDisplayedReloadTimeAction {
    type: VillageActionTypes.SET_SKILL_DISPLAYED_RELOAD_TIME;
    payload: {
      id: number;
      reloadTime: number;
    };
  }
  
  interface SetSkillDisplayedDurationTimeAction {
    type: VillageActionTypes.SET_SKILL_DISPLAYED_DURATION_TIME;
    payload: {
      id: number;
      durationTime: number;
    };
  }
  
  interface SetSkillDurationTimeAction {
    type: VillageActionTypes.SET_SKILL_DURATION_TIME;
    payload: {
      id: number;
      durationTime: number;
    };
  }
  
  interface SetSkillIsActiveAction {
    type: VillageActionTypes.SET_SKILL_IS_ACTIVE;
    payload: {
      id: number;
      isActive: boolean;
    };
  }
  
  interface SetSkillRemainingTimeAction {
    type: VillageActionTypes.SET_SKILL_REMAINING_TIME;
    payload: {
      id: number;
      remainingTime: number;
    };
  }
  
  interface SetXpForNextLevelAction {
    type: VillageActionTypes.SET_XP_FOR_LEVEL_UP;
    payload: number;
  }
  
  interface SetPlayerStatsAction {
    type: VillageActionTypes.SET_PLAYER_STATS;
    payload: {
      stats: Partial<GameStats>; // Allows updating specific stats
      operation: "add" | "remove"; // Specifies the operation to perform
    };
  }
  
  interface SetCriticalChancesAction {
    type: VillageActionTypes.SET_CRITICAL_CHANCES;
    payload: number;
  }
  
  interface SetShopReductionAction {
    type: VillageActionTypes.SET_SHOP_REDUCTION;
    payload: number;
  }
  
  interface SetFarmerRenderBonusAction {
    type: VillageActionTypes.SET_FARMER_RENDER_BONUS;
    payload: number;
  }
  
  interface SetXpRenderBonusAction {
    type: VillageActionTypes.SET_XP_RENDER_BONUS;
    payload: number;
  }
  
  interface SetApogeeLevelAction {
    type: VillageActionTypes.SET_APOGEE_LEVEL;
    payload: number;
  }

  interface SetMaxResourceAction {
    type: VillageActionTypes.SET_MAX_RESOURCE;
    payload: number;
  }
  
  // Combine action types
  export type PlayerAction =
  SetVillageAction
    | SetXpAction
    | SetLevelAction
    | UpdateResourceAction
    | SetTotalResourceAction
    | SetPassiveResourceAction
    | SetOnclickResourceAction
    | SetSkillDisplayedReloadTimeAction
    | SetSkillReloadTimeAction
    | SetSkillDurationTimeAction
    | SetSkillDisplayedDurationTimeAction
    | SetSkillIsActiveAction
    | SetSkillRemainingTimeAction
    | SetXpForNextLevelAction
    | SetPlayerStatsAction
    | SetCriticalChancesAction
    | SetShopReductionAction
    | SetFarmerRenderBonusAction
    | SetXpRenderBonusAction
    | SetApogeeLevelAction
    | SetMaxResourceAction;
  
  // Define the initial state and the reducer
  const villageReducer = (
    state: Village,
    action: PlayerAction
  ): Village => {
    switch (action.type) {
      case VillageActionTypes.SET_VILLAGE: 
      console.log(action.payload)
        return {...state, ...action.payload}
      case VillageActionTypes.SET_XP:
        return { ...state, xp: state.xp + action.payload };
      case VillageActionTypes.SET_LEVEL:
        return { ...state, level: state.level + action.payload };
      case VillageActionTypes.UPDATE_RESOURCE:
        console.log("resurce update !!" +  action.payload)
        return { ...state, resource: state.resource + action.payload, totalResource: state.totalResource + action.payload };
      case VillageActionTypes.SET_TOTAL_RESOURCE:
        return { ...state, totalResource: state.totalResource + action.payload };
      case VillageActionTypes.SET_PASSIVE_RESOURCE:
        return {
          ...state,
          resourcePerSecond: action.payload,
        };
        // case PlayerActionTypes.SET_PLAYER_STATS: {
        //   console.log(action.payload)
        //   const { stats, operation } = action.payload;
        //   return {
        //     ...state,
        //     stats: Object.keys(stats).reduce(
        //       (updatedStats, key) => {
        //         const statValue = stats[key];
        //         console.log(statValue)
        //         if (operation === "add") {
        //           // Add the stat value to the existing stat
        //           updatedStats[key] = (updatedStats[key] || 0) + statValue;
        //         } else if (operation === "remove") {
        //           // Subtract the stat value from the existing stat
        //           updatedStats[key] = (updatedStats[key] || 0) - statValue;
        //         }
    
        //         return updatedStats;
        //       },
        //       { ...state.stats }
        //     ),
        //   };
        // }
        // case PlayerActionTypes.SET_APOGEE_LEVEL:
        //   return {
        //     ...state,
        //     apogeeLevel: state.apogeeLevel + action.payload,
        //   }
      // case PlayerActionTypes.SET_XP_FOR_LEVEL_UP:
      //   return {
      //     ...state,
      //     requiredXpForLevelUp: action.payload,
      //   };
      // case PlayerActionTypes.SET_MAX_RESOURCE: 
      //   return {
      //     ...state,
      //     maxResource: action.payload,
      //   }
      default:
        return state;
    }
  };
  
  export default villageReducer;
  