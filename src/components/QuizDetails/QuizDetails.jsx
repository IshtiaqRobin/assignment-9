
import React from 'react';
import Quiz from '../Quiz/Quiz';
import './QuizDetails.css';

const QuizDetails = ({ topic }) => {
    const { name, question, correctAnswer, options } = topic;

    // if(ques){
    //     correctAnswer === 
    // }

    return (
        <div>
            <p>{name}</p>
            <div className='border-solid bg-blue-100 rounded-md border-black my-4 p-4 border w-1/2 mx-auto'>
                <h3 className='text-xl mb-4 font-semibold'>{question}</h3>

                <div className='questions'>
                    {
                        options.map(quiz => <Quiz
                            quiz={quiz}
                        >
                        </Quiz>)
                    }

                </div>
            </div>
        </div>
    );
};

export default QuizDetails;