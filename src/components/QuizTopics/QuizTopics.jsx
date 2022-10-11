import React from 'react';
import { Link } from 'react-router-dom';
import './QuizTopics.css'
import { toast } from 'react-toastify';

const QuizTopics = ({ topic }) => {
    const { id, name, logo, total } = topic;

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
                    <Link to={`/topic/${id}`}><button className='text-lg text-white font-semibold bg-sky-600 w-full rounded-md p-1 mt-2' >Start Practice</button></Link>
                </div>
            </div>
        </div >
    );
};

export default QuizTopics;