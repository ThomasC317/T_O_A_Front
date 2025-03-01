import { GameStats } from "@/utils/GameStats";

export enum TalentActionTypes {
  SET_STATS_POINTS = "SET_STATS_POINTS",
  SET_STATS_FROM_POINTS = "SET_STATS_FROM_POINTS"
}

export interface TalentState {
  stats: GameStats;
  statPoints: number;
}

interface SetStatsPointsAction {
  type: TalentActionTypes.SET_STATS_POINTS;
  payload: number;
}

interface SetStatsFromPointsAction {
  type: TalentActionTypes.SET_STATS_FROM_POINTS;
  payload: {
    stats: Partial<GameStats>; // Allows updating specific stats
    operation: "add" | "remove"; // Specifies the operation to perform
  };
}

export type TalentAction = SetStatsPointsAction | SetStatsFromPointsAction;

const talentReducer = (state: TalentState, action: TalentAction): TalentState => {
  switch (action.type) {
    case TalentActionTypes.SET_STATS_POINTS:
      return { ...state, statPoints: state.statPoints + action.payload };
    case TalentActionTypes.SET_STATS_FROM_POINTS:
        const {stats,operation} = action.payload;
        return {
          ...state,
          stats: Object.keys(stats).reduce(
            (updatedStats, key) => {
              const statValue = stats[key];
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
        }
    default:
      return state;
  }
};
export default talentReducer;