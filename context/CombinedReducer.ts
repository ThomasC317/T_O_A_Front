import { Reducer } from 'react';
import playerReducer, { PlayerStats } from './PlayerReducer';
import farmerReducer , { FarmerStats } from './FarmerReducer';
// import itemReducer, { GameItem, ItemState } from './ItemReducer';
// import shopReducer, { ShopState } from './ShopReducer';
// import talentReducer, { TalentState } from './TalentReducer';

export interface CombinedState {
  playerStats: PlayerStats;
  farmerStats: FarmerStats;
//   gameItem: ItemState;
//   shopState:ShopState;
//   talentState: TalentState;
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
  playerStats: playerReducer,
  farmerStats: farmerReducer,
//   gameItem: itemReducer,
//   shopState:shopReducer,
//   talentState: talentReducer
});
