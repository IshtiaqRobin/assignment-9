import React from 'react';
import './Home.css';
import { useLoaderData } from 'react-router-dom';
import QuizTopics from '../QuizTopics/QuizTopics';

const Home = () => {
    const topics = useLoaderData();
    return (
        <div>
            <div>
                <h3 className='text-3xl'>This is Home page...!!</h3>
            </div>
            <div className='topics mx-auto grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 w-4/5'>
                {
                    topics?.data?.map(topic => <QuizTopics
                        key={topic.id}
                        topic={topic}
                    ></QuizTopics>)
                }
            </div>
        </div>
    );
};

export default Home;