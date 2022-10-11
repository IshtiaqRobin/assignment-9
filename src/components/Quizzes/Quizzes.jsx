
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Quizzes = () => {
    const quizzes = useLoaderData();
    console.log(quizzes);
    return (
        <div>
            <h3>This is quiz.{quizzes.length}</h3>
            {
                quizzes.map(quiz => <Quiz
                    key={quiz.id}
                    quiz={quiz}
                ></Quiz>)
            }
        </div>
    );
};

export default Quizzes;