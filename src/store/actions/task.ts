/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const SELECT_TASK = 'SELECT_TASK';
export const SET_FILTER = 'SET_FILTER';

export type TaskType = {
  id: number;
  title: string;
  status: string;
  date: Date;
  time?: Date;
  selected?: boolean;
};

export const addTask = (task: TaskType) => async (dispatch: any) => {
  try {
    dispatch({
      type: ADD_TASK,
      payload: task,
    });
  } catch (error) {
    console.error(error);
  }
};

export const removeTask = (id: number) => async (dispatch: any) => {
  try {
    dispatch({
      type: REMOVE_TASK,
      payload: id,
    });
  } catch (error) {
    console.error(error);
  }
};

export const editTask = (task: TaskType) => async (dispatch: any) => {
  try {
    dispatch({
      type: EDIT_TASK,
      payload: task,
    });
  } catch (error) {
    console.error(error);
  }
};

export const selectTask = (id: number) => async (dispatch: any) => {
  try {
    dispatch({
      type: SELECT_TASK,
      payload: id,
    });
  } catch (error) {
    console.error(error);
  }
};

export const setFilter = (filter: string) => async (dispatch: any) => {
  try {
    dispatch({
      type: SET_FILTER,
      payload: filter,
    });
  } catch (error) {
    console.error(error);
  }
};
