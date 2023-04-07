import React from 'react';


export function FeedbackOptions( { options, onLeaveFeedback }) {

  return (
    <div>
    {options.map((option, i) => {
      return (
        <button key={i} option={option} onClick={() => onLeaveFeedback(option)}>{option}</button>
      );
    })}
  </div>
  )
}