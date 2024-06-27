import React from 'react'
import { useSelector } from 'react-redux'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';

const Result = () => {
  const navigate = useNavigate()
  const {pathname} = useLocation()
  const { userQuizData } = useSelector(store => store.userQuizDataSlice)


  const unattemptedCount = userQuizData.answers.filter(
    answer => Object.values(answer).every(v => !v)
  ).length;

  const deepEqual = (obj1, obj2) =>
    Object.keys(obj1).length === Object.keys(obj2).length &&
    Object.keys(obj1).every(key => obj1[key] === obj2[key]);

  const compareAnswers = (questions, answers) =>
    questions.map((q, i) =>
      deepEqual(
        Object.fromEntries(Object.entries(q.correct_answers).map(([k, v]) => [k.replace('_correct', ''), v === "true"])),
        answers[i]
      )
    );

  const correct = compareAnswers(userQuizData.questions, userQuizData.answers).filter((correctAnswer) => correctAnswer ? correctAnswer : '')

  const handleViewAnswers = (e) => {
    const dataToSend = userQuizData.questions.map(obj=>{
      let answer =obj.correct_answer
      return {
        question:obj.question,
        answer:obj.answers[obj.correct_answer],
      }
    }
    )
    navigate('view', { state: dataToSend });
  };


  return (
    userQuizData.questions.length >0 ?
    <div className='px-8 py-8'>
      <h1 className='leading-tight text-center font-bold text-2xl'>Your Result</h1>
      <div className="min-h-40 flex  gap-2 rounded-lg items-center justify-center border-4 border-sky-500/[.1] bg-sky-500/[.4] shadow mt-6 px-4 py-4">
        <img className='w-28' src={correct.length < 5 ? "https://cdn-icons-png.flaticon.com/512/2395/2395707.png" : correct.length < 7 ? "https://cdn-icons-png.flaticon.com/512/2395/2395711.png" : correct.length <10 ? "https://cdn-icons-png.flaticon.com/512/2395/2395703.png" : "https://cdn-icons-png.flaticon.com/512/4398/4398042.png"} alt="" />
        <div className="w-28 h-28 rounded-full border-4 border-sky-500/[.4] shadow-md bg-sky-50 flex justify-center items-center text-3xl font-bold">{correct.length}/10 </div>
      </div>
      <div className=" flex  gap-2 rounded-lg items-center border-4 border-zinc-200/[.1] bg-zinc-400/[.1] shadow mt-6 px-4 py-4">
        <div className="w-1/3 flex flex-col items-center border-r">
          <h1 className='leading-tight px-1 font-medium mb-1 text-md'>Correct</h1>
          <div className="w-12 h-12 rounded-full border-4 border-green-500/[.4] shadow-md bg-green-50 flex justify-center items-center text-md font-bold">{correct.length}</div>
        </div>
        <div className="w-1/3 flex flex-col items-center border-r">
          <h1 className='leading-tight px-1 font-medium mb-1 text-md'>Missed</h1>
          <div className="w-12 h-12 rounded-full border-4 border-blue-500/[.4] shadow-md bg-blue-50 flex justify-center items-center text-md font-bold">{unattemptedCount}</div>
        </div>
        <div className="w-1/3 flex flex-col items-center">
          <h1 className='leading-tight px-1 font-medium mb-1 text-md'>Incorrect</h1>
          <div className="w-12 h-12 rounded-full border-4 border-red-500/[.4] shadow-md bg-red-50 flex justify-center items-center text-md font-bold">{userQuizData.questions.length - correct.length -unattemptedCount}</div>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <button style={{display:pathname === '/result'?'initial':'none'}}
        onClick={handleViewAnswers}
          className="relative w-1/2 py-2 mt-4 px-2 text-sky-700 uppercase text-base font-bold overflow-hidden bg-white rounded-lg transition-all duration-400 ease-in-out shadow hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-sky-300/[.8] before:to-sky-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-lg hover:before:left-0">
          View Ans
        </button>
        <Link className='w-1/2' to="/quizes">
        <button 
          className="relative w-full py-2 mt-4 px-2 text-sky-700 uppercase text-base font-bold overflow-hidden bg-white rounded-lg transition-all duration-400 ease-in-out shadow hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-sky-300/[.8] before:to-sky-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-lg hover:before:left-0">
          <i className="fa-solid fa-house"></i>
        </button></Link>

      </div>


      <Outlet />
    </div>
    :<div className='w-full h-screen flex flex-col gap-2 items-center justify-center'>
      <img className='w-28 -mt-10' src="https://cdn-icons-png.flaticon.com/512/2395/2395669.png" alt="" />
      <h1 className='text-sky-600 text-xl font-bold'>Select a Quiz first.</h1>

    </div>
  )
}

export default Result