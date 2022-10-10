import React from 'react';
import './QuizTopics.css'

const QuizTopics = ({ topic }) => {
    const { name, logo, total } = topic;
    return (
        <div className='quiz-topics mx-auto pb-5'>
            <div className='img-container bg-blue-200'>
                <img src={logo} alt="" />
            </div>
            <div>
                <div className='flex justify-between mt-2'>
                    <div>
                        <p className='font-semibold py-1'>{name}</p>
                    </div>
                    <div>
                        <p className='font-semibold py-1'>Total: {total}</p>
                    </div>
                    <div>
                        <button className='font-semibold bg-blue-500 px-2 py-1 text-white rounded-md'>Start Practice</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuizTopics;