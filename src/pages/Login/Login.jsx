import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { apiCall } from '../../utils/ApiCall';
import { Link, useNavigate } from 'react-router';
import { DataContext } from '../../utils/Context';
import quiz from "../../assets/Image/SignIn_coverPhoto.png";
import Spinner from '../../components/Spinner';
import { FcIdea } from 'react-icons/fc';

const Login = () => {
    const navigate = useNavigate();
    const { setIsLoggedIn, setUser } = useContext(DataContext)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // State to manage form validation
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [isValidPassword, setIsValidPassword] = useState(true);

    // Function to validate email format
    const validateEmail = (inputEmail) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(inputEmail);
    };

    // Function to handle login button click
    const handleLoginClick = async () => {
        // Validate email
        const isValidEmailValue = validateEmail(email);
        setIsValidEmail(isValidEmailValue);

        // Validate password
        const isValidPasswordValue = password.length >= 6;
        setIsValidPassword(isValidPasswordValue);

        // If email and password are valid, perform login logic
        if (isValidEmailValue && isValidPasswordValue) {
            try {
                toast.info("Logging In. Please wait...", { autoClose: false, hideProgressBar: true });
                const data = {
                    email: email,
                    password: password
                };

                const loginResp = await apiCall('/auth/login', data);

                if (loginResp.success) {
                    toast.dismiss(); // Dismiss the loading toast
                    toast.success("Successfully Logged In");
                    setIsLoggedIn(true);
                    setUser(loginResp.user);

                    // Save to Local Storage also
                    localStorage.setItem("token", JSON.stringify(loginResp.token));
                    localStorage.setItem("user", JSON.stringify(loginResp.user));
                    navigate('/');
                } else {
                    toast.dismiss(); // Dismiss the loading toast
                    toast.error("Login failed. Please check your credentials.");
                }
            } catch (error) {
                console.error("Error during login:", error);
                toast.dismiss(); // Dismiss the loading toast
                toast.error("Something went wrong. Please try again later.");
            }
        }
    };

    return (
        <div className="bg-slate-200 h-screen flex items-center justify-center">
            <div className="lg:w-[80%] lg:h-[80%] md:w-[70%] w-[90%] h-auto bg-white rounded-2xl shadow-xl flex items-center xl:gap-20 lg:gap-10">
                <div className='lg:block hidden lg:w-[50%] h-full flex justify-center items-end '>
                    <img src={quiz} alt='quiz' className='w-[100%] rounded-l-2xl h-full object-cover' />
                </div>
                <div className="lg:w-[50%] w-full lg:rounded-r-2xl rounded-2xl lg:py-0 md:py-10 py-6 lg:pr-16 lg:pl-0 md:px-10 px-5 flex bg-white flex-col justify-center items-center h-full ">
                    {
                        isLoading ? <Spinner /> :
                            <div>
                                <Link to="/home">
                                    <h2 className="font-bold text-amber-400 xl:text-3xl md:text-2xl text-xl flex items-center lg:gap-2 gap-1"><FcIdea className='xl:text-4xl md:text-3xl text-2xl' />Quiz Master</h2>
                                </Link >
                                <h2 className="xl:text-xl text-lg font-semibold text-gray-800 xl:py-5 lg:py-4 py-3">Sign In your account</h2>
                                <div className="flex flex-col min-w-[50%] min-h-[250px]">

                                    {/* Email input */}
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className={`w-[100%] xl:py-[10px] lg:py-2 py-[6px] xl:px-4 md:px-3 px-[10px] xl:mb-3 mb-2 rounded-xl border ${isValidEmail ? 'border-gray-400' : 'border-red-500'} focus:outline-none focus:border-blue-500`}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    {!isValidEmail && <p className="text-red-500 text-sm mb-4">Invalid email format</p>}

                                    {/* Password input */}
                                    <input
                                        type="password"
                                        placeholder="Enter your password"
                                        className={`w-[100%] xl:py-[10px] lg:py-2 py-[6px] xl:px-4 md:px-3 px-[10px] xl:mb-3 mb-2 rounded-xl border ${isValidPassword ? 'border-gray-400' : 'border-red-500'} focus:outline-none focus:border-blue-500`}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    {!isValidPassword && <p className="text-red-500 text-sm mb-4">Password must be at least 6 characters</p>}

                                    {/* Login button */}
                                    <button
                                        className="w-auto mt-3 bg-gray-800 text-white xl:py-[10px] lg:py-2 py-[6px] px-8 rounded-xl hover:bg-gray-700 focus:outline-none"
                                        onClick={handleLoginClick}
                                    >
                                        Sign In
                                    </button>
                                    <p className="font-medium text-[#546879] text-center xl:mt-3 lg:mt-2 mt-[6px] text-[15px]">Are you new here? <span className="font-bold text-amber-400"><Link to="/create-account">Sign Up</Link></span></p>
                                </div>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Login;