import {
    ADD_TASK,
    EDIT_TASK,
    REMOVE_TASK,
    SELECT_TASK,
    SET_FILTER,
    task,
} from "../actions/task";

const initialState = {
    id: 0,
    tasks: [],
    filter: 'Day',
    selected: [],
    loading: false,
}

type reducerInputs = {
    type: string;
    payload: any;
}

export default function taskReducer(state = initialState, { type, payload }: reducerInputs) {
    let temp: any, index: any;
    switch (type) {
        case ADD_TASK:
            payload.id = state.id;
            state.id++;
            return {
                ...state,
                tasks: [...state.tasks, payload]
            }
        case EDIT_TASK:

            break;
        case REMOVE_TASK:
            temp = state.tasks;
            index = temp.map((task: task) => {
                return task.id
            }).indexOf(payload);
            temp.splice(index, 1)
            return {
                ...state,
                tasks: temp,
            }
        case SELECT_TASK:

            break;
        case SET_FILTER:
            return {
                ...state,
                filter: payload
            }
        default:
            return state;
    }
}