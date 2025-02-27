import { GameStats } from "@/utils/GameStats";
import  {GameQualities} from "@/utils/GameQualities";
// Define action types
export enum FarmerActionTypes {
    SET_FARMER_RESOURCE_PER_SECOND = "SET_FARMER_RESOURCE_PER_SECOND",
    SET_FARMER_IS_ACTIVE = "SET_FARMER_IS_ACTIVE",
    SET_FARMER_LEVEL = "SET_FARMER_LEVEL",
    SET_FARMER_MAX_LEVEL= "SET_FARMER_MAX_LEVEL",
    SET_FARMER_TOTAL_RESOURCE= "SET_FARMER_TOTAL_RESOURCE",
    ADD_FARMER = "ADD_FARMER",
    SET_NEXT_UPGRADE_COST= "SET_NEXT_UPGRADE_COST",
    SET_TOTAL_FARMER_COUNT = "SET_TOTAL_FARMER_COUNT",
    SET_TOTAL_SERVANT_COUNT = "SET_TOTAL_SERVANT_COUNT",
    ADD_SERVANT = "ADD_SERVANT",
    RESET_FARMERS_AND_SERVANTS = "RESET_FARMERS_AND_SERVANTS",
    SET_SERVANT_STATS_MULTIPLIER = "SET_SERVANT_STATS_MULTIPLIER"
  }

export interface Farmer {
    id: number;
    name: string;
    bonus: number;
    resourcePerSecond: number;
    baseResourcePerSecond:number;
    totalResourcesGenerated: number;
    isActive: boolean;
    quality: GameQualities;
    level: number;
    baseResourceForUpgrade:number;
    resourceUpgradeFactor:number;
    nextUpgradeCost:number;
    buffedStats:GameStats | null;
    description: string;
    value:number;
  }

  export interface Servant {
    id: number;
    name: string;
    quality: GameQualities;
    stats:GameStats | null;
    description: string;
    value:number;
  }
  
  export interface FarmerStats {
    farmers: Farmer[];
    servants: Servant[];
    totalFarmers: number;
    totalServants : number;
    totalResourcesGenerated: number;
    farmersMaxLevel : number; 
    servantStatsMultiplier : number;
  }

  interface SetResourcePerSecondAction {
    type: FarmerActionTypes.SET_FARMER_RESOURCE_PER_SECOND;
    payload: {
      id: number;
      resourcePerSecond: number;
  };
  }

  interface SetIsActiveAction {
    type: FarmerActionTypes.SET_FARMER_IS_ACTIVE;
    payload: {
      id: number;
      isActive: boolean;
  };
  }

  
  interface SetLevelAction {
    type: FarmerActionTypes.SET_FARMER_LEVEL;
    payload: {
      id: number;
      level: number;
  };
  }

  interface SetMaxLevelAction {
    type: FarmerActionTypes.SET_FARMER_MAX_LEVEL;
    payload: number;
}

interface SetTotalGeneratedResourceAction {
    type: FarmerActionTypes.SET_FARMER_TOTAL_RESOURCE;
    payload: {
        id: number;
        totalResource: number;
    };
}

interface AddFarmerAction {
  type: FarmerActionTypes.ADD_FARMER;
  payload: Farmer;
}

interface SetNextUpgradeCostAction {
  type: FarmerActionTypes.SET_NEXT_UPGRADE_COST;
  payload: {
      id: number;
      nextUpgradeCost: number;
  };
}


interface AddServantAction {
  type: FarmerActionTypes.ADD_SERVANT;
  payload: Servant;
}

interface SetTotalFarmersCountAction {
  type: FarmerActionTypes.SET_TOTAL_FARMER_COUNT;
  payload: number;
}

interface SetTotalServantsCountAction {
  type: FarmerActionTypes.SET_TOTAL_SERVANT_COUNT;
  payload: number;
}

interface ResetFarmersAndServantsAction {
  type: FarmerActionTypes.RESET_FARMERS_AND_SERVANTS;
}

