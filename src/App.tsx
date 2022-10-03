import React, { useState } from 'react'
import Options from './components/options/options'
import Player from './components/player/player'
import cls from './base.module.scss'
interface AppProps {}

const App: React.FC<AppProps> = () => {
  const [state, setState] = useState({
    player1: 0,
    player2: 0,
    currentRole: true,
    first: 0,
    second: 0,
    limit: 30,
  })

  const handleDice = (score: number, role: boolean) => {
    setState({
      ...state,
      [`${role ? 'first' : 'second'}`]:
        score !== 1 ? state[`${role ? 'first' : 'second'}`] + score : 0,
      currentRole: score === 1 ? !state.currentRole : state.currentRole,
    })
  }

  const handleHold = (role: boolean) => {
    setState({
      ...state,
      [`${role ? 'player1' : 'player2'}`]:
        state[`${role ? 'player1' : 'player2'}`] +
        state[`${role ? 'first' : 'second'}`],
      currentRole: !role,
      [`${role ? 'first' : 'second'}`]: 0,
    })
  }
  const handleRestart = () => {
    setState({
      player1: 0,
      player2: 0,
      currentRole: true,
      first: 0,
      second: 0,
      limit: 30,
    })
  }
  const handleLimit = (e: any) => {
    console.log(e.target.value)
    setState({ ...state, limit: Math.floor(e.target.value) })
  }
  return (
    <div className={cls.wrapper}>
      <div className={cls['bg-opacity']}>
        <div
          className={cls.container}
          style={{
            background: `linear-gradient(to ${
              state.currentRole ? 'right' : 'left'
            }, #f7d7d7 50%, #eee 50%)`,
          }}
        >
          <Player
            name="Player 1"
            score={state.player1}
            currentScore={state.first}
            limitScore={state.limit}
          />
          <Options
            onDice={handleDice}
            role={state.currentRole}
            onHold={handleHold}
            onRestart={handleRestart}
            total={[state.player1, state.player2]}
            limit={handleLimit}
            limitScore={state.limit}
          />
          <Player
            name="Player 2"
            score={state.player2}
            currentScore={state.second}
            limitScore={state.limit}
          />
        </div>
      </div>
    </div>
  )
}

export default App
