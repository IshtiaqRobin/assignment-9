
import { faCircleDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './QuizDetails.css';

const QuizDetails = ({ topic }) => {
    const { id, name, question, correctAnswer, options } = topic;
    return (
        <div>
            <p>{name}</p>
            <div className='border-solid bg-blue-100 rounded-md border-black my-4 p-4 border w-1/2 mx-auto'>
                <h3 className='text-xl mb-4 font-semibold'>{question}</h3>

                <div className='questions'>
                    <div>
                        <FontAwesomeIcon className='text-sky-400' icon={faCircleDot}></FontAwesomeIcon>{options[0]}
                    </div>

                    <div>
                        <FontAwesomeIcon className='text-sky-400' icon={faCircleDot}></FontAwesomeIcon>{options[1]}
                    </div>

                    <div>
                        <FontAwesomeIcon className='text-sky-400' icon={faCircleDot}></FontAwesomeIcon>{options[2]}
                    </div>

                    <div>
                        <FontAwesomeIcon className='text-sky-400' icon={faCircleDot}></FontAwesomeIcon>{options[3]}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default QuizDetails;