interface SetServantStatsMultiplierAction {
  type: FarmerActionTypes.SET_SERVANT_STATS_MULTIPLIER;
  payload: number;
}


  // Combine action types
export type FarmerAction =
| SetResourcePerSecondAction
| SetIsActiveAction
| SetLevelAction
| SetMaxLevelAction
| SetTotalGeneratedResourceAction
| AddFarmerAction
| SetNextUpgradeCostAction
| AddServantAction 
| SetTotalFarmersCountAction
| SetTotalServantsCountAction
| ResetFarmersAndServantsAction
| SetServantStatsMultiplierAction;

  // Define the initial state and the reducer
  const farmerReducer = (
    state: FarmerStats,
    action: FarmerAction
  ): FarmerStats => {
    switch (action.type) {
      case FarmerActionTypes.SET_FARMER_RESOURCE_PER_SECOND: {
        const { id, resourcePerSecond } = action.payload;
        return {
          ...state,
          farmers: state.farmers.map(farmer =>
            farmer.id === id ? { ...farmer, resourcePerSecond: farmer.resourcePerSecond + resourcePerSecond } : farmer
          ),
        };
      }
      case FarmerActionTypes.SET_FARMER_IS_ACTIVE: {
        const { id, isActive } = action.payload;
        return {
          ...state,
          farmers: state.farmers.map(farmer =>
            farmer.id === id ? { ...farmer, isActive } : farmer
          ),
        };
      }
      case FarmerActionTypes.SET_FARMER_LEVEL: {
        console.log("level up !!!!")
        const { id, level } = action.payload;
        return {
          ...state,
          farmers: state.farmers.map(farmer =>
            farmer.id === id ? { ...farmer, level: farmer.level + level } : farmer
          ),
        };
      }
      case FarmerActionTypes.SET_FARMER_MAX_LEVEL: {
        return {
          ...state,
          farmersMaxLevel: state.farmersMaxLevel + action.payload
        };
      }
      case FarmerActionTypes.SET_FARMER_TOTAL_RESOURCE: {
        const { id, totalResource } = action.payload;
        return {
          ...state,
          farmers: state.farmers.map(farmer =>
            farmer.id === id ? { ...farmer, totalResourcesGenerated: farmer.totalResourcesGenerated + totalResource } : farmer
          ),
        };
      }
      case FarmerActionTypes.ADD_FARMER: {
        const newFarmer = action.payload;
        return {
          ...state,
          farmers: [...state.farmers, newFarmer],
          totalFarmers: state.totalFarmers + 1,
        };
      }

      case FarmerActionTypes.SET_NEXT_UPGRADE_COST: {

        const { id, nextUpgradeCost } = action.payload;
        return {
          ...state,
          farmers: state.farmers.map(farmer =>
            farmer.id === id ? { ...farmer, nextUpgradeCost: nextUpgradeCost } : farmer
          ),
        };
      }
      case FarmerActionTypes.ADD_SERVANT: {
        const newServant = action.payload;
        return {
          ...state,
          servants: [...state.servants, newServant],
          totalServants: state.totalServants + 1,
        };
      }
      case FarmerActionTypes.SET_TOTAL_FARMER_COUNT: {
        return {
          ...state,
          totalFarmers: action.payload
        };
      }
      case FarmerActionTypes.SET_TOTAL_SERVANT_COUNT: {
        return {
          ...state,
          totalServants: action.payload
        };
      }
      case FarmerActionTypes.RESET_FARMERS_AND_SERVANTS: {
        return {
          ...state,
          totalServants: 0,
          totalFarmers: 0,
          farmers:[],
          servants:[]
        };
      }
      case FarmerActionTypes.SET_SERVANT_STATS_MULTIPLIER: {
        return {
          ...state,
          servantStatsMultiplier: state.servantStatsMultiplier + action.payload
        };
      }
      default:
        return state;
    }
  };
  
  export default farmerReducer;
  