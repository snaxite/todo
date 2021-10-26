import {
    ADD_TASK,
    EDIT_TASK,
    REMOVE_TASK,
    SELECT_TASK,
    SET_FILTER,
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
    switch (type) {
        case ADD_TASK:
            state.id++;
            return {
                ...state,
                tasks: [...state.tasks, payload]
            }
        case EDIT_TASK:

            break;
        case REMOVE_TASK:

            break;
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