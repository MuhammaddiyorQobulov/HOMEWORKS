import React from 'react'
import cls from '../options.module.scss'
interface BtnProps {
  onClick?: () => void
  title: string
  icon: React.ReactNode
  disabled?: boolean
}

const Btn: React.FC<BtnProps> = ({
  onClick,
  title,
  icon,
  disabled = false,
}) => {
  console.log(disabled)

  return (
    <button disabled={disabled} className={cls.option} onClick={onClick}>
      {icon}
      <h1>{title}</h1>
    </button>
  )
}

export default Btn
