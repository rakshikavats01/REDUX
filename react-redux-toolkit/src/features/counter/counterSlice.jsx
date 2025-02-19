import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },//action:-increment and decrement
    decrement: (state) => {
      if(state.value==0){
        state.value=0
      }
      else{
      state.value -= 1
      }
    },
    reset: (state) => {
      state.value =0
    },
    incrementByAmount: (state, action) => {
      state.value += Number(action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount,reset } = counterSlice.actions

export default counterSlice.reducer