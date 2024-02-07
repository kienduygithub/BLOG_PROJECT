import actionTypes from './actionTypes'

export const increaseStart = () => ({
    type: actionTypes.COUNTER_INCREASE_START
})

export const increaseSuccess = () => ({
    type: actionTypes.COUNTER_INCREASE_SUCCESS
})

export const increaseFailed = () => ({
    type: actionTypes.COUNTER_INCREASE_FAILED
})

export const decreaseStart = () => ({
    type: actionTypes.COUNTER_DECREASE_START
})

export const decreaseSuccess = () => ({
    type: actionTypes.COUNTER_DECREASE_SUCCESS
})

export const decreaseFailed = () => ({
    type: actionTypes.COUNTER_DECREASE_FAILED
})