import { Action, Reducer } from "redux";
export enum ActionType {
  UpdateData = "UPDATE_DATA",
}

export interface InitialState {
  data: any;
}
export const initialState: InitialState = {
  data: []
};

export interface DispatchAction extends Action<ActionType> {
  payload: Partial<InitialState>;
}

export const reducer: Reducer<InitialState, DispatchAction> = (
  state = initialState,
  action
) => {
  if (action.type === ActionType.UpdateData) {
    return { ...state, data: action.payload.data };
  }  else return state;
};
