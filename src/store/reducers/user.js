import { createSlice } from "@reduxjs/toolkit";
import { GET_USERS } from "../types"

const initialUserStateValue = { 
    name: "", 
    age: 0, 
    email: "",
    loading: true
};

// export default function(state = initialUserStateValue, action) {
//     switch(action.type) {
//         case GET_USERS:
//             return {
//                 ...state,
//                 users: action.payload,
//                 loading: false
//             }
//             default: return state
//     }
// }

export const userSlice = createSlice({
    name: "user",
    initialState: { value: initialUserStateValue },
    reducers: {
        login: (state, action) => {
            state.value = action.payload
        },
        logout: (state) => {
            state.value = initialUserStateValue
        }
    }
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer