import { useContext } from 'react';
import { CgProfile } from 'react-icons/cg';
import { FcIdea } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { DataContext } from '../utils/Context';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
    const navigate = useNavigate();
    const { isLoggedIn, user, setUser, setIsLoggedIn } = useContext(DataContext);
    // console.log(isLoggedIn)
    const goHome = () => {
        navigate("/home")
    };
    const handleLogOut = () => {
        const confirmLogout = window.confirm("Are you sure you want to log out?");

        if (confirmLogout) {
            // Log out the user
            setIsLoggedIn(false);
            setUser(null);
            localStorage.removeItem("token");
            localStorage.removeItem("user");

            // Display a confirmation toast
            toast.success("Successfully Logged Out");

            // Redirect to the home page
            navigate("/");
        }
    };
    return (
        <div className="sticky top-0 z-50 border-b-2 bg-white border-amber-400 xl:px-14 lg:px-12 md:px-7 px-5 xl:py-6 lg:py-[14px] md:py-4 py-[14px] flex justify-between">
            <h2 onClick={goHome} className="font-bold text-amber-400 xl:text-3xl md:text-2xl text-xl flex items-center lg:gap-2 gap-1"><FcIdea className='xl:text-4xl md:text-3xl text-2xl' />Quiz Master</h2>
            {
                isLoggedIn ?
                    <div className="flex flex-row md:gap-2 gap-1 items-center justify-end">
                        <div className='flex items-center md:gap-2 gap-1'>
                            <span className='md:block hidden font-medium lg:text-lg text-base'>Welcome, <span className='text-amber-400'>{user?.username}</span>!</span>
                            <FaUserCircle className="xl:text-4xl lg:text-3xl text-2xl hover:text-amber-400 cursor-pointer" onClick={() => { navigate('/profile') }} />
                        </div>
                        <button className='bg-amber-400 xl:py-[10px] lg:py-2 md:py-[6px] py-1 text-white rounded-3xl shadow-md px-4 font-semibold lg:text-base md:text-sm text-[13.8px] lg:w-28 w-24' onClick={handleLogOut}>Logout</button>
                    </div> :
                    <div className="flex items-center gap-3">
                        <Link to="/create-account">
                            <button className='bg-amber-400 xl:py-[10px] lg:py-2 md:py-[6px] py-1 text-white rounded-3xl shadow-md px-4 font-semibold lg:text-base md:text-sm text-[13.8px] lg:w-28 w-24'>Sign Up</button>
                        </Link>
                        <Link to="/login">
                            <button className='hidden md:block border-2 border-amber-400 xl:py-[10px] lg:py-2 md:py-[6px] py-1 text-amber-400 rounded-3xl shadow-md px-4 font-semibold lg:text-base md:text-sm text-[13.8px] lg:w-28 w-24'>Sign In</button>
                        </Link>
                    </div>
            }
        </div>
    );
};

export default Header;