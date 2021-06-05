import { connect } from 'react-redux';
import { login, logout, updateUser } from './Actions/auth-actions';
import { setLocation, setDescription } from './Actions/general-actions';

const mapUserStateToProps = state => ({ user: state.authReducer.user });
const mapAuthDispatchToProps = { login, logout, updateUser };
export const connectAuth = connect( mapUserStateToProps, mapAuthDispatchToProps );

const mapAuthStateToProps = state => ({ authenticated: !!state.authReducer.user });
const mapLoginDispatchToProps = { login };
export const connectIsAuth = connect(mapAuthStateToProps, mapLoginDispatchToProps);

const mapAuthRedirectPageNameToProps = state => ({ redirect: state.authReducer.redirect });
export const connectAuthRedirectPage = connect(mapAuthRedirectPageNameToProps, null);

const mapGeneralStatsToProps = state => ({ location: state.generalReducer.location })
const mapGeneralActionsToProps = { setLocation };
export const connectGeneralStatesToProps = connect(mapGeneralStatsToProps, mapGeneralActionsToProps);

const mapUserDescriptionStateToProps = state => ({ description: state.generalReducer.description });
const mapAuthDescriptionToProps = { setDescription };
export const connectAuthDescription = connect( mapUserDescriptionStateToProps, mapAuthDescriptionToProps );