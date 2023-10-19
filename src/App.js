import { useState } from "react";
import { Feedback } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification"

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickUpdate = (type) => {
    switch (type) {
      case 'good':
        return setGood(good + 1);
      case 'neutral':
        return setNeutral(neutral + 1);
      case 'bad':
        return setBad(bad + 1);
    }
  }

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  }

  const countPositiveFeedbackPercentage = () => {
    const percent = (good / (good + neutral + bad)) * 100;
    return percent > 0 ? ((good / (good + neutral + bad)) * 100).toFixed(2) : 0;
  }


  const options = ['good', 'neutral', 'bad'];

  return (
    <div>
      <Section title="Please leave feedback">
        <Feedback
          options={options}
          handleClickUpdate={handleClickUpdate} />
      </Section>
      {(good + neutral + bad) > 0 ? (
        <Section title="Statistics">
          <Statistics
            countTotalFeedback={countTotalFeedback}
            countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
            good={good}
            neutral={neutral}
            bad={bad} />
        </Section>
      ) : (
        <Section title="Statistics">
          <Notification />
        </Section>
      )}
    </div>
  );
}


export default App;
