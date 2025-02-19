import { useEffect } from "react";
import { useNavigate } from "react-router";

const LandingPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/posts");
        }, 3000);
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div>
            <h1 className="text-3xl font-bold underline">
                LandingPage            </h1>
        </div>
    );
};

export default LandingPage;