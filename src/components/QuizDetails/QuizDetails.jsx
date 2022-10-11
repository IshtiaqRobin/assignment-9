import React from 'react';

const QuizDetails = ({ topic }) => {
    const { id, question, correctAnswer } = topic;
    return (
        <div>
            <h3>Question: {question}</h3>
        </div>
    );
};

export default QuizDetails;