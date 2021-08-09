
import { createSlice } from "@reduxjs/toolkit";
// {id:123, text:'hello', completed: false}
let initial_state =[]


export const Todoslices = createSlice({
    name:'todo',
    initialState:initial_state,
    reducers: {
        addTodo: (state, action)=>{  
            state.push(action.payload)
        }
    }
});

//reducer
const Reducer = Todoslices.reducer;
export default Reducer;

//action
export let {addTodo} = Todoslices.actions;