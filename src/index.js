import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/reduxStore'

console.log(store.getState());

ReactDOM.render(
    <React.StrictMode>
        <App state={store.getState()} dispatch={store.dispatch.bind(store)} store={store} />
    </React.StrictMode>,
    document.getElementById('root')
);


