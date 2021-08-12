
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
         const indexitem = state.map(item=>item.id ===id);
        //  const indexitem = state.map(item=>(item.id =id)?item:'');//correct
         const index= state.indexOf(indexitem);
         state.splice(index, 1);

    }
}
});

//reducer
const Reducer = Todoslices.reducer;
export default Reducer;

//action
export let {addTodo, onDeleteId} = Todoslices.actions;