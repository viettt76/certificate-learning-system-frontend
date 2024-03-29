import actionsType from './actionsType';

export const loginSuccess = (userInfo) => ({
    type: actionsType.LOGIN_SUCCESS,
    payload: userInfo,
});

export const logoutSuccess = () => ({
    type: actionsType.LOGOUT_SUCCESS,
});
