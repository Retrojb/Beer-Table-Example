import { GET_BEERS } from "../types";

const initialState = {
    beers: [],
    loading: true
};

export const beersReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_BEERS:
            return {
                ...state,
                value: action.payload,
                loading: false
            }
            default: return state
    }
}

export default beersReducer;