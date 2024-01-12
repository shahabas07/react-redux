import { useState } from 'react'
import React from 'react'
import './App.css'
import {createStore,combineReducers} from "redux"
import { Provider } from 'react-redux'
import Likecounter from './components/LikeCounter'
import {reducer} from "./components/Reducer"

const rootReducer=combineReducers({
  reducer
  
})

const store=createStore(rootReducer)

function App() {

  return (
    <Provider store={store}>
      <Likecounter />
    </Provider>
    
  )
}

export default App