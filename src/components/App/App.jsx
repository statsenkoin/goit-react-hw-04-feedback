import React, { Component } from 'react';
import { Layout } from './App.styled';
import { Section, FeedbackOptions, Statistics, Notification } from 'components';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  totalFeedback = 0;
  positiveFeedbackPercentage = 0;

  addFeedback = event => {
    const { id } = event.target;
    this.setState(prevState => {
      return { [id]: prevState[id] + 1 };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    this.totalFeedback = good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    this.positiveFeedbackPercentage = Number(
      ((this.state.good / this.totalFeedback) * 100).toFixed(0)
    );
  };

  render() {
    const { good, neutral, bad } = this.state;

    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();

    return (
      <Layout>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.addFeedback}
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          {this.totalFeedback ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.totalFeedback}
              positivePercentage={this.positiveFeedbackPercentage}
            ></Statistics>
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </Layout>
    );
  }
}

export { App };
