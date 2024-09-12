import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../redux/counterSlice'

const Counter = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
  return (
    <>
    <p>{count}</p>
    <button onClick={() =>dispatch( increment())}>Increment</button>
    <button onClick={()=> dispatch(decrement())}>Decrement</button>

    </>
  )
}

export default Counter