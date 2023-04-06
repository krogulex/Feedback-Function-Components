import React, { Component } from 'react';
import { Notification } from './Notification';

export class Statistics extends Component {

  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props

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
}
