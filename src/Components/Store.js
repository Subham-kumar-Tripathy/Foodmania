import { configureStore } from '@reduxjs/toolkit'
import Cartreducer from './CartSlice'

const Store =configureStore({
    reducer:{
        cart:Cartreducer,
    },
});

export default Store
