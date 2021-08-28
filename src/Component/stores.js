import { configureStore } from '@reduxjs/toolkit';
import Reducer from './reducers';
import  {saveState}  from './LocalStorage';
import throttle from 'lodash/throttle';


const store = configureStore({
    reducer: {
        todo:Reducer
    }
    
});


store.subscribe(throttle(()=>{
    saveState(store.getState().todo)

}))
export default store;