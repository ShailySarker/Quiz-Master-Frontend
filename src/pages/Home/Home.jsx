import Banner from "./Components/Banner";
import LeadershipBoard from "./Components/LeadershipBoard";
import QuizLanguage from "./Components/QuizLanguage";

const Home = () => {
    return (
        <div className="flex flex-col xl:gap-20 lg:gap-16 md:gap-12 gap-9">
            <Banner />
            <LeadershipBoard />
            <QuizLanguage />
        </div>
    );
};

export default Home;