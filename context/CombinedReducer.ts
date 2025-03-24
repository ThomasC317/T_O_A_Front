import { Reducer } from 'react';
import playerReducer from './VillageReducer';
import farmerReducer  from './FarmerReducer';
import itemReducer, { ItemState } from './ItemReducer';
import shopReducer, { ShopState } from './ShopReducer';
import talentReducer, { TalentState } from './TalentReducer';
import { Village } from '@/models/village';
import { VillageFarmer } from '@/models/villageFarmer';
import { User } from '@/models/user';
import villageReducer from './VillageReducer';
import userReducer from './UserReducer';

export interface CombinedState {
  village: Village;
  villageFarmers: VillageFarmer;
  user:User;
  // gameItem: ItemState;
  // shopState:ShopState;
  // talentState: TalentState;
}

const combineReducers = (slices: { [key: string]: Reducer<any, any> }): Reducer<any, any> => (state, action) =>
  Object.keys(slices).reduce(
    (acc, prop) => ({
      ...acc,
      [prop]: slices[prop](state[prop], action),
    }),
    state
  );

export const rootReducer = combineReducers({
  village: villageReducer,
  villageFarmers: farmerReducer,
  user: userReducer
  // gameItem: itemReducer,
  // shopState:shopReducer,
  // talentState: talentReducer
});
