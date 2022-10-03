import React from 'react'
import cls from '../options.module.scss'
interface BtnProps {
  onClick?: () => void
  title: string
  icon: React.ReactNode
}

const Btn: React.FC<BtnProps> = ({ onClick, title, icon }) => (
  <div className={cls.option} onClick={onClick}>
    {icon}
    <h1>{title}</h1>
  </div>
)

export default Btn
