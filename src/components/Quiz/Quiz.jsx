import React from 'react';

const Quiz = ({ quiz }) => {

    return (
        <div>
            <label>
                <input type="radio" name='correctAnswer' value='quiz'/>{quiz}
            </label>
        </div>
    );
};

export default Quiz;