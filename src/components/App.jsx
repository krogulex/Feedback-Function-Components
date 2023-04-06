import React, { Component } from 'react';
import { Statistics } from './Statistics';
import { Section } from './Section';
import { FeedbackOptions } from './FeedbackOptions';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = (event) => {

    const option  = event.target.innerText;
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));

  };

  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;

    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const positiveFeedback = Math.round(
      (this.state.good / this.countTotalFeedback()) * 100
    );

    return positiveFeedback;
  };

  render() {
    return (
      <div className="content-box">
        <Section title="Please leave your feedback">
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
         </Section>
      </div>
    );
  }
}
