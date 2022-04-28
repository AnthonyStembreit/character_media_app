import {
    LOGIN,
    LOGOUT,
    SIGN_UP
} from "./actions";

const initialState = {
    auth: true,
    user: {
        id: 2,
        username: "test",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQbBpAnjzhX3OtbT_voeJHVpalKyECOyNOLA&usqp=CAU",
        bio: "Consequat anim officia ipsum consectetur commodo. Commodo aute et et cupidatat. Irure voluptate cillum culpa ullamco quis ex magna consectetur. Minim consequat id Lorem incididunt elit veniam sint cupidatat duis enim eu pariatur anim. Mollit adipisicing dolore velit cupidatat proident ad nostrud laborum commodo do esse. Exercitation velit elit aliqua enim.",
        characters: []       
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
                    user: action.payload,
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