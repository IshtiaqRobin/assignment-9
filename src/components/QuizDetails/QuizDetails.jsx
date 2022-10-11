
import React from 'react';
import { toast } from 'react-toastify';
import Quiz from '../Quiz/Quiz';
import './QuizDetails.css';

const QuizDetails = ({ topic }) => {
    const { name, question, correctAnswer, options } = topic;

    const AddToClickHandle = (quiz) => {
        if (quiz === correctAnswer) {
            toast.success("WOW")
        }
        else{
            toast.error("BAD")
        }
    }

    return (
        <div>
            <p>{name}</p>
            <div className='border-solid bg-blue-100 rounded-md border-black my-4 p-4 border w-1/2 mx-auto'>
                <h3 className='text-xl mb-4 font-semibold'>{question}</h3>

                <div className='questions'>
                    {
                        options.map(quiz => <Quiz
                            key={quiz.id}
                            quiz={quiz}
                            AddToClickHandle={AddToClickHandle}
                        >
                        </Quiz>)
                    }

                </div>
            </div>
        </div>
    );
};

export default QuizDetails;