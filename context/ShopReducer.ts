import { GameItem } from "./ItemReducer";
import { Farmer, Servant } from "./FarmerReducer";

export enum ShopActionTypes {
  SET_TOOLS = "SET_TOOLS",
  SET_ARMORS = "SET_ARMORS",
  SET_FARMERS = "SET_FARMERS",
  SET_SERVANTS = "SET_SERVANTS",
  REMOVE_FARMER = "REMOVE_FARMER",
  REMOVE_SERVANT = "REMOVE_SERVANT",
  SET_REMAINING_TIME = "SET_REMAINING_TIME",
}

export interface ShopState {
  tools: GameItem[];
  armors: GameItem[];
  farmers: Farmer[];
  servants : Servant[];
  displayedFarmers: Farmer[];
  displayedServants: Servant[];
  id: number;
  name: string;
  remainingTime: number;
}

interface SetToolsAction {
  type: ShopActionTypes.SET_TOOLS;
  payload: GameItem[];
}

interface SetArmorsAction {
  type: ShopActionTypes.SET_ARMORS;
  payload: GameItem[];
}

interface SetFarmersInShopAction {
  type: ShopActionTypes.SET_FARMERS;
  payload: Farmer[];
}

interface SetServantsInShopAction {
  type: ShopActionTypes.SET_SERVANTS;
  payload: Servant[];
}

interface RemoveFarmerAction {
  type: ShopActionTypes.REMOVE_FARMER;
  payload: Farmer;
}

interface RemoveServantAction {
  type: ShopActionTypes.REMOVE_SERVANT;
  payload: Servant;
}


interface SetRemainingTimeAction {
  type: ShopActionTypes.SET_REMAINING_TIME;
  payload: number;
}

export type ShopAction = SetToolsAction |  SetArmorsAction | SetFarmersInShopAction | RemoveFarmerAction | RemoveServantAction | SetServantsInShopAction |SetRemainingTimeAction;

const shopReducer = (state: ShopState, action: ShopAction): ShopState => {
  switch (action.type) {
    case ShopActionTypes.SET_TOOLS:
      return { ...state, tools: action.payload };
    case ShopActionTypes.SET_ARMORS:
      return { ...state, armors: action.payload };
    case ShopActionTypes.SET_SERVANTS:
      return { ...state, servants: action.payload, displayedServants: action.payload };
    case ShopActionTypes.SET_FARMERS:
      return {...state, farmers: action.payload,  displayedFarmers: action.payload}
    case ShopActionTypes.REMOVE_FARMER: {
        const farmerToRemove = action.payload; // Identifiant du fermier à supprimer
        return {
          ...state,
          displayedFarmers: state.displayedFarmers.filter((farmer) => farmer.id !== farmerToRemove.id),
        };
      }
      case ShopActionTypes.REMOVE_SERVANT: {
        const servantToRemove = action.payload; // Identifiant du fermier à supprimer
        return {
          ...state,
          displayedServants: state.displayedServants.filter((farmer) => farmer.id !== servantToRemove.id),
        };
      }
    case ShopActionTypes.SET_REMAINING_TIME:
      return { ...state, remainingTime: state.remainingTime + action.payload };
    default:
      return state;
  }
};
export default shopReducer;
