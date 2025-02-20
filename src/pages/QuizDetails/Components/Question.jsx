import React from 'react';

const Question = ({ question, index, selectedOptions, handleOptionSelect }) => {
    return (
        <li key={index} className="xl:mb-10 lg:mb-7 md:mb-6 mb-5">
            <p className='xl:text-2xl lg:text-xl text-lg text-center '>({Number(index) + 1}){question?.text}</p>
            <div className="grid grid-cols-2 gap-4 xl:mt-5 md:mt-4 mt-3 lg:w-[50%] md:w-[60%] mx-auto">
                {question?.options?.map((option, optionIndex) => (
                    <label key={optionIndex} className={`mb-2 xl:py-3 lg:py-[10px] py-2 px-3 border-2 w-full flex items-center justify-start cursor-pointer rounded-lg ${selectedOptions?.find((q) => (q?.selectedOption === option && q?.questionId == question?._id)) ? 'bg-green-600' : ''} hover:bg-green-600`}>
                        <input
                            type="radio"
                            name={`question_${question?._id}`}
                            value={optionIndex}
                            checked={selectedOptions?.find((q) => (q?.selectedOption === option && q?.questionId == question?._id))}
                            onChange={() => handleOptionSelect(question?._id, option)}
                            className="mr-2"
                        />
                        {option}
                    </label>
                ))}
            </div>
        </li>
    );
};

export default Question;