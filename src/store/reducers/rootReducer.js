import { combineReducers } from "redux";
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
// REDUCERS
import counterReducer from "./counterReducer";
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

const rootReducer = combineReducers({
    // counter: counterReducer
    counter: persistReducer(counterPersistConfig, counterReducer)
})

export default rootReducer;
