import React from 'react';
import './Home.css';
import { useLoaderData } from 'react-router-dom';
import QuizTopics from '../QuizTopics/QuizTopics';
import HomePhotos from '../HomePhotos/HomePhotos';

const Home = () => {
    const topics = useLoaderData();
    return (
        <div>
            <HomePhotos></HomePhotos>
            <div className='topics mx-auto my-12 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 w-4/5'>
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