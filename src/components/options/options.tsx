import React, { useState } from 'react'
import Stone from './stone/stone'
import Btn from './btn/btn'
import cls from './options.module.scss'
interface OptionsProps {
  onDice: (num1: number, role: boolean) => void
  role: boolean
  onHold: (role: boolean) => void
  onRestart: () => void
}

const Options: React.FC<OptionsProps> = ({
  onDice,
  role,
  onHold,
  onRestart,
}) => {
  const [state, setState] = useState({ num1: 1 })

  const randomStone = () => {
    const num1 = Math.floor(Math.random() * 6) + 1
    onDice(num1, role)
    setState({
      ...state,
      num1,
    })
  }

  return (
    <div className={cls.options}>
      <Btn
        onClick={onRestart}
        icon={<i className="fa-thin fa-plus"></i>}
        title="New Game"
      />
      <Stone number={state.num1} />
      <Btn
        icon={<i className="fa-solid fa-spinner"></i>}
        title="ROLL DICE"
        onClick={() => randomStone()}
      />
      <Btn
        onClick={() => onHold(role)}
        icon={<i className="fa-solid fa-download"></i>}
        title="HOLD"
      />
    </div>
  )
}

export default Options
