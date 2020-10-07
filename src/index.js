import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { rootReducer } from './redux/rootReducer';
import { Provider } from 'react-redux';
import { rootSaga } from './redux/rootSaga';
import { composeWithDevTools } from 'redux-devtools-extension';

const saga = createSagaMiddleware();

const store = createStore (rootReducer, composeWithDevTools(applyMiddleware(saga)));

// const store = createStore(rootReducer, compose(
//     applyMiddleware(saga),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// ));

saga.run(rootSaga);

const app = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

