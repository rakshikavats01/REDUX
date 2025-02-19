import { useState } from 'react';
import './App.css'
import { increment,decrement,reset,incrementByAmount } from './features/counter/counterSlice.jsx';
import {useDispatch,useSelector} from 'react-redux';
function App() {
  const[amount,setAmount]=useState(0)
  const count=useSelector((state)=> state.counter.value)//use to handle or use state/object in our code
  const dispatch=useDispatch();//use to handle or use actions in our code
  function handleResetClick(){
    dispatch(reset())
  }
  function handleIncrementClick(){
    dispatch(increment())
  }
  function handleDecrementClick(){
    dispatch(decrement())
  }
  function handleIncAmountClick(){
    dispatch(incrementByAmount(amount))
  }

  return (
    <div className='container'>
    <button onClick={handleIncrementClick}>+</button>
    <p>Count:{count}</p>
    <button onClick={handleDecrementClick}>-</button>
    <br/>
    <br/>
    <button onClick={handleResetClick}>Reset</button>
    <br/>
    <br/>
    <input
    type='Number'
    value={amount}
    placeholder='Enter Amount'
    onChange={(e)=>setAmount(e.target.value)}
    />
    <br/>
    <br/>
    <button onClick={handleIncAmountClick}>Increment by Entered Amount</button>
    </div>
  )
}

export default App
