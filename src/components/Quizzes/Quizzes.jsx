import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetails from '../QuizDetails/QuizDetails';

const Quizzes = () => {
    const quizzes = useLoaderData();

    return (
        <div>
            <h3 className='text-xl font-bold'>Quiz of <span className='text-red-500'>{quizzes.data.name}</span></h3>
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