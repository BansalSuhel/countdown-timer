import React from 'react'
import { addLeadingZero } from '../utils/util'

const TimerCard = ({ value, label }) => (
  <div className='card-wrapper'>
    <div className='card'>
      <span className='card-value'>{addLeadingZero(value)}</span>
    </div>
    <span className='card-label'>{label}</span>
  </div>
)

export default TimerCard
