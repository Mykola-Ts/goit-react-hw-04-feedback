import { useState } from 'react';
import { Layout } from './Layout';
import { GlobalStyle } from './GlobalStyle';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Wrapper } from './App.styled';
import { FeedbackRating } from './Rating/Rating';

export const App = () => {
  const [feedbackOptions, setFeedbackOptions] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const { good, neutral, bad } = feedbackOptions;

  const countTotalFeedback = () => {
    return Object.values(feedbackOptions).reduce((prevValue, number) => {
      return prevValue + number;
    }, 0);
  };

  const totalFeedback = countTotalFeedback();

  const countPositiveFeedbackPercentage = () =>
    `${Math.round((good / totalFeedback) * 100) || 0}%`;

  const onLeaveFeedback = option => {
    setFeedbackOptions(prevState => ({
      ...prevState,
      [option]: prevState[option] + 1,
    }));
  };

  const countRaiting = () =>
    (((good * 1 + neutral * 0.5 + bad * 0) / totalFeedback) * 5).toFixed(1);

  return (
    <Layout>
      <Wrapper>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(feedbackOptions)}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {totalFeedback ? (
            <>
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={totalFeedback}
                positivePercentage={countPositiveFeedbackPercentage()}
              />
              <Section title="Rating">
                <FeedbackRating rating={countRaiting()} />
              </Section>
            </>
          ) : (
            <Notification text="There is no feedback" />
          )}
        </Section>
      </Wrapper>

      <GlobalStyle />
    </Layout>
  );
};
