import { Action, ToDo, ActionTypes } from "../Actions";

export const FetchReducers = (state: ToDo[] = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.fetchToDos:
      return action.payload;
    case ActionTypes.deleteToDos:
      return state.filter((todo: ToDo) => todo.id != action.payload);
    default:
      return state;
  }
};
