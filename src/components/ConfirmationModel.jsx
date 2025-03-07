import React from 'react';
import { MdCancel } from 'react-icons/md';

const ConfirmationModel = ({ setOpenConfirmation, navigateToQuiz }) => {
    const onCancel = () => {
        setOpenConfirmation(false);
    }
    return (
        <div className="fixed z-10 inset-0 bg-opacity-80 bg-black flex justify-center items-center">
            <div className="relative text-black bg-white w-full max-w-md justify-evenly space-y-5 p-6 flex flex-col rounded-2xl border">
                <button
                    onClick={onCancel}
                >
                    <MdCancel className="absolute top-2 right-2 text-black" size={30} />
                </button>
                <div className="xl:text-4xl lg:text-3xl md:text-2xl text-xl font-semibold mb-2">Quiz Confirmation</div>
                <p className="mb-4">
                    Are you sure you want to start the quiz? Please note the following instructions:
                </p>
                <ul className="list-disc ml-6 mb-4">
                    <li>The quiz duration is 30 minutes.</li>
                    <li>Make sure you have a stable internet connection.</li>
                    <li>You cannot pause or restart the quiz once started.</li>
                    {/* Add more instructions as needed */}
                </ul>
                <div className="flex gap-4">
                    <button
                        className="bg-green-700 font-semibold text-white rounded-lg px-8 py-2 w-[50%]"
                        onClick={navigateToQuiz}
                    >
                        Yes
                    </button>
                    <button
                        className="bg-red-700 font-semibold text-white rounded-lg px-8 py-2 w-[50%]"
                        onClick={onCancel}
                    >
                        No
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModel;