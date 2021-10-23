export const ADD_TASK: string = 'ADD_TASK';
export const REMOVE_TASK: string = 'REMOVE_TASK';
export const EDIT_TASK: string = 'EDIT_TASK';
export const SELECT_TASK: string = 'SELECT_TASK';
export const SET_FILTER: string = 'SET_FILTER';

type task = {
    title: string;
    state: 'in progress' | 'paused' | 'done';
    date: Date;
    time: Date;
    selected: boolean;
}

export function addTask(task: task): void {

}

export function removeTask(id: string): void {

}

export function editTask(task: task): void {

}

export function selectTask(id: string): void {

}

export function setFilter(filter: string): void {

}