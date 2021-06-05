import { GENERAL_SET_LOCATION_FROM_MAP, AUTH_UPDATE_DESCRIPTION } from "../action-types";

export const setLocation = (location) => ({ type: GENERAL_SET_LOCATION_FROM_MAP, payload: { location } });
export const setDescription = (description) => ({ type: AUTH_UPDATE_DESCRIPTION, payload: { description } });