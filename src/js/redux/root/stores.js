import {createStore, applyMiddleware, compose} from 'redux';
import {rootReducer} from './reducers';
import thunk from 'redux-thunk';

let rootStore = createStore(rootReducer, compose(applyMiddleware(thunk)));

export {rootStore}
