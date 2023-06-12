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

export default FeedbackOptions;
