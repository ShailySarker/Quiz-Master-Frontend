import { Outlet, useLocation } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect } from "react";

const MainLayouts = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname]);

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default MainLayouts;