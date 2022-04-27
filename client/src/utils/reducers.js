import {
    LOGIN,
    LOGOUT,
    SIGN_UP
} from "./actions";

const initialState = {
    auth: true,
    user: {
        username: "test"
    }
}

export const reducers = (state = initialState, action) => {
   console.log(action)
    switch (action.type) {
        case LOGIN:
            
            if (action.payload) {
                //action.userData[0]
                return {
                    ...state,
                    auth: true,
                    user: action.payload
                }
            } else {

                return {
                    ...state,
                    auth: true,
                    user: action.payload
                    //action.userData
                }
            }

        case LOGOUT:
            return {
                ...state,
                auth: false
            }
        case SIGN_UP:
            return {
                ...state,
                auth: true
            }
        default:
            return state
    }
}
export default reducers;