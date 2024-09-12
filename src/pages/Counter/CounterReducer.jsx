import React, { useReducer } from 'react'
import { decrement, increment } from '../../../redux/counterSlice'

const CounterReducer = () => {

    // const initailState = 0
    const intialState = {
        value : 0
    } 

    const countReducer = (state , action) => {
        // const{actionType} = action  // destructuring action object
        if(action === 'increment'){
            return {value : state.value + 1}
        }else{
            // return state - 1
             return {value : state.value - 1}
        } 
    }

    const [count , countDispatch] = useReducer(countReducer , intialState)
    // const[state , dispatch] = useReducer(reducer , initailState)

    const handleCount = (e) => {
        
        const {value} = e.target
          countDispatch(
            // {
            //   actionType : value === 'increment' ? 'increment' : 'decrement'
            // }    // action in object
            value === 'increment' ? 'increment' : 'decrement'  //action in string
          )
    }

    console.log(`count : ${count.value}`)
    console.log(`intialState : ${intialState.value}`)


    
  return (
    <>
     {/* <p>{count.value}</p> */}
     <button onClick={handleCount} value='increment'>Increment</button>
     <button onClick={handleCount} value='decrement'>Decrement</button>
    </>
  )
}

export default CounterReducer