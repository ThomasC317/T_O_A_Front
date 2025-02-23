"use client"
import React, { createContext, useReducer, useContext, ReactNode } from 'react';
import { PlayerActionTypes, PlayerAction } from './PlayerReducer';
import { Farmer, FarmerAction, FarmerActionTypes, Servant } from './FarmerReducer';
import { CombinedState, rootReducer } from './CombinedReducer';
import { GameStats } from '@/utils/GameStats';


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

  
export const setXp = (xp: number) => ({
    type: PlayerActionTypes.SET_XP,
    payload: xp,
  });
  
  export const setLevel = (level: number) => ({
    type: PlayerActionTypes.SET_LEVEL,
    payload: level,
  });
  
  export const setResource = (amount: number) => ({
    type: PlayerActionTypes.UPDATE_RESOURCE,
    payload: amount,
  });
  
  export const setTotalResource = (total: number) => ({
    type: PlayerActionTypes.SET_TOTAL_RESOURCE,
    payload: total,
  });
  
  export const SetPassiveResource = (passive: number) => ({
    type: PlayerActionTypes.SET_PASSIVE_RESOURCE,
    payload: passive,
  });
  
  export const setOnclickResource = (onclick: number) => ({
    type: PlayerActionTypes.SET_ONCLICK_RESOURCE,
    payload: onclick,
  });
  
  export const SetSkillReloadTime = (id: number, reloadTime: number) => ({
      type: PlayerActionTypes.SET_SKILL_RELOAD_TIME,
      payload: {
        id,
        reloadTime
      }
    });
  
    export const SetSkillDisplayedReloadTime = (id: number, reloadTime: number) => ({
      type: PlayerActionTypes.SET_SKILL_DISPLAYED_RELOAD_TIME,
      payload: {
        id,
        reloadTime
      }
    });
  
    export const SetSkillDurationTime = (id: number, durationTime: number) => ({
      type: PlayerActionTypes.SET_SKILL_DURATION_TIME,
      payload: {
        id,
        durationTime
      }
    });
  
    export const SetSkillRemainingTime = (id: number, remainingTime: number) => ({
      type: PlayerActionTypes.SET_SKILL_DURATION_TIME,
      payload: {
        id,
        remainingTime
      }
    });
  
    export const SetSkillIsActive = (id: number, isActive: boolean) => ({
      type: PlayerActionTypes.SET_SKILL_IS_ACTIVE,
      payload: {
        id,
        isActive
      }
    });
  
  export const setFarmerResourcePerSecond = (id: number, resourcePerSecond: number) => ({
    type: FarmerActionTypes.SET_FARMER_RESOURCE_PER_SECOND,
    payload: { id, resourcePerSecond },
  });
  
  export const setFarmerIsActive = (id: number, isActive: boolean) => ({
    type: FarmerActionTypes.SET_FARMER_IS_ACTIVE,
    payload: { id, isActive },
  });
  
  export const setFarmerMaxLevel = (level: number) => ({
    type: FarmerActionTypes.SET_FARMER_MAX_LEVEL,
    payload: level,
  });
  
  
  export const setFarmerLevel = (id: number, level: number) => ({
    type: FarmerActionTypes.SET_FARMER_LEVEL,
    payload: { id, level },
  });
  
  export const addFarmer = (farmer: Farmer) => ({
    type: FarmerActionTypes.ADD_FARMER,
    payload: farmer
  });
    
  export const setNextUpgradeCost = (id: number, nextUpgradeCost: number) => ({
    type: FarmerActionTypes.SET_NEXT_UPGRADE_COST,
    payload: { id, nextUpgradeCost },
  });
  
  
  export const setXpForLevelUp = (nextUpgradeCost: number) => ({
    type: PlayerActionTypes.SET_XP_FOR_LEVEL_UP,
    payload: nextUpgradeCost ,
  });
   
  // Action to set the stats of the item
  export const setPlayerStats = (stats: GameStats,operation:string) => ({
    type: PlayerActionTypes.SET_PLAYER_STATS,
    payload: { stats,operation  },
  });
    
  export const setCriticalChance = (criticalChance: number) => ({
    type: PlayerActionTypes.SET_CRITICAL_CHANCES,
    payload: criticalChance,
  });
  
  export const setShopReduction = (shopReduction: number) => ({
    type: PlayerActionTypes.SET_SHOP_REDUCTION,
    payload: shopReduction,
  });
  
  export const setFarmerRenderBonus = (farmerRenderBonus: number) => ({
    type: PlayerActionTypes.SET_FARMER_RENDER_BONUS,
    payload: farmerRenderBonus,
  });
  
  export const setXpRenderBonus = (xpRenderBonus: number) => ({
    type: PlayerActionTypes.SET_XP_RENDER_BONUS,
    payload: xpRenderBonus,
  });
  
  export const SetServantIsActive = (id: number, isActive: boolean) => ({
    type: FarmerActionTypes.SET_FARMER_IS_ACTIVE,
    payload: {id,isActive},
  });
  
  export const AddServant = (servant: Servant) => ({
    type: FarmerActionTypes.ADD_SERVANT,
    payload: servant,
  });
  
  export const SetFarmerTotalCount = (count:number) => ({
    type: FarmerActionTypes.SET_TOTAL_FARMER_COUNT,
    payload: count,
  });
  
  export const SetServantTotalCount = (count:number) => ({
    type: FarmerActionTypes.SET_TOTAL_SERVANT_COUNT,
    payload: count,
  });
  
  export const SetApogeeLevel = (level:number) => ({
    type: PlayerActionTypes.SET_APOGEE_LEVEL,
    payload: level
  })
  
  export const ResetFarmersAndServants = () => ({
    type: FarmerActionTypes.RESET_FARMERS_AND_SERVANTS
  })
  
  export const SetServantStatsMultiplier = (statsMultiplier:number) => ({
    type: FarmerActionTypes.SET_SERVANT_STATS_MULTIPLIER,
    payload: statsMultiplier
  })