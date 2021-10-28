import { SET_CURRENT_USER } from "../actions/types";

const initialState = {
    user: {},
    validToken: false
}

const booleanActionPayload = (payload) => {
    if (payload) {
        return true;
    } else {
        return false;
    }
}

export default function(state=initialState, action) {
    switch(action.types) {
        case SET_CURRENT_USER:
            return {
                ...state,
                validToken: booleanActionPayload(action.payload),
                user: action.payload
            }
        default:
            return state;
    }
}