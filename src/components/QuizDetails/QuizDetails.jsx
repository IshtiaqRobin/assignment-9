
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Quiz from '../Quiz/Quiz';
import './QuizDetails.css';

const QuizDetails = ({ topic }) => {
    const { name, question, correctAnswer, options } = topic;

    const handleAddToCart = (quiz) => {
        if (quiz === correctAnswer) {
            toast('Wow...!! Correct answer', {
                position: "top-center",
                autoClose: 500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        else {
            toast.error('Oops...!! Incorrect answer', {
                position: "top-center",
                autoClose: 500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }

    return (
        <div>
            <p>{name}</p>
            <div className='border-solid bg-blue-100 rounded-md border-black my-4 p-4 border w-1/2 mx-auto'>
                <div className='flex justify-between'>
                    <div>
                        <Link><FontAwesomeIcon onClick={handleAddToCart} className='mt-2' icon={faEye}></FontAwesomeIcon></Link>
                    </div>
                    <div>
                        <h3 className='text-xl mb-4 font-semibold'>{question}</h3>
                    </div>
                    <div>

                    </div>
                </div>

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