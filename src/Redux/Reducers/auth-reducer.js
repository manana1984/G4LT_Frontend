import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_UPDATE_USER } from '../action-types';

const initialAuthState = {
    user: null,
    redirect: ''
};

const authReducer = (state = initialAuthState, action) => {
    switch (action.type) {
        case AUTH_LOGIN:
            return {
                ...state,
                user: action.payload.user,
                redirect: '',
            };
        case AUTH_UPDATE_USER:
            {
                return { ...state, user: action.payload.user };
            }
        case AUTH_LOGOUT:
            return { ...state, user: null, redirect: action.payload.redirect };
        default:
            return state;
    }
  };

export default authReducer;
