
import React from 'react';
import { toast } from 'react-toastify';
import Quiz from '../Quiz/Quiz';
import './QuizDetails.css';

const QuizDetails = ({ topic }) => {
    const { name, question, correctAnswer, options } = topic;

    const handleAddToCart = (quiz) => {
        if (quiz === correctAnswer) {
            toast.success("WOW...!! Correct Answer")
        }
        else {
            toast.error("Oops..!! Incorrect Answer")
        }
    }

    return (
        <div>
            <p>{name}</p>
            <div className='border-solid bg-blue-100 rounded-md border-black my-4 p-4 border w-1/2 mx-auto'>
                <h3 className='text-xl mb-4 font-semibold'>{question}</h3>

                <div className='questions grid sm:grid-cols-1 lg:grid-cols-2'>
                    {
                        options.map((quiz) => <Quiz
                            key={quiz.toString()} value={quiz}
                            quiz={quiz}
                            handleAddToCart={handleAddToCart}
                        >
                        </Quiz>)
                    }

                </div>
            </div>
        </div >
    );
};

export default QuizDetails;