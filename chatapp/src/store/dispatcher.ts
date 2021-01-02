import { ActionType } from "./reducer";

const updateData = (data: any) => {
  return { type: ActionType.UpdateData, payload: { data } };
};
export {
  updateData
};
