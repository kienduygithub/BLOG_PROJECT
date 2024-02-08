import actionTypes from './actionTypes';

export const saveUserDataLoginSuccess = (userData) => ({
    type: actionTypes.SAVE_USER_DATA_LOGIN_SUCCESS,
    data: userData
});

export const saveUserDataLoginFailed = () => ({
    type: actionTypes.SAVE_USER_DATA_LOGIN_FAILED
})