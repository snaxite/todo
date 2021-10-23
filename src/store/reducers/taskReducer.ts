import {
    ADD_TASK,
    EDIT_TASK,
    REMOVE_TASK,
    SELECT_TASK,
    SET_FILTER,
} from "../actions/task";

const initialState = {
    doneIds: [],
    inProgressIds: [],
    filter: 'day',
    selected: [],
    newTask: {
        title: '',
        state: '',
        date: new Date(),
        time: new Date(),
    },
}

type reducerInputs = {
    type: string;
    payload: Object;
}

export default function taskReducer(state = initialState, { type, payload }: reducerInputs) {
    switch (type) {
        case ADD_TASK:

            break;
        case EDIT_TASK:

            break;
        case REMOVE_TASK:

            break;
        case SELECT_TASK:

            break;
        case SET_FILTER:

            break;
        default:
            return state;
    }
}