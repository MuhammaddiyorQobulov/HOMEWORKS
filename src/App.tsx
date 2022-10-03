import React, { useState } from 'react'
import Options from './components/options/options'
import Player from './components/player/player'
import cls from './base.module.scss'
interface AppProps {}

const App: React.FC<AppProps> = () => {
  const [state, setState] = useState()

  return (
    <div className={cls.wrapper}>
      <div className={cls['bg-opacity']}>
        <div className={cls.container}>
          <Player />
          <Options />
          <Player />
        </div>
      </div>
    </div>
  )
}

export default App
