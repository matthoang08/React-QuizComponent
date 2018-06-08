import React, { Component } from 'react'
import './App.css'
import Quiz from './quiz/Quiz.js'
import Chat from './chat/chat'

class App extends Component {
  render() {
    return (
      <div>
        <Quiz />
        <Chat />
      </div>
    )
  }
}

export default App