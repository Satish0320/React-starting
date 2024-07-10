import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos, settodos] = useState([{
    title : "go to gym",
    des : "go to gym 7-9",
    completed : true
  },{
    title : "study",
    des : "from 11-3",
    completed : false
  }])

function Addtodos(){
  settodos([...todos,{
    title : "new todos",
    des : "new des"
  }])
}

  return (
 <div>
    <button onClick={Addtodos}>Add a random toda</button>
    {todos.map((todos)=>{
      return<Todo title = {todos.title} des = {todos.des}/>
    })}
 </div>
  )
}

function Todo(props){


  return (
  <div>
    <h1>{props.title}</h1>
    <h2>{props.des}</h2>
  </div>
  )
}

export default App
