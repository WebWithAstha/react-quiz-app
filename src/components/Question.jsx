import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import LoadingQuestion from './LoadingQuestion'
import { asyncChangeAnswers, asyncSetPage } from '../store/actions/allQuestionActions'
import { load } from '../store/reducers/userQuizDataSlice'

const Question = () => {
    const dispatch = useDispatch()
    let { number } = useParams()
    const { userQuizData } = useSelector(store => store.userQuizDataSlice)
    const [currentChoice, setcurrentChoice] = useState(null)
    const [pageNo, setpageNo] = useState(userQuizData.pageNo)
    const question = userQuizData.questions[pageNo]

    console.log(pageNo)

    useEffect(() => {
        if (userQuizData.answers) {
            setcurrentChoice(userQuizData.answers[pageNo])
        }
        dispatch(asyncSetPage(pageNo))
    }, [question, pageNo])

    const handleSelectAns = (key) => {
        const copyChoice = { ...currentChoice }
        copyChoice[key] = !copyChoice[key]
        const copyAnswers = [...userQuizData.answers]
        copyAnswers[pageNo] = copyChoice
        dispatch(asyncChangeAnswers(copyAnswers))

    }

    return (
        question ?
            <div className='w-full min-h-screen bg-zinc-100 relative'>
                <div className="flex w-full items-center gap-4 px-8 py-4 z-[20] bg-zinc-100 sticky top-0">
                    <Link to="/quizes">
                        <i className="fa-solid fa-house w-8 h-8  flex items-center justify-center border-2 border-zinc-500/[.7] rounded-full"></i>
                    </Link>
                    <div className="border-2 shadow border-zinc-400 rounded-full flex-1 p-1">
                        <div style={{ width: `${pageNo * 10}%` }} className="h-1.5 bg-yellow-500 rounded-full"></div>
                    </div>
                </div>
                <div className="pb-10 px-8">
                    <div className="min-h-40 flex flex-col relative rounded-lg border-4 border-sky-500/[.1] bg-sky-500/[.4] shadow mt-8 px-4 py-4">
                        <div className="w-16 h-16 self-center absolute rounded-full border-4 -translate-y-[70%] border-sky-500/[.4] shadow-md bg-sky-50 flex justify-center items-center font-bold text-lg">{parseInt(pageNo + 1)}</div>
                        <h1 className='leading-tight mt-8'>{question.question}</h1>
                    </div>
                    <div className="pb-3 overflow-y-auto text-sm text-gray-700 mt-6" aria-labelledby="dropdownSearchButton">
                        {currentChoice ?
                            Object.entries(question.answers).map(([key, val], i) => {
                                if (val) return (
                                    <div key={i} className="mb-4 flex items-center border border-zinc-500 p-2 rounded hover:bg-gray-200">
                                        <input id={`checkbox-item-1${i}`} onChange={(e) => handleSelectAns(key)} type="checkbox" checked={currentChoice[key]} className='w-4 h-4 text-sky-100 bg-gray-100 border-gray-300 rounded focus:ring-sky-500  focus:ring-0 ' />
                                        <label htmlFor={`checkbox-item-1${i}`} className="w-full ms-2 text-sm font-medium text-gray-900 rounded px-1 break-all">{val}</label>
                                    </div>
                                )
                            })
                            : <>
                                <div className="w-full">
                                    <div className="mb-4 h-[2.2rem] bg-zinc-400/[.8] rounded">
                                    </div>
                                    <div className="mb-4 h-[2.2rem] bg-zinc-400/[.8] rounded">
                                    </div>
                                    <div className="mb-4 h-[2.2rem] bg-zinc-400/[.8] rounded">
                                    </div>
                                    <div className="mb-4 h-[2.2rem] bg-zinc-400/[.8] rounded">
                                    </div>
                                </div>
                            </>
                        }

                    </div>
                    <div className="flex w-full gap-2 items-center justify-between">
                        {/* {number !== "0" ?
                            <Link className='w-1/2 mr-auto' to={`/question/${parseInt(number) - 1}`}> */}
                        <button onClick={(e) => pageNo > 0 ? setpageNo(pageNo - 1) : ''}
                            className="relative w-full py-2 px-2 mt-0 text-sky-700 uppercase text-base font-bold overflow-hidden bg-white rounded-lg transition-all duration-400 ease-in-out shadow hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-sky-300/[.8] before:to-sky-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-lg hover:before:left-0">
                            Previous
                        </button>

                        <button onClick={(e) => pageNo < 9 ? setpageNo(pageNo + 1) : ''}
                            className="relative w-full py-2 px-2 mt-0 text-sky-700 uppercase text-base font-bold overflow-hidden bg-white rounded-lg transition-all duration-400 ease-in-out shadow hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-sky-300/[.8] before:to-sky-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-lg hover:before:left-0">
                            Next
                        </button>
                    </div>
                    {pageNo === "9" ?
                        <Link className='w-1/2 ml-auto' to={`/result`}>
                            <button
                                className="relative w-full mt-4 py-2 px-2 text-sky-700 uppercase text-base font-bold overflow-hidden bg-white rounded-lg transition-all duration-400 ease-in-out shadow hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 ">
                                Submit
                            </button>
                        </Link>
                        : ""}
                </div>

            </div>
            : <LoadingQuestion />

    )
}

export default Question