import actionTypes from './actionTypes';

export const saveUserDataLoginSuccess = (userData) => ({
    type: actionTypes.SAVE_USER_DATA_LOGIN_SUCCESS,
    data: userData
});

export const saveUserDataLoginFailed = () => ({
    type: actionTypes.SAVE_USER_DATA_LOGIN_FAILED
})

export const resetUserInfoSuccess = () => ({
    type: actionTypes.RESET_USER_INFO_SUCCESS
})

export const resetUserInfoFailed = () => ({
    type: actionTypes.RESET_USER_INFO_FAILED
})