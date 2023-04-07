import React, { useState } from 'react';
import { Statistics } from './Statistics';
import { Section } from './Section';
import { FeedbackOptions } from './FeedbackOptions';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = option => {
    if ('good' === option) {
      setGood(good + 1);
    }
    if ('neutral' === option) {
      setNeutral(neutral + 1);
    }
    if ('bad' === option) {
      setBad(bad + 1);
    }
  };

  const countTotalFeedback = () => {
    const total = good + neutral + bad;

    return total;
  };

  const   countPositiveFeedbackPercentage = () => {
    const positiveFeedback = Math.round(
      (good / countTotalFeedback()) * 100
    );

    return positiveFeedback;
  };

  return (
    <div className="content-box">
      <Section title="Please leave your feedback">
        <FeedbackOptions
          options={Object.keys({ good, neutral, bad })}
          onLeaveFeedback={onLeaveFeedback}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </div>
  );
};