import React from 'react';

const Quiz = ({ quiz, id, handleAddToCart }) => {

    return (
        <div>
            <label>
                <input onClick={() => handleAddToCart(quiz)} type="radio" name={id} value='quiz' />{quiz}
            </label>
        </div>
    );
};

export default Quiz;