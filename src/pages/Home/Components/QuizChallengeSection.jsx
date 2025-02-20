import React, { useEffect, useState } from 'react';
import { apiCall } from '../../../utils/ApiCall';
import Spinner from '../../../components/Spinner';
import QuizDisplaySection from './QuizDisplaySection';
import { ImSad } from 'react-icons/im';

const QuizChallengeSection = ({ filter }) => {
    // Load the elements when the component is rendered
    const [selectedLevel, setSelectedLevel] = useState(0);

    const handleLevelChange = (event) => {
        const selectedValue = parseInt(event?.target?.value, 10);
        setSelectedLevel(selectedValue);
        console.log(selectedValue)
    };

    const [quiz, setQuiz] = useState(null);
    const data = {
        skip: 0,
        limit: 10,
        filter: filter,
        userProficiencyLevel: selectedLevel
    }
    const getData = async () => {
        const resp = await apiCall('/quiz/getQuizList', data)
        setQuiz(resp.data)
    }

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getData();
        setLoading(false);
    }, [filter, selectedLevel]);

    return (
        <div className='mt-8'>
            <div className='flex lg:flex-row flex-col lg:justify-between lg:items-start items-center xl:mb-6 lg:mb-5 md:mb-4 mb-3'>
                <h1 className='xl:text-4xl text-center lg:text-3xl md:text-2xl text-xl font-semibold '>
                    Challenge your Self with these Quizzes</h1>
                <div>
                    <label htmlFor="proficiencyLevel" className='font-semibold'>Select Proficiency Level:</label>
                    <select className='p-2 border-[1px] rounded-lg mx-3'
                        id="proficiencyLevel"
                        name="proficiencyLevel"
                        value={selectedLevel}
                        onChange={handleLevelChange}
                    >

                        {[...Array(6).keys()]?.map((level) => (
                            <option key={level} value={level}>
                                {
                                    level == 0 ? 'all' : `Level ${level}`
                                }
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className='max-h-[550px] overflow-y-scroll '>
                {
                    loading ? <Spinner /> : (
                        <div className='flex flex-col items-center justify-center gap-2 xl:px-16 lg:px-12 md:px-8 px-6'>
                            {
                                (quiz != null && quiz?.length === 0) ? <div className='xl:text-3xl lg:text-2xl md:text-xl text-lg font-semibold flex items-center justify-center gap-2 my-[100px]'>Sorry, course material is not available now <ImSad /> </div> :
                                    quiz?.map((item, index) => (
                                        <QuizDisplaySection
                                            id={item?._id}
                                            key={index} // Add a unique key prop for each item in the list
                                            title={item?.title}
                                            description={item?.description}
                                            language={item?.language}
                                            questionCount={item?.questionCount}
                                        />
                                    ))
                            }
                        </div>
                    )
                }

            </div>
        </div>
    );
};

export default QuizChallengeSection;