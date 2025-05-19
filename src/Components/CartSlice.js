import { createSlice } from '@reduxjs/toolkit'


const CartSlice = createSlice({
    name:'cart',
    initialState:{
        items :[]
    },
    reducers :{
        additem:(state,actions)=>{
            state.items.push(actions.payload);
        },
        removeitem:(state)=>{
            state.items.pop();
        },
        clearitem:(state)=>{
            state.items.length=0;
        },
    },
})

export const{additem,removeitem,clearitem}=CartSlice.actions;
export default CartSlice.reducer;
