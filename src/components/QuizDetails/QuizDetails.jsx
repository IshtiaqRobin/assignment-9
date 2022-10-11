
import { faCircleDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const QuizDetails = ({ topic }) => {
    const { id, name, question, correctAnswer, options } = topic;
    return (
        <div>
            <p>{name}</p>
            <div className='border-solid border-2 w-1/2 mx-auto'>
                <h3>{question}</h3>
                <div className='grid grid-cols-2 gap-4 w-1/2 mx-auto'>
                    <div className='border-black border-solid border-2 rounded-sm px-1'><FontAwesomeIcon className='text-sky-400' icon={faCircleDot}></FontAwesomeIcon>{options[0]}</div>
                    <div className='border-black border-solid border-2 rounded-sm px-1'><FontAwesomeIcon className='text-sky-400' icon={faCircleDot}></FontAwesomeIcon>{options[1]}</div>
                    <div className='border-black border-solid border-2 rounded-sm px-1'><FontAwesomeIcon className='text-sky-400' icon={faCircleDot}></FontAwesomeIcon>{options[2]}</div>
                    <div className='border-black border-solid border-2 rounded-sm px-1'><FontAwesomeIcon className='text-sky-400' icon={faCircleDot}></FontAwesomeIcon>{options[3]}</div>
                </div>
            </div>

        </div>
    );
};

export default QuizDetails;