import { Route, Routes } from 'react-router';
import MainLayouts from '../layouts/MainLayouts';
import LandingPage from '../pages/LandingPage/LandingPage';
import Home from '../pages/Home/Home';
import SignUp from '../pages/CreateAccount/Components/SignUp';
import Login from '../pages/Login/Login';
import CreateAccount from '../pages/CreateAccount/CreateAccount';

const Routers = () => {
    return (
        <Routes>
            <Route
                index
                element={<LandingPage />}
            />
            <Route
                path="/create-account"
                element={<CreateAccount />}
            />
            <Route
                path="/login"
                element={<Login />}
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