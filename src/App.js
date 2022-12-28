import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import './App.css'

// import { connect } from 'react-redux'

import { increaseCounter, decreaseCounter } from './action/actions'

function App (props) {
  const dispatch = useDispatch()
  
  
  const newCount = useSelector(state => {
    return state.counter.count
  })
  return (
    <div className='App'>
      <div>Count: {newCount}</div>

      <button onClick={() => dispatch(increaseCounter())}>Increase Count</button>

      <button onClick={() => dispatch(decreaseCounter())}>Decrease Count</button>
    </div>
  )
}

// const mapStateToProps = state => {
//   return {
//     count: state.counter.count
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increaseCounter: () => dispatch(increaseCounter()),

//     decreaseCounter: () => dispatch(decreaseCounter())
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App)
export default App
