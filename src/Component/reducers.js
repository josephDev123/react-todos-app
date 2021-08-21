
import { createSlice } from "@reduxjs/toolkit";

let initial_state =[]

//[{id:123, text:'hello'}, {id:123, text:'hello'}]

export const Todoslices = createSlice({
    name:'todo',
    initialState:initial_state,
    reducers: {

        addTodo: (state, action)=>{  
            state.push(action.payload)
        },

        onDeleteId:(state, action)=>{
            const{id} = action.payload
            let newState = state.filter(item=>  item.id === id);
            state.splice(newState,1);
    },

    editTodo:(state, action)=>{
        // let {id, text} = action.payload;
       
    }
}
});

//reducer
const Reducer = Todoslices.reducer;
export default Reducer;

//action
export let {addTodo, onDeleteId, editTodo} = Todoslices.actions;