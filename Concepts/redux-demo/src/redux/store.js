import { configureStore } from '@reduxjs/toolkit';
import BatReducer from './batReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = configureStore(BatReducer,composeWithDevTools());

export default store;