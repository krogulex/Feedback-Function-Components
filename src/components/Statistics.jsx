import React from 'react';
import { Notification } from './Notification';


export function Statistics( { good, neutral, bad, total, positivePercentage }) {

  return (
    <div className='statistics'>
      <h2>Statistics</h2>
      {total > 0 ? (
              <div>
              <p>Good: {good}</p>
              <p>Neutral: {neutral}</p>
              <p>Bad: {bad}</p>
              <p>Total: {total}</p>
              <p>Positive feedback: {positivePercentage}%</p>
          </div>
          ) : (
              <Notification message={'No feedback given'}/>
          )}
    </div>
  )
  }