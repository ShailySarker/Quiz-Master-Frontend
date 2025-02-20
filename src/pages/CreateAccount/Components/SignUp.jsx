import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { apiCall } from '../../../utils/ApiCall';
import quiz from "../../../assets/Image/SignUp_coverPhoto.png";
import { FcIdea } from 'react-icons/fc';
const SignUp = ({ givenemail }) => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [email, setEmail] = useState(givenemail);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [otp, setOtp] = useState('');

    // States to manage form validation
    const [isValidUsername, setIsValidUsername] = useState(true);
    const [isValidFirstName, setIsValidFirstName] = useState(true);
    const [isValidLastName, setIsValidLastName] = useState(true);
    const [isValidDateOfBirth, setIsValidDateOfBirth] = useState(true);
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [isValidPassword, setIsValidPassword] = useState(true);
    const [isValidConfirmPassword, setIsValidConfirmPassword] = useState(true);
    const [isValidOtp, setIsValidOtp] = useState(true);

    // Function to validate email format
    const validateEmail = (inputEmail) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(inputEmail);
    };

    // Function to handle signup button click
    const handleSignupClick = async () => {
        setIsValidUsername(username.trim() !== '');
        setIsValidFirstName(firstName.trim() !== '');
        setIsValidLastName(lastName.trim() !== '');
        setIsValidDateOfBirth(dateOfBirth.trim() !== '');
        setIsValidEmail(validateEmail(email));
        setIsValidPassword(password.trim() !== '');
        setIsValidConfirmPassword(confirmPassword.trim() === password.trim());
        setIsValidOtp(otp.trim() !== '');
        if (
            username.trim() !== '' &&
            firstName.trim() !== '' &&
            lastName.trim() !== '' &&
            dateOfBirth.trim() !== '' &&
            validateEmail(email) &&
            password.trim() !== '' &&
            confirmPassword.trim() === password.trim() &&
            otp.trim() !== ''
        ) {
            try {
                toast.info("Signing Up. Please wait...", { autoClose: false, hideProgressBar: true });
                const data = {
                    username: username,
                    firstName: firstName,
                    lastName: lastName,
                    dateOfBirth: dateOfBirth,
                    password: password,
                    email: email,
                    confirmPassword: confirmPassword,
                    otp: otp,
                };
                const response = await apiCall('/auth/signup', data);
                if (response.success) {
                    toast.dismiss();
                    toast.success("Successfully signed up. Redirecting to login.");
                    navigate('/login');
                } else {
                    toast.dismiss();
                    toast.error("Signup failed. Please check your information and try again.");
                }
            } catch (error) {
                console.error("Error during signup:", error);
                toast.dismiss();
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
                    <Link to="/">
                        <h2 className="font-bold text-amber-400 xl:text-3xl md:text-2xl text-xl flex items-center lg:gap-2 gap-1"><FcIdea className='xl:text-4xl md:text-3xl text-2xl' />Quiz Master</h2>
                    </Link >
                    <h2 className="xl:text-xl text-lg font-semibold text-gray-800 xl:py-5 lg:py-4 py-3">Create a new account</h2>
                    <div className="flex flex-row flex-wrap gap-3 min-w-[60%] min-h-[250px]">
                        <input
                            type="text"
                            placeholder="Enter your username"
                            className={`md:w-[48%] w-full  xl:py-[10px] lg:py-2 py-[6px] xl:px-4 md:px-3 px-[10px] xl:mb-3 mb-2 rounded-xl border ${isValidUsername ? 'border-gray-400' : 'border-red-500'} focus:outline-none focus:border-blue-500`}
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        {!isValidUsername && <p className="text-red-500 text-sm mb-4">Username is required</p>}

                        {/* First Name input */}
                        <input
                            type="text"
                            placeholder="Enter your first name"
                            className={`md:w-[48%] w-full  xl:py-[10px] lg:py-2 py-[6px] xl:px-4 md:px-3 px-[10px] xl:mb-3 mb-2 rounded-xl border ${isValidFirstName ? 'border-gray-400' : 'border-red-500'} focus:outline-none focus:border-blue-500`}
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        {!isValidFirstName && <p className="text-red-500 text-sm mb-4">First name is required</p>}

                        {/* Last Name input */}
                        <input
                            type="text"
                            placeholder="Enter your last name"
                            className={`md:w-[48%] w-full  xl:py-[10px] lg:py-2 py-[6px] xl:px-4 md:px-3 px-[10px] xl:mb-3 mb-2 rounded-xl border ${isValidLastName ? 'border-gray-400' : 'border-red-500'} focus:outline-none focus:border-blue-500`}
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        {!isValidLastName && <p className="text-red-500 text-sm mb-4">Last name is required</p>}

                        {/* Date of Birth input */}
                        <input
                            type="text"
                            placeholder="Enter your date of birth"
                            className={`md:w-[48%] w-full  xl:py-[10px] lg:py-2 py-[6px] xl:px-4 md:px-3 px-[10px] xl:mb-3 mb-2 rounded-xl border ${isValidDateOfBirth ? 'border-gray-400' : 'border-red-500'} focus:outline-none focus:border-blue-500`}
                            value={dateOfBirth}
                            onChange={(e) => setDateOfBirth(e.target.value)}
                        />
                        {!isValidDateOfBirth && <p className="text-red-500 text-sm mb-4">Date of birth is required</p>}

                        {/* Email input */}
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className={`md:w-[48%] w-full  xl:py-[10px] lg:py-2 py-[6px] xl:px-4 md:px-3 px-[10px] xl:mb-3 mb-2 rounded-xl border ${isValidEmail ? 'border-gray-400' : 'border-red-500'} focus:outline-none focus:border-blue-500`}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            readOnly  // Add the readOnly attribute
                        />
                        {!isValidEmail && <p className="text-red-500 text-sm mb-4">Invalid email format</p>}

                        {/* Password input */}
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className={`md:w-[48%] w-full  xl:py-[10px] lg:py-2 py-[6px] xl:px-4 md:px-3 px-[10px] xl:mb-3 mb-2 rounded-xl border ${isValidPassword ? 'border-gray-400' : 'border-red-500'} focus:outline-none focus:border-blue-500`}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {!isValidPassword && <p className="text-red-500 text-sm mb-4">Password is required</p>}

                        {/* Confirm Password input */}
                        <input
                            type="password"
                            placeholder="Confirm your password"
                            className={`md:w-[48%] w-full  xl:py-[10px] lg:py-2 py-[6px] xl:px-4 md:px-3 px-[10px] xl:mb-3 mb-2 rounded-xl border ${isValidConfirmPassword ? 'border-gray-400' : 'border-red-500'} focus:outline-none focus:border-blue-500`}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        {!isValidConfirmPassword && <p className="text-red-500 text-sm mb-4">Passwords do not match</p>}

                        {/* OTP input */}
                        <input
                            type="text"
                            placeholder="Enter your OTP"
                            className={`md:w-[48%] w-full  xl:py-[10px] lg:py-2 py-[6px] xl:px-4 md:px-3 px-[10px] xl:mb-3 mb-2 rounded-xl border ${isValidOtp ? 'border-gray-400' : 'border-red-500'} focus:outline-none focus:border-blue-500`}
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                        />
                        {!isValidOtp && <p className="text-red-500 text-sm mb-4">OTP is required</p>}

                        {/* Signup button */}
                        <button
                            className="mt-3 bg-gray-800 text-white xl:py-[10px] lg:py-2 py-[6px] px-8 rounded-xl hover:bg-gray-700 focus:outline-none"
                            onClick={handleSignupClick}
                        >
                            Sign Up
                        </button>
                    </div>
                    <p className="font-medium text-[#546879] text-center xl:mt-3 lg:mt-2 mt-[6px] text-[15px]">Already have an account? <span className="font-bold text-amber-400"><Link to="/login">Login</Link></span> Now!</p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;