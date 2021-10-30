export const ADD_TASK: string = 'ADD_TASK';
export const REMOVE_TASK: string = 'REMOVE_TASK';
export const EDIT_TASK: string = 'EDIT_TASK';
export const SELECT_TASK: string = 'SELECT_TASK';
export const SET_FILTER: string = 'SET_FILTER';

export type task = {
    id: number;
    title: string;
    status: string;
    date: Date;
    time?: Date;
    selected?: boolean;
}

export const addTask = (task: task) => async (dispatch: any) => {
    try {
        dispatch({
            type: ADD_TASK,
            payload: task
        })
    } catch (error) {
        console.error(error)
    }
}

export const removeTask = (id: number) => async (dispatch: any) => {
    try {
        dispatch({
            type: REMOVE_TASK,
            payload: id
        })
    } catch (error) {
        console.error(error)
    }
}

export const editTask = (task: task) => async (dispatch: any) => {
    try {
        dispatch({
            type: EDIT_TASK,
            payload: task
        })
    } catch (error) {
        console.error(error);
    }
}

export function () {
    return null;
}

export const selectTask = (id: number) => async (dispatch: any) => {
    try {
        dispatch({
            type: SELECT_TASK,
            payload: id
        })
    } catch (error) {
        console.error(error)
    }
}

export const setFilter = (filter: string) => async (dispatch: any) => {
    try {
        dispatch({
            type: SET_FILTER,
            payload: filter,
        })
    } catch (error) {
        console.error(error)
    }
}