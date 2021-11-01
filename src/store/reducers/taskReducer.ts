/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ADD_TASK,
  EDIT_TASK,
  REMOVE_TASK,
  SELECT_TASK,
  SET_FILTER,
  TaskType,
} from '../actions/task';

const initialState = {
  id: 0,
  tasks: [],
  filter: 'Day',
  selected: [],
  loading: false,
};

type ReducerInputs = {
  type: string;
  payload: any;
};

export default function taskReducer(
  state = initialState,
  { type, payload }: ReducerInputs,
): any {
  let temp: any, index: any;
  switch (type) {
    case ADD_TASK:
      payload.id = state.id;
      state.id++;
      return {
        ...state,
        tasks: [...state.tasks, payload],
      };
    case EDIT_TASK:
      temp = state.tasks;
      index = temp
        .map((task: TaskType) => {
          return task.id;
        })
        .indexOf(payload.id);
      temp[index] = payload;
      return {
        ...state,
        tasks: temp,
      };
    case REMOVE_TASK:
      temp = state.tasks;
      index = temp
        .map((task: TaskType) => {
          return task.id;
        })
        .indexOf(payload);
      temp.splice(index, 1);
      return {
        ...state,
        tasks: temp,
      };
    case SELECT_TASK:
      temp = state.tasks;
      index = state.tasks.findIndex((t: TaskType) => t.id === payload);
      temp[index] = {
        ...temp[index],
        status: temp[index].status === 'Done' ? 'Paused' : 'Done',
      };
      return {
        ...state,
        tasks: temp,
      };
    case SET_FILTER:
      return {
        ...state,
        filter: payload === state.filter ? '' : payload,
      };
    default:
      return state;
  }
}
