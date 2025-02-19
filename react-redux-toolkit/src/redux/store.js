import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice.jsx'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})


//steps:
// Step 1:create store 
// Step 2:Wrap App inside provider
// Step 3: register reducer in store 