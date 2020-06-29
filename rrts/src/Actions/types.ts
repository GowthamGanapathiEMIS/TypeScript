import { FetchTodosAction, DeleteTodosAction } from "./todos";

export enum ActionTypes {
  fetchToDos,
  deleteToDos,
}

export type Action = FetchTodosAction | DeleteTodosAction;
