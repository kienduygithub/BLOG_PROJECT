import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import store from './store/redux/store'
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
const root = ReactDOM.createRoot(document.getElementById('root'));
const persistor = persistStore(store);
root.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            < React.StrictMode >
                <App />
            </React.StrictMode >
        </PersistGate>
    </Provider>
);


reportWebVitals();
