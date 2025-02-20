import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../utils/Context';
import { apiCall, apiCallGet } from '../../utils/ApiCall';

const Profile = () => {
    // Mock user data
    const { user } = useContext(DataContext);
    const [userProgress, setUserProgress] = useState(null)
    const [prevQuizzes, setPrevQuizzes] = useState(null);

    const getProgress = async () => {
        try {
            const response = await apiCallGet('/user/getUserProgress');
            if (response?.success) {
                setUserProgress(response?.languageProgress);
            }
        } catch (error) {
            console.error('Error fetching user progress:', error);
        }
    };

    const getPrevQuiz = async () => {
        try {
            const data = {
                skip: 0,
                limit: 10
            };
            const response = await apiCall('/user/prevQuizes', data);
            setPrevQuizzes(response?.data);
        } catch (error) {
            console.error('Error fetching previous quizzes:', error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            await getProgress();
            await getPrevQuiz();
        };

        fetchData();
    }, []);


    return (
        <div className="xl:mb-28 lg:mb-20 md:mb-16 mb-12 lg:w-[80%] mx-auto xl:px-24 lg:px-16 md:px-10 px-5 my-8 flex flex-col lg:gap-5 gap-4">
            {/* User Detail */}
            <div className="bg-gray-100 xl:p-6 lg:p-5 p-4 rounded-md shadow-md">
                <h2 className="xl:text-3xl md:text-2xl text-xl font-bold xl:mb-10 lg:mb-8 md:mb-6 mb-5 text-center">User Details</h2>
                <div className='flex md:flex-row flex-col md:gap-0 gap-3 items-start md:justify-around md:items-center xl:mb-4 md:mb-3 mb-2'>
                    <div className="flex items-center">
                        <img className="rounded-full xl:w-20 xl:h-20 lg:h-16 lg:w-16 md:h-14 md:w-14 w-12 h-12 mr-4" src={user?.image} alt="User Avatar" />
                        <div>
                            <p className="xl:text-2xl md:text-xl text-lg font-semibold">{user?.username}</p>
                            <p className="text-gray-600 font-medium">{user?.email}</p>
                        </div>
                    </div>
                    <div className='flex flex-col lg:text-lg text-base font-semibold'>
                        <p className="text-black">Full Name: {`${user?.profile?.firstName} ${user?.profile?.lastName}`}</p>
                        <p className="text-black">Date of Birth: {new Date(user?.profile?.dateOfBirth).toLocaleDateString()}</p>
                    </div>
                </div>
            </div>

            {/* User Progress */}
            <div className="bg-gray-100 xl:p-6 lg:p-5 p-4 rounded-md shadow-md">
                <h2 className="xl:text-3xl md:text-2xl text-xl font-bold xl:mb-10 lg:mb-8 md:mb-6 mb-5 text-center">User Progress</h2>
                <ul className='flex justify-around gap-5 md:flex-wrap flex-nowrap md:flex-row flex-col xl:mb-4 md:mb-3 mb-2'>
                    {
                        userProgress === null ? <div>Nothing to Show</div> :
                            <> {userProgress?.map((progressItem) => (
                                <li key={progressItem?._id} className="mb-2 
             ">
                                    <p className="font-semibold xl:text-3xl md:text-2xl text-xl">{progressItem?.language}</p>
                                    <p className='font-semibold lg:text-lg text-base text-gray-500'>Proficiency Level: {progressItem?.proficiencyLevel}</p>
                                    <p className='font-semibold lg:text-lg text-base text-gray-500'>Total Points: {progressItem?.totalPoints}</p>
                                </li>
                            ))}
                            </>
                    }
                </ul>
            </div>

            {/* User Previous quizzes */}
            <div className="bg-gray-100 xl:p-6 lg:p-5 p-4 rounded-md shadow-md">
                <h2 className="xl:text-3xl md:text-2xl text-xl font-bold xl:mb-10 lg:mb-8 md:mb-6 mb-5 text-center">User's Previous Quizzes</h2>
                <ul>
                    {
                        prevQuizzes === null ? <div className='text-center'>No Previous Quiz Available</div> :
                            <>
                                {prevQuizzes?.map((quiz) => (
                                    <li key={quiz?._id} className="lg:mb-4 mb-3  w-[95%] mx-auto flex md:gap-0 gap-3 md:flex-row flex-col md:justify-between md:items-center bg-gray-300 lg:p-5 p-4 items-start rounded-lg hover:shadow-md hover:translate-y-[-2px] transition-[2s]">
                                        <div className=''>
                                            <p className="font-semibold xl:text-3xl md:text-2xl text-xl">{quiz?.title}</p>
                                            <p className='font-semibold text-gray-600 lg:text-lg text-base'>Score: {quiz?.score}</p>
                                        </div>
                                        <div>
                                            <p className='lg:text-lg text-base font-semibold text-black'>Completed At:</p>
                                            <p className='lg:text-lg text-base font-semibold text-gray-600'>{new Date(quiz?.completedAt).toLocaleString()}</p>
                                        </div>
                                    </li>
                                ))}
                            </>
                    }
                </ul>
            </div>
            {/*Publish Your quiz  */}
        </div>

    );
};

export default Profile;