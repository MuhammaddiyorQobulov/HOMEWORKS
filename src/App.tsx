import React from 'react'
import TicTacToe from './components/tic-tac-toe/tic-tac-toe'

interface AppProps {}

const App: React.FC<AppProps> = () => (
  <div>
    <TicTacToe />
  </div>
)

export default App
