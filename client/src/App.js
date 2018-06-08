import React, { Component } from 'react'
import './App.css'
import Quiz from './quiz/Quiz.js'
import Chat from './chat/chat'
import Grid from '@material-ui/core/Grid'

class App extends Component {
  render() {
    return (
      <div>
        <Grid container>
          <Grid item xs={4}>test</Grid>
          <Grid item xs={8}>
            <Quiz />
            <Chat />
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default App