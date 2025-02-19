import { FcIdea } from 'react-icons/fc';

const Header = () => {
    return (
        <div className="sticky top-0 z-50 border-b-2 bg-white border-amber-400 xl:px-14 lg:px-12 md:px-7 px-5 xl:py-6 lg:py-[14px] md:py-4 py-[14px] flex justify-between">
            <h2 className="font-bold text-amber-400 xl:text-3xl md:text-2xl text-xl flex items-center lg:gap-2 gap-1"><FcIdea className='xl:text-4xl md:text-3xl text-2xl' />Quiz Master</h2>
            <div className="flex items-center gap-3">
                <button className='bg-amber-400 xl:py-[10px] lg:py-2 md:py-[6px] py-1 text-white rounded-3xl shadow-md px-4 font-semibold lg:text-base md:text-sm text-[13.8px] lg:w-28 w-24'>Sign Up</button>
                <button className='hidden md:block border-2 border-amber-400 xl:py-[10px] lg:py-2 md:py-[6px] py-1 text-amber-400 rounded-3xl shadow-md px-4 font-semibold lg:text-base md:text-sm text-[13.8px] lg:w-28 w-24'>Sign In</button>
            </div>
        </div>
    );
};

export default Header;