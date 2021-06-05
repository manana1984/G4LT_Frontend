import { GENERAL_SET_LOCATION_FROM_MAP, AUTH_UPDATE_DESCRIPTION } from '../action-types';

const initState = {
    location: '',
    description: ''
};

const generalReducer = (state = initState, action) => {
    switch (action.type) {
        case GENERAL_SET_LOCATION_FROM_MAP:
            return { ...state, location: action.payload.location };
        case AUTH_UPDATE_DESCRIPTION:
            {
                return { ...state, description: action.payload.description };
            }
        default:
            return state;
    }
};

export default generalReducer;
