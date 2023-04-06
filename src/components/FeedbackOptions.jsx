import React, { Component } from 'react';

export class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;

    return (
      <div>
        {options.map((option, i) => {
          return (
            <button key={i} option={option} onClick={onLeaveFeedback}>{option}</button>
          );
        })}
      </div>
    );
  }
}