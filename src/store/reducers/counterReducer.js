import actionTypes from "../actions/actionTypes";

const initialState = {
    count: 0
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.COUNTER_INCREASE_START:
            state.count = state.count + 1;
            console.log('Increase, count: ', state.count)
            return {
                ...state,
                count: state.count
            }
        case actionTypes.COUNTER_INCREASE_SUCCESS:
            return [
                ...state
            ]
        case actionTypes.COUNTER_INCREASE_FAILED:
            return {
                ...state
            }
        case actionTypes.COUNTER_DECREASE_START:
            state.count = state.count - 1;
            console.log('Decrease, count: ', state.count)
            return {
                ...state
            }
        case actionTypes.COUNTER_DECREASE_SUCCESS:
            return {
                ...state
            }
        case actionTypes.COUNTER_DECREASE_FAILED:
            return {
                ...state
            }

        default:
            return {
                ...state
            }
    }
}
export default counterReducer;