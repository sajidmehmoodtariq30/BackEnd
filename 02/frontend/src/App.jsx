import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [jokes, setJokes] = useState([])
  useState(() => {
    axios.get('/api/jokes')
      .then((res) => {
        setJokes(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  },[jokes])

  return (
    <>
      <div>
        <h1>Hello Sajid</h1>
        <p>Jokes: {jokes.length}</p>
        {
          jokes.map((joke, index) => (
            <div key={joke.id}>
              <h3>{joke.title}</h3>
              <h4>{joke.content}</h4>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default App
