import React from 'react'
import "./App.css"
import Todo from './assets/Todo'
import ServingTime from "./assets/ServingTime"


function App() {
  return (
    <div className="flex justify-center items-center">
      <div className='flex justify-center items-center flex-col mt-12 bg-gradient-to-b from-stone-400 to-stone-600 w-2/4 rounded-lg'>
      <h1 className='uppercase text-5xl font-semibold my-5'>things to do</h1>
      <ServingTime/>
      <Todo/>
    </div>
    </div>
  )
}

export default App
