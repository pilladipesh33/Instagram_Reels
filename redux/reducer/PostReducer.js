import { CURRENT_USER_POST_UPDATE } from "../action/Constant";

const initialState = {
    currentUserPost: null,
};

export const  PostReducer = (state = initialState, action) => {
    switch (action.type) {
        case CURRENT_USER_POST_UPDATE:
            return {
                ...state,
                currentUserPost: action.currentUserPost,
            };
        default:
            return state;
    }
}