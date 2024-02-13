import actionTypes from '../actions/actionTypes';

const initialState = {
    username: '',
    access_token: '',
    email: '',
    image: '',
    phone: '',
    address: ''
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SAVE_USER_DATA_LOGIN_SUCCESS:
            let copyState = { ...state, ...action.data }
            return {
                ...copyState
            }
        case actionTypes.SAVE_USER_DATA_LOGIN_FAILED:
            return {
                ...state
            }
        case actionTypes.RESET_USER_INFO_SUCCESS:
            return {
                ...state,
                username: '', address: '', email: '',
                image: '', phone: '', access_token: ''
            }
        default:
            return {
                ...state
            }
    }
}

export default userReducer