import React, { useEffect, useState } from 'react';
import { apiCall, apiCallGet } from '../../utils/ApiCall';
import { useCookies } from 'react-cookie';
import { useLocation } from 'react-router';
import Result from './Components/Result';
import Question from './Components/Question';
import Spinner from '../../components/Spinner';

const QuizDetails = () => {
    const [cookies] = useCookies();
    const { pathname } = useLocation();
    const path = pathname.split('/')[pathname.split('/').length - 1];
    const [quizDetail, setQuizDetail] = useState(null);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [result, setResult] = useState('')

    const getData = async () => {
        try {
            const response = await apiCallGet(`/quiz/getQuizDetails/${path}`, cookies);
            setQuizDetail(response.data[0]);
            // Initialize selectedOptions state with default values
            const initialSelectedOptions = response.data[0].questionsDetails.map((question) => ({
                questionId: question?._id,
                selectedOption: null,
            }));
            setSelectedOptions(initialSelectedOptions);
        } catch (error) {
            console.error('Error fetching quiz details:', error);
            // Handle error appropriately (e.g., show an error message)
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const handleOptionSelect = (questionId, optionIndex) => {
        setSelectedOptions((prevSelectedOptions) => {
            return prevSelectedOptions?.map((question) =>
                question.questionId === questionId
                    ? { ...question, selectedOption: optionIndex }
                    : question
            );
        });
    };

    const handleSubmit = async () => {
        try {
            const data = {
                quizId: path,
                userResponses: selectedOptions
            };
            const response = await apiCall('/quiz/evaluateQuiz', data, cookies);
            setResult(response?.result)
            if (response?.success) {
                setShowResult(true);
            }
        } catch (error) {
            console.error('Error submitting quiz:', error);
        }
    };
    return (
        <>
            {
                showResult && <Result setShowResult={setShowResult} result={result} />
            }
            <div className="bg-gray-800 min-h-screen border-t-2 text-white p-8">
                {quizDetail ? (
                    <div className=''>
                        <div className='bg-white my-5 md:p-5 p-4 text-black rounded-xl font-3xl font-semibold flex flex-row justify-center md:gap-4 gap-2 flex-wrap'>
                            <div className='xl:w-[45%] lg:w-[50%] flex flex-col items-center justify-center'>
                                <h1 className="xl:text-3xl lg:text-2xl text-xl font-bold ">{quizDetail?.title}</h1>
                                <p className="text-center ">{quizDetail?.description}</p>
                            </div>
                            <div className='xl:w-[40%] lg:w-[40%] flex flex-col items-center justify-center md:text-base text-sm gap-1'>
                                <p className=""><span className='font-bold text-center'>Language:</span> {quizDetail?.language}</p>
                                <p className=" "><span className='font-bold text-center'>Created At:</span> {quizDetail?.createdAt}</p>
                            </div>
                        </div>
                        {/* Questions */}
                        <ul>
                            {quizDetail?.questionsDetails?.map((question, index) => (
                                <Question key={index} question={question} index={index} selectedOptions={selectedOptions} handleOptionSelect={handleOptionSelect} />
                            ))}
                        </ul>

                        <div className='text-center w-[200px] mx-auto text-gray-800 font-semibold text-xl hover:bg-green-500 cursor-pointer bg-white p-3 px-5 border-2 rounded-lg' onClick={handleSubmit}>Submit</div>
                    </div>
                ) : (
                    <div className='w-[100vw] h-[100vh] flex justify-center items-center'><Spinner /></div>
                )}
            </div>
        </>
    );
};

export default QuizDetails;