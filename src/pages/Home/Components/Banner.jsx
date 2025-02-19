import { FcIdea } from 'react-icons/fc';
import banner from '../../../assets/Image/Home_bannerPhoto.png';

const Banner = () => {
    return (
        <div className='flex flex-row items-center xl:gap-24 lg:gap-16 md:gap-10 md:py-0 py-4'>
            <div className='lg:w-[50%] md:w-[62%] xl:pl-24 lg:pl-16 md:pl-10 pl-5 flex flex-col xl:gap-12 lg:gap-8 md:gap-4 gap-4'>
                <h1 className='xl:text-7xl lg:text-5xl md:text-3xl text-2xl font-semibold flex flex-col xl:gap-5 lg:gap-3 gap-[2px] items-center'>Welcome to <span className="text-amber-400 font-bold flex flew-row items-center lg:gap-2 gap-1"><FcIdea className='' />Quiz Master</span></h1>
                <p className='text-neutral-700 font-medium xl:text-base lg:text-[15px] text-sm'>Quiz Master is an interactive online quiz platform designed to test and enhance your knowledge across various topics. Whether you're preparing for exams, challenging friends, or just having fun, Quiz Master offers a seamless experience with engaging questions, real-time scoring, and personalized progress tracking. Get ready to master every quiz!</p>
                <button className='md:mt-0 mt-3 bg-amber-400 xl:py-[10px] lg:py-2 md:py-[6px] py-1 text-white rounded-3xl shadow-md px-4 font-semibold lg:text-base md:text-sm text-[13.8px] lg:w-40 md:w-32 w-28 flex justify-center mx-auto'>Try Now !</button>
            </div>
            <div className='lg:w-[50%] md:w-[37%] md:flex justify-end md:block hidden'>
                <img className='xl:h-[680px] lg:h-[500px]' src={banner} alt="banner" />
            </div>
        </div>
    );
};

export default Banner;