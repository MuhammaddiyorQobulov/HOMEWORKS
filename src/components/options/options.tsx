import React, { ChangeEventHandler, useState } from 'react'
import Stone from './stone/stone'
import Btn from './btn/btn'
import cls from './options.module.scss'
interface OptionsProps {
  onDice: (num1: number, role: boolean) => void
  role: boolean
  onHold: (role: boolean) => void
  onRestart: () => void
  total: any
  limitScore: number
  limit: (a: string) => void
}

const Options: React.FC<OptionsProps> = ({
  onDice,
  role,
  onHold,
  onRestart,
  total,
  limit,
  limitScore,
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

  const input = React.useRef(null)

  return (
    <div className={cls.options}>
      <Btn
        onClick={onRestart}
        icon={<i className="fa-thin fa-plus"></i>}
        title="New Game"
      />
      <Stone number={state.num1} />
      <Btn
        disabled={
          total[0] >= limitScore || total[1] >= limitScore ? true : false
        }
        icon={<i className="fa-solid fa-spinner"></i>}
        title="ROLL DICE"
        onClick={() => randomStone()}
      />
      <Btn
        disabled={total[0] >= limitScore || total[1] >= limitScore}
        onClick={() => onHold(role)}
        icon={<i className="fa-solid fa-download"></i>}
        title="HOLD"
      />
      <input type="number" ref={input} onChange={(e: any) => limit(e)} />
    </div>
  )
}

export default Options
