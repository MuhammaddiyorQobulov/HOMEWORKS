import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setValue, restart } from './redux/tic-tac-toe-reducer'
import './base.scss'

interface AppProps {}

const App: React.FC<AppProps> = () => {
  let dispatch = useDispatch()

  const state = useSelector((state: any) => state.tictactoe)

  return (
    <div className="wrapper">
      <div className="container">
        {state.ceils.map((ceil: any, idx: any) => {
          return (
            <div
              style={{ pointerEvents: ceil !== '' ? 'none' : 'auto' }}
              onClick={() => dispatch(setValue(idx))}
              key={idx}
              className="ceil"
            >
              {ceil}
            </div>
          )
        })}
      </div>
      <button
        onClick={() => {
          dispatch(restart())
        }}
      >
        Restart
      </button>
    </div>
  )
}

export default App
