import { User } from "@/models/user";
import { Village } from "@/models/village";

export enum UserActionTypes {
    SET_VILLAGE = "SET_VILLAGE",
  }

  interface SetVillageAction {
    type: UserActionTypes.SET_VILLAGE;
    payload: Village;
  }

  export type UserActions = SetVillageAction ;
  

  const userReducer = (state: User, action: UserActions): User => {
    switch (action.type) {
        case UserActionTypes.SET_VILLAGE:
            console.log(action.payload.name)
          return {
             ...state, 
             activeVillage:{...action.payload} 
            };
          default:
      return state;
  }

}

export default userReducer;