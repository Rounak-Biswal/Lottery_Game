import React from 'react'
import "./App.module.css"
import Lottery from './components/Lottery/Lottery'
import { sum } from "./utils/helper"

const App = () => {
  let winCondition = (arr) => {
    //return sum(arr) === 15                          //sum = 15
    // return arr.every((num) => num === arr[0])      //all elements are same
    return arr[0] === 1                               //first element is 1
  }

  return (
    <div>
      <Lottery n={4} winCondition={winCondition} />
    </div>
  )
}

export default App
