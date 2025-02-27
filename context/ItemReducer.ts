import { GameStats } from "@/utils/GameStats";
import { GeneralType, ItemType } from "@/utils/Item";
import { GameQualities } from "@/utils/GameQualities";

// Define action types
export enum ItemActionTypes {
    SET_IS_EQUIPPED_ITEM = "SET_IS_EQUIPPED_ITEM",
    SET_ITEM_STATS = "SET_ITEM_STATS",
    SET_ITEM_LEVEL = "SET_ITEM_LEVEL",
    SET_ITEM_APOGEE_LEVEL = "SET_ITEM_APOGEE_LEVEL",
    SET_IS_ITEM_LINKED= "SET_IS_ITEM_LINKED",
    SET_ITEM_VALUE= "SET_ITEM_VALUE",
    SET_ITEM_DURABILITY= "SET_ITEM_DURABILITY",
    ADD_ITEM = "ADD_ITEM",
    RESET_ITEMS = "RESET_ITEMS",
    
  }

export interface GameItem {
    id: number;
    isEquipped: boolean;
    name:string;
    type: ItemType;
    level:number;
    quality: GameQualities;
    apogeeLevel: number;
    isLinked: boolean;
    value: number;
    durability: number;
    stats: GameStats;
    description: string;
    icon:string;
    generalType:GeneralType;
  }

  export interface ItemState {
    items: GameItem[];
    totalItems: number;
  }

// Action to set whether the item is equipped
  interface SetIsEquippedItemAction {
    type: ItemActionTypes.SET_IS_EQUIPPED_ITEM;
    payload: {
      id: number;
      isEquipped: boolean;
  };
  }

// Action to set the stats of the item
interface SetItemStatsAction {
    type: ItemActionTypes.SET_ITEM_STATS;
    payload: {
        id: number;
        stats: Partial<GameStats>; // Use Partial to allow updating specific stats
    };
}

// Action to set the item's level
interface SetItemLevelAction {
    type: ItemActionTypes.SET_ITEM_LEVEL;
    payload: {
        id: number;
        level: number;
    };
}

// Action to set the item's apogee level
interface SetItemApogeeLevelAction {
    type: ItemActionTypes.SET_ITEM_APOGEE_LEVEL;
    payload: {
        id: number;
        apogeeLevel: number;
    };
}

// Action to set whether the item is linked
interface SetIsItemLinkedAction {
    type: ItemActionTypes.SET_IS_ITEM_LINKED;
    payload: {
        id: number;
        isLinked: boolean;
    };
}

// Action to set the item's value
interface SetItemValueAction {
    type: ItemActionTypes.SET_ITEM_VALUE;
    payload: {
        id: number;
        value: number;
    };
}

// Action to set the item's durability
interface SetItemDurabilityAction {
    type: ItemActionTypes.SET_ITEM_DURABILITY;
    payload: {
        id: number;
        durability: number;
    };
}

// Action to set the item's durability
interface AddItemAction {
    type: ItemActionTypes.ADD_ITEM;
    payload: GameItem
}

interface ResetItemsAction {
  type: ItemActionTypes.RESET_ITEMS;
}

    // Combine action types
    type ItemActions =
    | SetIsEquippedItemAction
    | SetItemStatsAction
    | SetItemLevelAction
    | SetItemApogeeLevelAction
    | SetIsItemLinkedAction
    | SetItemValueAction
    | SetItemDurabilityAction
    | AddItemAction
    | ResetItemsAction;

      const itemReducer = (
        state: ItemState,
        action: ItemActions
      ): ItemState => {
        switch (action.type) {
          case ItemActionTypes.SET_IS_EQUIPPED_ITEM: {
            const { id, isEquipped } = action.payload;
            return {
              ...state,
              items: state.items.map(item =>
                item.id === id ? { ...item, isEquipped: isEquipped } : item
              ),
            };
          }
          case ItemActionTypes.SET_ITEM_STATS: {
            const { id, stats } = action.payload;
            return {
              ...state,
              items: state.items.map(item =>
                item.id === id ? { ...item, stats: { ...item.stats, ...stats } } : item
              ),
            };
          }
          case ItemActionTypes.SET_ITEM_LEVEL: {
            const { id, level } = action.payload;
            return {
              ...state,
              items: state.items.map(item =>
                item.id === id ? { ...item, level: item.level + level } : item
              ),
            };
          }
          case ItemActionTypes.SET_ITEM_APOGEE_LEVEL: {
            const { id, apogeeLevel } = action.payload;
            return {
              ...state,
              items: state.items.map(item =>
                item.id === id ? { ...item, apogeeLevel: apogeeLevel } : item
              ),
            };
          }
          case ItemActionTypes.SET_IS_ITEM_LINKED: {
            const { id, isLinked } = action.payload;
            return {
              ...state,
              items: state.items.map(item =>
                item.id === id ? { ...item, isLinked } : item
              ),
            };
          }
          case ItemActionTypes.SET_ITEM_VALUE: {
            const { id, value } = action.payload;
            return {
              ...state,
              items: state.items.map(item =>
                item.id === id ? { ...item, value: item.value + value } : item
              ),
            };
          }
          case ItemActionTypes.SET_ITEM_DURABILITY: {
            const { id, durability } = action.payload;
            return {
              ...state,
              items: state.items.map(item =>
                item.id === id ? { ...item, durability: item.durability + durability } : item
              ),
            };
          }
          case ItemActionTypes.ADD_ITEM: {
            const newItem = action.payload;
            return {
              ...state,
              items: [...state.items, newItem],
              totalItems: state.totalItems + 1,
            };
          }
          case ItemActionTypes.RESET_ITEMS: {
            return {
              ...state,
              items: [],
              totalItems: 0,
            };
          }
          default:
            return state;
        }
      };
  
  export default itemReducer;