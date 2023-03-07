import { useState, useEffect } from 'react';
import { Layout } from './App.styled';
import { Section, FeedbackOptions, Statistics, Notification } from 'components';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [totalFeedback, setTotalFeedback] = useState(0);
  const [feedbackPercentage, setFeedbackPercentage] = useState(0);

  const addFeedback = e => {
    const { id } = e.target;
    switch (id) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        throw new Error('Unsupported feedback option');
    }
  };

  useEffect(() => {
    const total = good + neutral + bad;
    setTotalFeedback(() => total);
    setFeedbackPercentage(() => Number(((good / total) * 100).toFixed(0)));
  }, [bad, good, neutral]);

  return (
    <Layout>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          addFeedback={addFeedback}
        ></FeedbackOptions>
      </Section>

      <Section title="Statistics">
        {totalFeedback ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={feedbackPercentage}
          ></Statistics>
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </Layout>
  );
}
