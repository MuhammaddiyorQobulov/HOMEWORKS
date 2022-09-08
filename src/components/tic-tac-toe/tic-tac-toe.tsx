import React, { useState } from 'react'
import Playzone from './play-zone/play-zone'
import Steps from './steps/steps'
import './tic-tac-toe.scss'
interface TicTacToeProps {}

const defaultSteps = new Array(9).fill('')

!JSON.parse(localStorage.getItem('steps')!) &&
  localStorage.setItem('steps', JSON.stringify([defaultSteps]))

const TicTacToe: React.FC<TicTacToeProps> = () => {
  let storageStep = JSON.parse(localStorage.getItem('step')!) || 0
  const storageSteps = JSON.parse(localStorage.getItem('steps')!)

  const [state, setState] = useState({
    playerStep: storageStep % 2 == 0 ? 'x' : 'o',
    steps: storageSteps,
    step: storageStep,
  })

  const handleSteps = (idx: number, value: string) => {
    let newSteps = [...state.steps]
    newSteps[idx] = value

    localStorage.setItem(
      'steps',
      JSON.stringify([...storageSteps, newSteps].splice(0, storageStep + 2)),
    )
    localStorage.setItem('step', JSON.stringify(++state.step))

    setState({
      ...state,
      steps: newSteps,
      playerStep: value === 'x' ? 'o' : 'x',
    })
  }

  const handleChangeSteps = (step: number) => {
    setState({ ...state, step: step })
  }

  return (
    <div className="container">
      <Playzone
        onChangeSteps={handleSteps}
        steps={state.steps[storageStep]}
        playerStep={state.playerStep}
      />
      <Steps steps={storageSteps} onChangeStep={handleChangeSteps} />
    </div>
  )
}

export default TicTacToe
