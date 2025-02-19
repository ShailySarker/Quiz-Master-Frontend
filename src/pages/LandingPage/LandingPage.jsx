import { useEffect } from "react";
import { FcIdea } from "react-icons/fc";
import { useNavigate } from "react-router";

const LandingPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/home");
        }, 3000);
        return () => clearTimeout(timer);
    }, [navigate]);
    // text-[#FD6F00]
    return (
        <div className='h-screen flex justify-center items-center'>
            <div className="flex items-center justify-center lg:gap-3 gap-2 text-amber-500 animate-bounce">
                <FcIdea className="xl:text-6xl lg:text-5xl md:text-4xl text-3xl" />
                <h1 className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-semibold">Quiz Master</h1>
            </div>
        </div>
    );
};

export default LandingPage;