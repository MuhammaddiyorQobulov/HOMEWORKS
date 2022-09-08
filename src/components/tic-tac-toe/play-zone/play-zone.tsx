import React, { useEffect, useState } from 'react'
import './play-zone.scss'
import XIcon from '../icons/x-icon'
import OIcon from '../icons/o-icon'
interface PlayzoneProps {
  steps: [string]
  onChangeSteps: (idx: number, value: string) => void
  playerStep: string
}

const Playzone: React.FC<PlayzoneProps> = ({
  onChangeSteps,
  playerStep,
  steps,
}) => {
  const defaultCeils = new Array(9).fill('')

  return (
    <div className="play-zone">
      <div className="playerStep">Next Player: {playerStep.toUpperCase()}</div>
      <div className="ceils">
        {steps.map((step, idx) => (
          <div
            style={{
              pointerEvents: step.trim() === '' ? 'auto' : 'none',
              cursor: step.trim() === '' ? 'pointer' : 'no-drop',
            }}
            className="ceil"
            onClick={() => onChangeSteps(idx, playerStep === 'x' ? 'x' : 'o')}
            key={idx}
          >
            {step.trim() !== '' &&
              (step === 'x' ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                  <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M224 96C135.6 96 64 167.6 64 256s71.6 160 160 160s160-71.6 160-160s-71.6-160-160-160zM0 256C0 132.3 100.3 32 224 32s224 100.3 224 224s-100.3 224-224 224S0 379.7 0 256z" />
                </svg>
              ))}
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          localStorage.setItem('steps', JSON.stringify([defaultCeils]))
          localStorage.setItem('step', JSON.stringify(0))
        }}
        className="restart-btn"
      >
        Restart
      </button>
    </div>
  )
}

export default Playzone
