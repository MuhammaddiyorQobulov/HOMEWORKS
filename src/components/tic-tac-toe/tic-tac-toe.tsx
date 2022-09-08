import React, { useEffect, useState } from 'react'
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
    console.log(state.step)
    console.log(storageStep)

    let newSteps = [...state.steps[state.step]]
    newSteps[idx] = value
    localStorage.setItem(
      'steps',
      JSON.stringify([...state.steps, newSteps].splice(0, state.step + 2)),
    )
    localStorage.setItem('step', JSON.stringify(++state.step))

    setState({
      ...state,
      steps: [...state.steps.splice(0, state.step), newSteps],
      playerStep: storageStep % 2 === 0 ? 'o' : 'x',
    })
  }

  const handleChangeSteps = (step: number) => {
    setState({ ...state, step, playerStep: step % 2 === 0 ? 'x' : 'o' })
  }

  return (
    <div className="container">
      <Playzone
        onChangeSteps={handleSteps}
        steps={state.steps[state.step]}
        playerStep={state.playerStep}
      />
      <Steps
        steps={state.steps}
        onChangeStep={handleChangeSteps}
        step={state.step}
      />
    </div>
  )
}

export default TicTacToe
