import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Home from './components/Home'
import './App.css'


import { increaseCounter, decreaseCounter } from './action/actions'

const App = props => {
  const dispatch = useDispatch()


  return (
    <div className='App'>
      <Home />
    </div>
  )
}

export default App
