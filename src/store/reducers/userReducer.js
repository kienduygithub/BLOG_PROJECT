import actionTypes from '../actions/actionTypes';

const initialState = {
    username: 'Kiến Duy',
    image: '',
    phone: ''
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
        default:
            return {
                ...state
            }
    }
}

export default userReducer