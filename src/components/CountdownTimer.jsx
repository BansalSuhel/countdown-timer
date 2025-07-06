import React, { useEffect, useState, useMemo } from 'react'
import TimerCard from './TimerCard'
import Socials from './Socials'
import { calculateTimeLeft } from '../utils/util'

import './CountdownTimer.css'

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({})

  const targetDate = useMemo(() => {
    const date = new Date()
    date.setDate(date.getDate() + 14)
    return date
  }, [])

  useEffect(() => {
    setTimeLeft(calculateTimeLeft(targetDate))

    const intervalId = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate))
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className='container'>
      <h1>WE'RE LAUNCHING SOON</h1>
      <div className='timer'>
        <TimerCard value={timeLeft.days || 0} label='Days' />
        <TimerCard value={timeLeft.hours || 0} label='Hours' />
        <TimerCard value={timeLeft.minutes || 0} label='Minutes' />
        <TimerCard value={timeLeft.seconds || 0} label='Seconds' />
      </div>

      <Socials />

      <img
        src='/assets/pattern-hills.svg'
        alt='Hills background'
        className='footer-hills'
      />
    </div>
  )
}

export default CountdownTimer
