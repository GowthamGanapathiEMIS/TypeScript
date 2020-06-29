import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./types";

export interface ToDo {
  id: number;
  title: string;
  completed: boolean;
}

export interface FetchTodosAction {
  type: ActionTypes.fetchToDos;
  payload: ToDo[];
}
export interface DeleteTodosAction {
  type: ActionTypes.deleteToDos;
  payload: number;
}
const url = "http://jsonplaceholder.typicode.com/todos";
export const FetchAction = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<ToDo[]>(url);
    dispatch<FetchTodosAction>({
      type: ActionTypes.fetchToDos,
      payload: response.data,
    });
  };
};
export const DeleteAction = (id: number): DeleteTodosAction => {
  return { type: ActionTypes.deleteToDos, payload: id };
};
