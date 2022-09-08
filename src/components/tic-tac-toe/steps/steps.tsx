import React, { useEffect } from 'react'
import './steps.scss'
interface StepsProps {
  steps: any
  onChangeStep: (step: number) => void
}

const Steps: React.FC<StepsProps> = ({ steps, onChangeStep }) => {
  let storageStep = JSON.parse(localStorage.getItem('step')!) || 0

  return (
    <div className="steps">
      {steps.map((item: any, idx: any) => (
        <button
          disabled={storageStep === idx}
          key={idx}
          onClick={() => {
            localStorage.setItem('step', JSON.stringify(idx))
            onChangeStep(idx)
          }}
        >
          Go to {idx === 0 ? 'Game' : 'Move'} {idx === 0 ? 'start' : `#${idx}`}
          {storageStep === idx && ' ( Current ) '}
        </button>
      ))}
    </div>
  )
}

export default Steps
