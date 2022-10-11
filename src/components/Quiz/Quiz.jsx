import React from 'react';

const Quiz = ({ quiz, AddToClickHandle }) => {

    return (
        <div>
            <label>
                <input onClick={() => AddToClickHandle(quiz)} type="radio" name='correctAnswer' value='quiz' />{quiz}
            </label>
        </div>
    );
};

export default Quiz;