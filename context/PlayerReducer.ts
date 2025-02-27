import { GameStats } from "@/utils/GameStats";

// Define action types
export enum PlayerActionTypes {
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
  SET_APOGEE_LEVEL = "SET_APOGEE_LEVEL"
}

export interface PlayerStats {
    xp: number;
    level: number;
    resource: number;
    totalResource: number;
    passiveResource: number;
    onclickResource: number;
    requiredXpForLevelUpMultiplier: number;
    requiredXpForLevelUp: number;
    stats: GameStats;
    criticalChances: number;
    shopReduction: number;
    farmerRenderBonus: number;
    xpRenderBonus: number;
    apogeeLevel:number;
  }
  
  
interface SetXpAction {
    type: PlayerActionTypes.SET_XP;
    payload: number;
  }
  
  interface SetLevelAction {
    type: PlayerActionTypes.SET_LEVEL;
    payload: number;
  }
  
  interface UpdateResourceAction {
    type: PlayerActionTypes.UPDATE_RESOURCE;
    payload: number;
  }
  
  interface SetTotalResourceAction {
    type: PlayerActionTypes.SET_TOTAL_RESOURCE;
    payload: number;
  }
  
  interface SetPassiveResourceAction {
    type: PlayerActionTypes.SET_PASSIVE_RESOURCE;
    payload: number;
  }
  
  interface SetOnclickResourceAction {
    type: PlayerActionTypes.SET_ONCLICK_RESOURCE;
    payload: number;
  }
  
  interface SetSkillReloadTimeAction {
    type: PlayerActionTypes.SET_SKILL_RELOAD_TIME;
    payload: {
      id: number;
      reloadTime: number;
    };
  }
  
  interface SetSkillDisplayedReloadTimeAction {
    type: PlayerActionTypes.SET_SKILL_DISPLAYED_RELOAD_TIME;
    payload: {
      id: number;
      reloadTime: number;
    };
  }
  
  interface SetSkillDisplayedDurationTimeAction {
    type: PlayerActionTypes.SET_SKILL_DISPLAYED_DURATION_TIME;
    payload: {
      id: number;
      durationTime: number;
    };
  }
  
  interface SetSkillDurationTimeAction {
    type: PlayerActionTypes.SET_SKILL_DURATION_TIME;
    payload: {
      id: number;
      durationTime: number;
    };
  }
  
  interface SetSkillIsActiveAction {
    type: PlayerActionTypes.SET_SKILL_IS_ACTIVE;
    payload: {
      id: number;
      isActive: boolean;
    };
  }
  
  interface SetSkillRemainingTimeAction {
    type: PlayerActionTypes.SET_SKILL_REMAINING_TIME;
    payload: {
      id: number;
      remainingTime: number;
    };
  }
  
  interface SetXpForNextLevelAction {
    type: PlayerActionTypes.SET_XP_FOR_LEVEL_UP;
    payload: number;
  }
  
  interface SetPlayerStatsAction {
    type: PlayerActionTypes.SET_PLAYER_STATS;
    payload: {
      stats: Partial<GameStats>; // Allows updating specific stats
      operation: "add" | "remove"; // Specifies the operation to perform
    };
  }
  
  interface SetCriticalChancesAction {
    type: PlayerActionTypes.SET_CRITICAL_CHANCES;
    payload: number;
  }
  
  interface SetShopReductionAction {
    type: PlayerActionTypes.SET_SHOP_REDUCTION;
    payload: number;
  }
  
  interface SetFarmerRenderBonusAction {
    type: PlayerActionTypes.SET_FARMER_RENDER_BONUS;
    payload: number;
  }
  
  interface SetXpRenderBonusAction {
    type: PlayerActionTypes.SET_XP_RENDER_BONUS;
    payload: number;
  }
  
  interface SetApogeeLevelAction {
    type: PlayerActionTypes.SET_APOGEE_LEVEL;
    payload: number;
  }
  
  // Combine action types
  export type PlayerAction =
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
    | SetApogeeLevelAction;
  
  // Define the initial state and the reducer
  const playerReducer = (
    state: PlayerStats,
    action: PlayerAction
  ): PlayerStats => {
    switch (action.type) {
      case PlayerActionTypes.SET_XP:
        return { ...state, xp: state.xp + action.payload };
      case PlayerActionTypes.SET_LEVEL:
        return { ...state, level: state.level + action.payload };
      case PlayerActionTypes.UPDATE_RESOURCE:
        return { ...state, resource: state.resource + action.payload };
      case PlayerActionTypes.SET_TOTAL_RESOURCE:
        return { ...state, totalResource: state.totalResource + action.payload };
      case PlayerActionTypes.SET_PASSIVE_RESOURCE:
        return {
          ...state,
          passiveResource: action.payload,
        };
        case PlayerActionTypes.SET_PLAYER_STATS: {
          console.log(action.payload)
          const { stats, operation } = action.payload;
          return {
            ...state,
            stats: Object.keys(stats).reduce(
              (updatedStats, key) => {
                const statValue = stats[key];
                console.log(statValue)
                if (operation === "add") {
                  // Add the stat value to the existing stat
                  updatedStats[key] = (updatedStats[key] || 0) + statValue;
                } else if (operation === "remove") {
                  // Subtract the stat value from the existing stat
                  updatedStats[key] = (updatedStats[key] || 0) - statValue;
                }
    
                return updatedStats;
              },
              { ...state.stats }
            ),
          };
        }
      case PlayerActionTypes.SET_XP_FOR_LEVEL_UP:
        return {
          ...state,
          requiredXpForLevelUp: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default playerReducer;
  