"use client"
import React, { createContext, useReducer, useContext, ReactNode } from 'react';
import { VillageActionTypes, PlayerAction } from './VillageReducer';
import { Farmer, FarmerAction, FarmerActionTypes, Servant } from './FarmerReducer';
import { CombinedState, rootReducer } from './CombinedReducer';
import { GameStats } from '@/utils/GameStats';
import { GameItem, ItemActionTypes } from './ItemReducer';
import { ShopActionTypes } from './ShopReducer';
import { TalentActionTypes } from './TalentReducer';
import { getVillage, updateLevel, updateResource, updateResourcePerSecond } from '@/services/villageService';
import { createVillageFarmer, setVillageFarmerIsActive, setVillageFarmerLevel } from '@/services/villageFarmerService'
import { createVillageServant} from '@/services/villageServantService'
import {createApogeeVillage} from '@/services/villageApogeeService'
import { UserActions, UserActionTypes } from './UserReducer';

interface PlayerContextType {
    state: CombinedState;
    dispatch: React.Dispatch<PlayerAction | FarmerAction | UserActions>;
  }
 
  const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

  const initialState: CombinedState = {
    villageFarmers: {
      id: 0,
      totalResourceGenerated: 0,
      isActive: false,
      level: 0,
      quality: 0,
      nextUpgradeCost: 0,
      resourcePerSecond: 0
    },
    user: {
      activeVillage: {
        xp: 0,
        level: 1,
        resource: 0,
        totalResource: 0,
        resourcePerSecond: 1,
        id: 0,
        name: '',
        remainingSkillPoints: 0,
        skills: [],
        villageServants: [],
        villageFarmers: [],
        villageItem: [],
        villageShops: [],
        requiredXpToLevelUp: 0
      },
      id: 0,
      username: '',
      email: '',
      password: '',
      createdAt: new Date,
      updatedAt: new Date,
      village: [],
      saves: []
    },
    village: {
      xp: 0,
      level: 1,
      resource: 0,
      totalResource: 0,
      resourcePerSecond: 1,
      id: 0,
      name: '',
      remainingSkillPoints: 0,
      skills: [],
      villageServants: [],
      villageFarmers: [],
      villageItem: [],
      villageShops: [],
      requiredXpToLevelUp: 0
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

  export const loadVillage = async (villageId: number, dispatch: React.Dispatch<any>) => {
    try {
      const data = await getVillage(villageId);
      dispatch({ type: UserActionTypes.SET_VILLAGE, payload: data });
    } catch (error) {
      console.error("Erreur lors du chargement du village :", error);
    }
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
  
  export const setResource = async (amount: number, dispatch: React.Dispatch<any>) => {
    try {
      const data = await updateResource(1, amount); 
      if(data)
      {
        dispatch({
          type: VillageActionTypes.UPDATE_RESOURCE,
          payload: amount,
        });
      }
    }
    catch (error) {
      console.error("Erreur mise à jour ressource :", error);
    }
  };

  // export const setResource = async(amount: number) => ({
  //   type: PlayerActionTypes.UPDATE_RESOURCE,
  //   payload: amount,
  // });
  
  
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