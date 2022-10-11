import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetails from '../QuizDetails/QuizDetails';

const Quizzes = () => {
    const quizzes = useLoaderData();

    return (
        <div>
            {
                quizzes.data.questions.map(topic => <QuizDetails
                    key={topic.id}
                    topic={topic}
                ></QuizDetails>)
            }

        </div>
    );
};

export default Quizzes;