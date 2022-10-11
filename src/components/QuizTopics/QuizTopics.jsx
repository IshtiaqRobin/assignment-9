import React from 'react';
import { useNavigate } from 'react-router-dom';
import './QuizTopics.css'

const QuizTopics = ({ topic, quiz }) => {
    const { name, logo, total } = topic;
    const { id } = quiz;
    
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/quiz/${id}`);
    }

    return (
        <div className='quiz-topics mx-auto pb-5'>
            <div className='img-container bg-sky-600'>
                <img src={logo} alt="" />
            </div>
            <div>
                <div className='flex justify-between mt-2'>
                    <div>
                        <p className='font-semibold py-1'>{name}</p>
                    </div>
                    <div>
                        <p className='font-semibold py-1'>Total Quiz: {total}</p>
                    </div>
                </div>
                <div>
                    <button onClick={handleNavigate} className='font-semibold bg-blue-600 w-full px-2 py-1 my-2 text-white rounded-md'>Start Practice</button>
                </div>
            </div>
        </div>
    );
};

export default QuizTopics;