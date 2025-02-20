import Banner from "./Components/Banner";
import LeadershipBoard from "./Components/LeadershipBoard";

const Home = () => {
    return (
        <div className="flex flex-col xl:gap-20 lg:gap-16 md:gap-12 gap-9">
            <Banner />
            <LeadershipBoard />
        </div>
    );
};

export default Home;