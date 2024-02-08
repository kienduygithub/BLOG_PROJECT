import { combineReducers } from "redux";
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
// REDUCERS
import counterReducer from "./counterReducer";
import userReducer from "./userReducer";
// PERSISTS
const persistCommonConfig = {
    storage: storage,
    stateReconciler: autoMergeLevel2
}

const counterPersistConfig = {
    ...persistCommonConfig,
    key: 'counter'
    // blacklist: [ 'State gì đó' ],
    // whitelist: [ 'State gì đó' ]
}
const userPersistConfig = {
    ...persistCommonConfig,
    key: 'user'
}
const rootReducer = combineReducers({
    // counter: counterReducer
    counter: persistReducer(counterPersistConfig, counterReducer),
    user: persistReducer(userPersistConfig, userReducer)
})

export default rootReducer;
