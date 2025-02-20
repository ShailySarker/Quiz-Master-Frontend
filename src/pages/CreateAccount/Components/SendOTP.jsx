import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { apiCall } from '../../../utils/ApiCall';
import quiz from "../../../assets/Image/SignUp_coverPhoto.png";
import { FcIdea } from 'react-icons/fc';

const SendOTP = ({ setIsEmailField, email, setEmail }) => {
    // const [email, setEmail] = useState('');
    const navigate = useNavigate();

    // State to manage form validation
    const [isValidEmail, setIsValidEmail] = useState(true);

    // Function to validate email format
    const validateEmail = (inputEmail) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(inputEmail);
    };

    // Function to handle "Send OTP" button click
    const handleSendOtpClick = async () => {
        const isValid = validateEmail(email);
        setIsValidEmail(isValid);
        if (isValid) {
            try {
                toast.info("Sending OTP. Please wait...", { autoClose: false, hideProgressBar: true });
                const obj = {
                    email: email
                };
                const sendOtpResponse = await apiCall('/auth/sendotp', obj);
                if (sendOtpResponse.success) {
                    toast.dismiss();
                    toast.success("OTP sent successfully. Redirecting to signup.");
                    setIsEmailField(true);
                } else {
                    toast.dismiss();
                    toast.error("Failed to send OTP. Please try again.");
                }
            } catch (error) {
                console.error("Error while sending OTP:", error);
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
                    <Link to="/home">
                        <h2 className="font-bold text-amber-400 xl:text-3xl md:text-2xl text-xl flex items-center lg:gap-2 gap-1"><FcIdea className='xl:text-4xl md:text-3xl text-2xl' />Quiz Master</h2>
                    </Link >
                   <div className="bg-white min-w-[60%] min-h-[250px]">
                        <h2 className="xl:text-xl text-lg font-semibold text-gray-800 xl:py-5 lg:py-4 py-3">Enter Email</h2>
                        {/* Email input */}
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className={`w-full xl:py-[10px] lg:py-2 py-[6px] xl:px-4 md:px-3 px-[10px] xl:mb-3 mb-2 rounded-xl border ${isValidEmail ? 'border-gray-400' : 'border-red-500'} focus:outline-none focus:border-blue-500`}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {!isValidEmail && <p className="text-red-500 text-sm mb-4">Invalid email format</p>}

                        {/* Send OTP button */}
                        <button
                            className="bg-gray-800 text-white xl:py-[10px] lg:py-2 py-[6px] px-8 mt-3 rounded-xl hover:bg-gray-700 focus:outline-none"
                            onClick={handleSendOtpClick}
                        >
                            Send OTP
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SendOTP;