import React from 'react';

const Quiz = ({ quiz, id, handleAddToCart }) => {

    return (
        <div>
            <label className='flex justify-between'>
                <div>
                    <input onClick={() => handleAddToCart(quiz)} type="radio" name={id} value='quiz' />
                </div>
                <div>
                    {quiz}
                </div>
                <div>

                </div>
            </label>
        </div>
    );
};

export default Quiz;