import React, { useState } from 'react';
import QuizChallengeSection from './QuizChallengeSection';
import bangla from "../../../assets/Image/bangla.jpg";
import english from "../../../assets/Image/english.jpg";
import france from "../../../assets/Image/france.jpg";
import hindi from "../../../assets/Image/hindi.jpeg";
import russian from "../../../assets/Image/russian.png";
import spanish from "../../../assets/Image/spanish.jpg";
const QuizLanguage = () => {
    const [filter, setFilter] = useState('');
    // const generateContainerStyle = (img) => {
    //     return {
    //         background: `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url('${img}') lightgray 50% / cover no-repeat`,
    //         backdropFilter: 'blur(2px)',
    //     };
    // };

    return (
        <div className='xl:px-24 lg:px-16 md:px-10 px-5 xl:mb-28 lg:mb-24 md:mb-20 mb-14'>
            <div className='flex flex-col items-center gap-5 justify-end '>
                <div className='xl:text-4xl lg:text-3xl md:text-2xl text-xl font-semibold'>Select Languages</div>
                <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 xl:gap-5 lg:gap-4 gap-3 mx-auto'>
                    <div className='hover:scale-105 hover:shadow-2xl transition-[2s]' onClick={() => setFilter('BANGLA')}>
                        <img className='rounded-2xl h-full shadow-md' src={bangla} alt="bangla" />
                    </div>
                    <div className='hover:scale-105 hover:shadow-2xl transition-[2s]' onClick={() => setFilter('ENGLISH')}>
                        <img className='rounded-2xl h-full shadow-md' src={english} alt="english" />
                    </div>
                    <div className='hover:scale-105 hover:shadow-2xl transition-[2s]' onClick={() => setFilter('HINDI')}>
                        <img className='rounded-2xl h-full shadow-md' src={hindi} alt="hindi" />
                    </div>
                    <div className='hover:scale-105 hover:shadow-2xl transition-[2s]' onClick={() => setFilter('FRENCH')}>
                        <img className='rounded-2xl h-full shadow-md' src={france} alt="france" />
                    </div>
                    <div className='hover:scale-105 hover:shadow-2xl transition-[2s]' onClick={() => setFilter('RUSSIAN')}>
                        <img className='rounded-2xl h-full shadow-md' src={russian} alt="russian" />
                    </div>
                </div>
            </div>
            {/* QUiz Display */}

            <QuizChallengeSection filter={filter} />

        </div >
    );
};

export default QuizLanguage;