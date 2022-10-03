import React from 'react'
import cls from './player.module.scss'
interface PlayerProps {}

const Player: React.FC<PlayerProps> = () => {
  return (
    <div className={cls.player}>
      <div>
        <div className={cls.title}>Player 1</div>
        <span className={cls.score}>0</span>
      </div>
      <div className={cls.ball}>
        <p>current</p>
        <span className={cls['current-score']}>15</span>
      </div>
    </div>
  )
}

export default Player
