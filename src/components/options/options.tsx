import React from 'react'
import cls from './options.module.scss'
interface OptionsProps {}

const Options: React.FC<OptionsProps> = () => (
  <h1 className={cls.wrapper}>Options Component</h1>
)

export default Options
