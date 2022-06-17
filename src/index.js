import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// redux imports 
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger'

const feelingReducer = (state = [], action) => {
    if (action.type === 'FEELING_NUMBER') {
        return action.payload
    }
    return state;
}

const understatingReducer = (state = [], action) => {
    if (action.type === 'UNDERSTANDING_NUMBER') {
        return action.payload
    }
    return state;
}

const supportReducer = (state = [], action) => {
    if (action.type === 'SUPPORT_NUMBER') {
        return action.payload
    }
    return state;
}

const commentReducer = (state = [], action) => {
    if (action.type === 'COMMENT_NUMBER') {
        return action.payload
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
      feelingReducer,
      understatingReducer,
      supportReducer,
      commentReducer
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
