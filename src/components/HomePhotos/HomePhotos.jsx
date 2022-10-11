import React from 'react';
import './HomePhotos.css';

const HomePhotos = () => {
    return (
        <div className='home-photos grid lg:grid-cols-3 grid-cols-1 gap-12 justify-between mx-auto lg:w-4/5'>
            <div className='sm:mx-auto'>
                <img src="https://www.pinclipart.com/picdir/big/220-2202036_homework-clipart-quiz-quizizz-clipart-png-download.png" alt="" />
            </div>
            <div className='sm:mx-auto'>
                <img src="https://www.pngfind.com/pngs/m/657-6579796_data-big-data-analytics-vector-hd-png-download.png" alt="" />
            </div>
            <div className='sm:mx-auto'>
                <p className='text-3xl font-bold'>Check your knowledge and </p>
                <p className='text-3xl font-bold'><span className='text-sky-700 hover:text-red-600'>observe your reward.</span></p>
            </div>
        </div>
    );
};

export default HomePhotos;