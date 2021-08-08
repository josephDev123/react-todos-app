
import { createSlice } from "@reduxjs/toolkit";
// {id:123, text:'hello', completed: false}
let initial_state ={
    content:[]
}

export const Todoslices = createSlice({
    name:'todo',
    initial_state,
    reducers: {
        // id: Date.now(),
        addTodo: (state, action)=>{  
            state.content.push(action.payload)
        }
    }
});

//reducer
const Reducer = Todoslices.reducer
export default Reducer;

//action
export let {addTodo} = Todoslices.actions;