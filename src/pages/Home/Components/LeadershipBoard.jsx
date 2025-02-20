import { useEffect, useState } from 'react';
import { FaCrown } from 'react-icons/fa';
import { apiCallGet } from '../../../utils/ApiCall';
import Spinner from '../../../components/Spinner';

const LeadershipBoard = () => {
    const [leaderBoardData, setLeaderBoardData] = useState(null);
    const [isLoader, setIsLoader] = useState(false);

    const getLeaderBoard = async () => {
        const data = await apiCallGet('/user/leaderboard');
        setLeaderBoardData(data?.data);
        console.log(data?.data)
    };

    useEffect(() => {
        setIsLoader(true);
        getLeaderBoard();
        setIsLoader(false);
    }, [])

    return (
        <div className='w-[100%] xl:h-[450px] lg:h-[420px] md:h-[350px] flex flex-col items-center justify-between xl:px-24 lg:px-16 md:px-10 px-5'>
            <div className='xl:text-4xl lg:text-3xl md:text-2xl text-xl font-semibold gap-3 items-center flex justify-center'>
                <FaCrown className='text-amber-400' />
                <div className='text-center'>Leadership Board Ranking</div>
                <FaCrown className='text-amber-400' />
            </div>
            <div className='w-full h-full flex  items-center justify-center  rounded-full px-5 py-2 bg-amber-200 shadow-md xl:mt-6 lg:mt-5 md:mt-4 mt-3'>
                {
                    isLoader ? <Spinner /> : <>
                        {
                            leaderBoardData === null ?
                                <div className='w-full h-full items-center justify-center text-2xl'>Cant fetch LeaderBoard Sorry!</div> :
                                <div className='relative md:w-[20%] mb-[70px]'>
                                    <div className='relative top-1/2 lg:w-[100%] md:w-36 w-28 h-full  border-2 hover:scale-105 hover:shadow-2xl  shadow-blur-[3xl] transition-[2s] border-amber-700 xl:p-4 md:p-3 p-2 bg-white rounded-2xl flex flex-col justify-center gap-2'>
                                        <div className='xl:w-14 xl:h-14 lg:w-12 lg:h-12 md:w-11 md:h-11 w-9 h-9 mx-auto flex items-center justify-center  '>
                                            <img className="w-full h-full rounded-full" src={leaderBoardData[0]?.userImage && leaderBoardData[0]?.userImage} alt='image' />
                                        </div>
                                        <div className='text-gray-800 font-semibold lg:text-xl md:text-lg text-base text-center'>{leaderBoardData[0]?.userName && leaderBoardData[0]?.userName}</div>
                                        <div>
                                            <div className='text-gray-900 font-semibold text-center lg:text-base md:text-sm text-[13px]'>Total Points-{leaderBoardData[0]?.totalPoints}</div>
                                        </div>
                                        <div className='absolute top-3 right-2 text-yellow-400'><FaCrown className='text-amber-400 xl:text-3xl lg:text-2xl text-xl' /></div>
                                    </div>
                                    <div className='absolute top-1/2 lg:left-[-110%] md:left-[-130%] left-[-100%] lg:w-[100%] md:w-36 w-28 h-full  border-2 hover:scale-105 hover:shadow-2xl  shadow-blur-[3xl] transition-[2s] border-amber-700 xl:p-4 md:p-3 p-2 bg-white rounded-2xl flex flex-col justify-center gap-2'>
                                        <div className='xl:w-14 xl:h-14 lg:w-12 lg:h-12 md:w-11 md:h-11 w-9 h-9 mx-auto flex items-center justify-center  '>
                                            <img className="w-full h-full rounded-full" src={leaderBoardData[1]?.userImage && leaderBoardData[1]?.userImage} alt='image' />
                                        </div>
                                        <div className='text-gray-800 font-semibold lg:text-xl md:text-lg text-base text-center'>{leaderBoardData[1]?.userName && leaderBoardData[1]?.userName}</div>
                                        <div>
                                            <div className='text-gray-900 font-semibold text-center lg:text-base md:text-sm text-[13px]'>Total Points-{leaderBoardData[1]?.totalPoints}</div>
                                        </div>
                                        <div className='absolute top-3 right-2 text-yellow-400'>
                                            <FaCrown className='text-amber-400 xl:text-3xl lg:text-2xl text-xl' />
                                            <FaCrown className='text-amber-400 xl:text-3xl lg:text-2xl text-xl' />
                                        </div>
                                    </div>
                                    <div className='absolute top-1/2 lg:right-[-110%] md:right-[-130%] right-[-100%] lg:w-[100%] md:w-36 w-28 h-full  border-2 hover:scale-105 hover:shadow-2xl  shadow-blur-[3xl] transition-[2s] border-amber-700 xl:p-4 md:p-3 p-2 bg-white rounded-2xl flex flex-col justify-center gap-2'>
                                        <div className='xl:w-14 xl:h-14 lg:w-12 lg:h-12 md:w-11 md:h-11 w-9 h-9 mx-auto flex items-center justify-center  '>
                                            <img className="w-full h-full rounded-full" src={leaderBoardData[2]?.userImage && leaderBoardData[2]?.userImage} alt='image' />
                                        </div>
                                        <div className='text-gray-800 font-semibold lg:text-xl md:text-lg text-base text-center'>{leaderBoardData[2]?.userName && leaderBoardData[2]?.userName}</div>
                                        <div>
                                            <div className='text-gray-900 font-semibold text-center lg:text-base md:text-sm text-[13px]'>Total Points-{leaderBoardData[2]?.totalPoints}</div>
                                        </div>
                                        <div className='absolute top-3 right-2 text-yellow-400'>
                                            <FaCrown className='text-amber-400 xl:text-3xl lg:text-2xl text-xl' />
                                            <FaCrown className='text-amber-400 xl:text-3xl lg:text-2xl text-xl' />
                                            <FaCrown className='text-amber-400 xl:text-3xl lg:text-2xl text-xl' />
                                        </div>
                                    </div>
                                </div>
                        } </>
                }
            </div>
        </div>
    );
};

export default LeadershipBoard;