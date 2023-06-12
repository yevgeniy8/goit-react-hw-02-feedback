import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div>
            {options.map((item, index) => {
                return (
                    <button key={index} onClick={onLeaveFeedback}>
                        {item}
                    </button>
                );
            })}
        </div>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
