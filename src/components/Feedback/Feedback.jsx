import React from 'react';

class Feedback extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    handleChangeFeedback = event => {
        this.setState(prevState => {
            return {
                [event.target.textContent]:
                    prevState[event.target.textContent] + 1,
            };
        });
    };

    countTotalFeedback = () => {
        return this.state.good + this.state.neutral + this.state.bad;
    };

    countPositiveFeedbackPercentage = () => {
        return Math.round(
            (this.state.good /
                (this.state.good + this.state.neutral + this.state.bad)) *
                100
        );
    };

    render() {
        return (
            <div>
                <p>Please leave feedback</p>
                {this.props.options.map((item, index) => {
                    return (
                        <button key={index} onClick={this.handleChangeFeedback}>
                            {item}
                        </button>
                    );
                })}

                <p>Statistics</p>
                <div>
                    <p>Good: {this.state.good}</p>
                    <p>Neutral: {this.state.neutral}</p>
                    <p>Bad: {this.state.bad}</p>
                    <p>Total: {this.countTotalFeedback()}</p>
                    <p>
                        Positive feedback:{' '}
                        {this.countPositiveFeedbackPercentage()
                            ? this.countPositiveFeedbackPercentage()
                            : 0}
                        %
                    </p>
                </div>
            </div>
        );
    }
}

export default Feedback;
