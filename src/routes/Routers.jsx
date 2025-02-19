import { Route, Routes } from 'react-router';
import MainLayouts from '../layouts/MainLayouts';
import LandingPage from '../pages/LandingPage/LandingPage';
import Home from '../pages/Home/Home';

const Routers = () => {
    return (
        <Routes>
            <Route
                index
                element={<LandingPage />}
            />
            <Route
                path="/"
                element={<MainLayouts />}
            >
                <Route
                     path="/home"
                    element={<Home />}
                />
            </Route>
        </Routes>
    );
};

export default Routers;