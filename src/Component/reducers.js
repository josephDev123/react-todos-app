
import { createSlice } from "@reduxjs/toolkit";
import {loadState} from './LocalStorage';

let persistedState = loadState();
let initial_state = persistedState
// let initial_state =[]
//[{id:123, text:'hello'}, {id:123, text:'hello'}]

export const Todoslices = createSlice({
    name:'todo',
    initialState: initial_state,
    reducers: {
//add item to todo array
        addTodo: (state, action)=>{  
            state.push(action.payload)
        },
        
//delete item in array by id
        onDeleteId:(state, action)=>{
            return state.filter(({id})=>id !== +action.payload);            
    },

    //editing an item by id
    editTodo:(state, action)=>{
        let {id, text} = action.payload;
        return state.map(item=>item.id === +id? {...item, text:text}:item)
       
    }
}
});

//reducer
export default Todoslices.reducer;
// export default Reducer;

//action
export let {addTodo, onDeleteId, editTodo} = Todoslices.actions;