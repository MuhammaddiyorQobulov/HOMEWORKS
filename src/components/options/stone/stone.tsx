import React from 'react'
import './stone.scss'
import img1 from '../../../assets/images/dice-1.png'
import img2 from '../../../assets/images/dice-2.png'
import img3 from '../../../assets/images/dice-3.png'
import img4 from '../../../assets/images/dice-4.png'
import img5 from '../../../assets/images/dice-5.png'
import img6 from '../../../assets/images/dice-6.png'
interface StoneProps {
  number: number
}

const Stone: React.FC<StoneProps> = ({ number }) => {
  const stones = [img1, img2, img3, img4, img5, img6]

  return (
    <div
      className="stone"
      style={{ backgroundImage: `url(${stones[number - 1]})` }}
    ></div>
  )
}

export default Stone
