import { Component } from "react";
import { Feedback } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification"

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  handleClickUpdate = (type) => {
    this.setState((prevState) => {
      return {
        [type]: prevState[type] + 1,
      }
    })
  }

  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  }

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const percent = (good / (good + neutral + bad)) * 100;
    return percent > 0 ? ((good / (good + neutral + bad)) * 100).toFixed(2) : 0;
  }


  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);

    return (
      <div>
        <Section title="Please leave feedback">
          <Feedback
            options={options}
            handleClickUpdate={this.handleClickUpdate} />
        </Section>
        {(good + neutral + bad) > 0 ? (
          <Section title="Statistics">
            <Statistics
              countTotalFeedback={this.countTotalFeedback}
              countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage}
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
}

export default App;
