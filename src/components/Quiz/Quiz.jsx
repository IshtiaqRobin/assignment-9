import React from 'react';

const Quiz = ({ quiz, handleAddToCart }) => {

    return (
        <div>
            <label>
                <input onClick={() => handleAddToCart(quiz)} type="radio" name='correctAnswer' value='quiz' />{quiz}
            </label>
        </div>
    );
};

export default Quiz;