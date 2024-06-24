import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

const Question = () => {
    let { number } = useParams()
    const { questions } = useSelector(store => store.userQuizDataSlice.userQuizData)
    const { answers } = useSelector(store => store.userQuizDataSlice.userQuizData)
    // console.log(questions)
    // console.log(answers)

    const [a1, seta1] = useState(false)
    const [a2, seta2] = useState(false)
    const [a3, seta3] = useState(false)
    const [a4, seta4] = useState(false)
    const [a5, seta5] = useState(false)
    const [a6, seta6] = useState(false)

    const question = questions && questions[number]

    const [userAnswers, setuserAnswers] = useState(answers)
    // console.log(question)
    const handleSelectAns = (key) =>{
        // setanwer([...anwer, question.correct_answer])
        console.log(key)
        // const copyUserAnswers = [...userAnswers]
        let currentAns = [...userAnswers[number]]
        console.log()

        
        console.log(currentAns)
        // currentAns = currentAns.map(answer=>{
        //     if(key in answer){
        //         answer[key]= !answer[key]
        //     }
        //     return console.log(answer[key])
        // })

        // console.log(currentAns)



        
    }

    return (
        question ?
            <div className='w-full min-h-screen bg-zinc-100 relative'>
                <div className="flex w-full items-center gap-4 px-8 py-4 z-[20] bg-zinc-100 sticky top-0">
                    <Link to="/quizes">
                        <i className="fa-solid fa-house w-8 h-8  flex items-center justify-center border-2 border-zinc-500/[.7] rounded-full"></i>
                        {/* <i className="fa-solid fa-arrow-left-long text-lg bg-zinc-100 px-4 rounded-lg shadow"></i> */}
                    </Link>
                    <div className="border-2 shadow border-zinc-400 rounded-full flex-1 p-1">
                        <div style={{ width: `${number * 10}%` }} className="h-1.5 bg-yellow-500 rounded-full"></div>
                    </div>
                </div>
                <div className="pb-10 px-8">
                    <div className="min-h-40 flex flex-col relative rounded-lg border-4 border-sky-500/[.1] bg-sky-500/[.4] shadow mt-8 px-4 py-4">
                        <div className="w-16 h-16 self-center absolute rounded-full border-4 -translate-y-[70%] border-sky-500/[.4] shadow-md bg-sky-50 flex justify-center items-center font-bold text-lg">{parseInt(number) + 1}</div>
                        <h1 className='leading-tight mt-8'>{question.question}</h1>
                    </div>
                    <div className="pb-3 overflow-y-auto text-sm text-gray-700 mt-6" aria-labelledby="dropdownSearchButton">
                        {
                            Object.entries(question.answers).map(([key, val], i) => {
                                if (val) return (
                                    <div key={i} className="mb-4 flex items-center border border-zinc-500 p-2 rounded hover:bg-gray-200">
                                        <input id={`checkbox-item-1${i}`} onInput={(e)=>handleSelectAns(key)} type="checkbox" className='w-4 h-4 text-sky-100 bg-gray-100 border-gray-300 rounded focus:ring-sky-500  focus:ring-0 ' />
                                        <label htmlFor={`checkbox-item-1${i}`} className="w-full ms-2 text-sm font-medium text-gray-900 rounded ">{val}</label>
                                    </div>
                                )
                            })
                        }


                    </div>
                    <div className="flex w-full gap-2 items-center justify-between">
                        {number !== "0" ?
                            <Link className='w-1/2 mr-auto' to={`/question/${parseInt(number) - 1}`}>
                                <button
                                    className="relative w-full py-2 px-2 mt-0 text-sky-700 uppercase text-base font-bold overflow-hidden bg-white rounded-lg transition-all duration-400 ease-in-out shadow hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-sky-300/[.8] before:to-sky-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-lg hover:before:left-0">
                                    Previous
                                </button>
                            </Link>
                            : ''}
                        {number < 9 ?
                            <Link className='w-1/2 ml-auto' to={`/question/${parseInt(number) + 1}`}>
                                <button
                                    className="relative w-full py-2 px-2 mt-0 text-sky-700 uppercase text-base font-bold overflow-hidden bg-white rounded-lg transition-all duration-400 ease-in-out shadow hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-sky-300/[.8] before:to-sky-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-lg hover:before:left-0">
                                    Next
                                </button>
                            </Link>
                            : ""}
                    </div>
                </div>

            </div>
            : "heyyy"
    )
}

export default Question