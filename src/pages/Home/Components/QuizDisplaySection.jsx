import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { DataContext } from '../../../utils/Context';
import { toast } from 'react-toastify';
import ConfirmationModel from '../../../components/ConfirmationModel';

const QuizDisplaySection = ({ id, title, description, language, questionCount }) => {
    const [openConfirmation, setOpenConfirmation] = useState(false);
    const navigate = useNavigate();
    const { isLoggedIn } = useContext(DataContext)
    const handleNavigate = () => {
        setOpenConfirmation(true);
    }
    const navigateToQuiz = () => {
        if (isLoggedIn) {
            navigate(`/quiz/${id}`)
        } else {
            toast.error("Please Login First")
            setOpenConfirmation(false)
        }
    }
    return (
        <>
            {
                openConfirmation ? <ConfirmationModel setOpenConfirmation={setOpenConfirmation} navigateToQuiz={navigateToQuiz} /> : <div></div>
            }
            <div className='shadow-md w-full hover:scale-105 cursor-pointer hover:shadow-2xl transition-[2s] mx-auto bg-amber-200 flex md:flex-row flex-col md:items-center md:justify-between text-black xl:p-8 lg:p-7 md:p-6 p-5 rounded-lg' onClick={handleNavigate}>
                <div>
                    <h2 className='xl:text-3xl lg:text-2xl md:text-xl text-lg font-bold xl:mb-4 lg:mb-3 mb-2'>{title}</h2>
                    <p className='xl:text-lg md:text-base text-sm mb-3'>{description}</p>
                </div>
                <div className='flex flex-col md:items-center md:justify-between'>
                    <p className='xl:text-xl lg:text-lg text-base  font-semibold'>{`Language: ${language}`}</p>
                    <p className='xl:text-xl lg:text-lg text-base font-semibold'>{`Question Count: ${questionCount}`}</p>
                </div>
            </div>
        </>
    );
};

export default QuizDisplaySection;
