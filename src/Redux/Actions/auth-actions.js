import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_UPDATE_USER } from '../action-types';

export const login = (user) => ({ type: AUTH_LOGIN, payload: { user } });
export const logout = (redirect = '') => ({ type: AUTH_LOGOUT, payload: { redirect } });
export const updateUser = (user) => ({ type: AUTH_UPDATE_USER, payload: { user }});
// export const updatedescription = (user) => ({ type: AUTH_UPDATE_DESCRIPTION, payload: { user }});
// export const create_at = (user) => ({ type: AUTH_UPDATE_CREATE_AT, payload: { user }});npm