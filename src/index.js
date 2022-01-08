import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/reduxStore'
import { Provider } from 'react-redux';

// console.log(store.getState());
// console.log(store);
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App store={store} />
        </Provider>

    </React.StrictMode>,
    document.getElementById('root')
);


