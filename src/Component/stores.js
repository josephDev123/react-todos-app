import { configureStore } from '@reduxjs/toolkit';
import Reducer from './reducers';

const store = configureStore({
    reducer:{
        todo: Reducer
    }
});

export default store;