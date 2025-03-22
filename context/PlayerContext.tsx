"use client"
import React, { createContext, useReducer, useContext, ReactNode } from 'react';
import { PlayerActionTypes, PlayerAction } from './PlayerReducer';
import { Farmer, FarmerAction, FarmerActionTypes, Servant } from './FarmerReducer';
import { CombinedState, rootReducer } from './CombinedReducer';
import { GameStats } from '@/utils/GameStats';
import { GameItem, ItemActionTypes } from './ItemReducer';
import { ShopActionTypes } from './ShopReducer';
import { TalentActionTypes } from './TalentReducer';
import { updateLevel, updateResource, updateResourcePerSecond } from '@/services/villageService';
import { createVillageFarmer, setVillageFarmerIsActive, setVillageFarmerLevel } from '@/services/villageFarmerService'
import { createVillageServant} from '@/services/villageServantService'
import {createApogeeVillage} from '@/services/villageApogeeService'

interface PlayerContextType {
    state: CombinedState;
    dispatch: React.Dispatch<PlayerAction | FarmerAction>;
  }

  const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

  const initialState: CombinedState = {
    playerStats: {
      xp: 0,
      level: 1,
      resource: 0,
      totalResource: 0,
      passiveResource: 1,
      onclickResource: 1,
      requiredXpForLevelUpMultiplier: 1.1,
      apogeeLevel:1,
      maxResource: 50000,
      requiredXpForLevelUp:100,
      stats: {
        strength: 1, //basic on click resource
        agility: 0,
        intelligence: 1, //basic passive resource
        stamina: 0,
        charisma: 0,
        criticalChances: 0,
        motivation: 0,
        concentration: 0,
      } as GameStats,
      criticalChances:0,
    shopReduction:0,
    farmerRenderBonus: 0,
    xpRenderBonus:0
    },
    farmerStats: {
      servants: [],
      farmers: [],
      totalFarmers: 4,
      totalServants:0,
      totalResourcesGenerated: 0,
      farmersMaxLevel:40,
      servantStatsMultiplier : 1,
    },
    gameItem: {
      items: [],
      totalItems: 0
    },
    shopState: {
      tools: [],
      armors: [],
      farmers: [],
      servants: [],
      displayedFarmers:[],
      displayedServants: [],
      id: 0,
      name: "kaaris",
      remainingTime: 1
    },
    talentState: {
      stats: {
        strength: 0, 
        agility: 0,
        intelligence: 0, 
        stamina: 0,
        charisma: 0,
        criticalChances: 0,
        motivation: 0,
        concentration: 0,
      } as GameStats,
      statPoints:0
    }
  };

  
export const PlayerProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(rootReducer, initialState);
  
    return (
      <PlayerContext.Provider value={{ state, dispatch }}>
        {children}
      </PlayerContext.Provider>
    );
  };

  
export const usePlayer = () => {
    const context = useContext(PlayerContext);
    if (!context) {
      throw new Error('usePlayer must be used within a PlayerProvider');
    }
    return context;
  };

  
  // export const setXp = async(xp: number) => ({
  //   await 
  //   // type: PlayerActionTypes.SET_XP,
  //   // payload: xp,
  // });
  
  export const setLevel = () => {
    return async () => {
      await updateLevel(1)
    };
  };
  
  export const setResource = (amount: number) => {
    return async () => {
      await updateResource(amount)
    };
  };
  
  // export const setTotalResource = (total: number) => {

  // };
  
  export const SetPassiveResource = (resourcePerSecond: number) => {
    return async () => {
      await updateResourcePerSecond(resourcePerSecond)
    };
  };
  
  
  export const setFarmerIsActive = (id: number, isActive: boolean) => {
    return async () => {
      await setVillageFarmerIsActive(id,isActive)
    };
  };
  
  // export const setFarmerMaxLevel = (level: number) => ({
  //   type: FarmerActionTypes.SET_FARMER_MAX_LEVEL,
  //   payload: level,
  // });
  
  
  export const setFarmerLevel = (id: number, level: number) => {
    return async () => {
      await setVillageFarmerLevel(id,level);
    };
  };
  
  export const addFarmer = (farmer: Farmer) => {
    return async () => {
      await createVillageFarmer(1,farmer.id);
    };
  };
  
  // export const removeFarmer = (farmer: Farmer) => ({
  //   type: ShopActionTypes.REMOVE_FARMER,
  //   payload: farmer
  // });
  
  
  // export const removeServant = (servant: Servant) => ({
  //   type: ShopActionTypes.REMOVE_SERVANT,
  //   payload: servant
  // });
      
  // Action to set the stats of the item
  // export const setPlayerStats = (stats: GameStats,operation:string) => ({
  //   type: PlayerActionTypes.SET_PLAYER_STATS,
  //   payload: { stats,operation  },
  // });

  
  // // Action to add a new item
  // export const addItem = (newItem: GameItem) => ({
  //   type: ItemActionTypes.ADD_ITEM,
  //   payload: newItem,
  // });
    
  
  // export const SetStatsPoints = (points: number) => ({
  //   type: TalentActionTypes.SET_STATS_POINTS,
  //   payload: points,
  // });
  
  
  export const AddServant = (servant: Servant) => {
    return async () => {
      await createVillageServant(1, servant.id);
    };
  };
    
  export const SetApogeeLevel = (level:number) => {
    return async () => {
      await createApogeeVillage(1, level);
    };
  }