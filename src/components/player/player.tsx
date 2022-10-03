import React from 'react'
import cls from './player.module.scss'
interface PlayerProps {
  name: string
  score: number
  currentScore: number
  limitScore: number
}

const Player: React.FC<PlayerProps> = ({
  name,
  score,
  currentScore,
  limitScore = 30,
}) => {
  return (
    <div className={cls.player}>
      <div>
        <div className={cls.title}>
          {score >= limitScore ? 'Winner !!!' : name}
        </div>
        <span className={cls.score}>{score}</span>
      </div>
      <div className={cls.ball}>
        <p>current</p>
        <span className={cls['current-score']}>{currentScore}</span>
      </div>
    </div>
  )
}

export default Player
