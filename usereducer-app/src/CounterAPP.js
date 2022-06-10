import React, { useReducer, useState } from 'react'
 
const reducer = (state, action) => {
	if(action.type === 'increment') {
		return state + 1;
	}  

	if(action.type === 'decrement') {
		return state - 1;
	}

	if(action.type === 'reset') {
		return 0
	}

	return state;
}

const CounterAPP = () => {

	const [counter, dispatch] = useReducer(reducer, 0)

  return (
	 <div>
		<h1>Clicks: {counter}</h1>
		<button style={{margin: "2rem"}} onClick={() => dispatch({ type: 'increment'}) }>
			Increment
		</button>
		<button style={{margin: "2rem"}} onClick={() => dispatch({ type: 'decrement'}) }>
			Decrement
		</button>
		<button style={{margin: "2rem"}} onClick={() => dispatch({ type: 'reset'}) }>
			Reset
		</button>
	 </div>
  )
}

export default CounterAPP