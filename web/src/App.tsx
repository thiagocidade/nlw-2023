import { Habit } from "./components/Habit"

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <hr/>
      <Habit completed={3}/>
      <Habit completed={5}/>
      <Habit completed={8}/>
    </div>
  )
}

export default App
