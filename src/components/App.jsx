import React from 'react';
// import Feedback from './Feedback/Feedback';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export class App extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    countTotalFeedback = () => {
        return this.state.good + this.state.neutral + this.state.bad;
    };

    countPositiveFeedbackPercentage = () => {
        return Math.round((this.state.good / this.countTotalFeedback()) * 100);
    };

    handleChangeFeedback = event => {
        this.setState(prevState => {
            return {
                [event.target.textContent]:
                    prevState[event.target.textContent] + 1,
            };
        });
    };

    render() {
        return (
            <div
            // style={{
            //     height: '100vh',
            //     display: 'flex',
            //     justifyContent: 'center',
            //     alignItems: 'center',
            //     fontSize: 40,
            //     color: '#010101',
            // }}
            >
                <Section title="Statistics">
                    <FeedbackOptions
                        options={['good', 'neutral', 'bad']}
                        onLeaveFeedback={this.handleChangeFeedback}
                    />
                </Section>

                <Section title="Please leave feedback">
                    {this.countTotalFeedback() ? (
                        <Statistics
                            good={this.state.good}
                            neutral={this.state.neutral}
                            bad={this.state.bad}
                            total={this.countTotalFeedback()}
                            positivePercentage={this.countPositiveFeedbackPercentage()}
                        />
                    ) : (
                        <Notification message="There is no feedback"></Notification>
                    )}
                </Section>

                {/* <Feedback options={['good', 'neutral', 'bad']} /> */}
            </div>
        );
    }
}
