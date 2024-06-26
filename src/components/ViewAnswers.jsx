import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const ViewAnswers = () => {
  const location = useLocation()
  return (<>
    <div className='px-0'>
      <h1 className='text-center my-4 font-bold text-3xl text-sky-600'>Answers</h1>
      {
        location.state.map((q,i)=>{
          return (
            <div className=' border-4 border-zinc-200/[.1] bg-zinc-300/[.1]'>
            <div className='p-4 rounded-lg'>
              <h1 className='font-medium leading-tight text-sm text-zinc-700'> <span className='mr-2 text-black'>{i+1}.</span>{q.question}</h1>
              <h1 className='font-semibold py-1 text-green-700'><span className='text-black mr-1'>Ans. </span>{q.answer}</h1>
            </div>
            </div>
          )
        })
      }
    </div>
    <Link to="/result">
    <button
          className="relative w-full py-2 mt-4 px-2 text-sky-700 uppercase text-base font-bold overflow-hidden bg-white rounded-lg transition-all duration-400 ease-in-out shadow hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-sky-300/[.8] before:to-sky-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-lg hover:before:left-0">
          Close Answers
        </button>
            </Link>
      </>

  )
}

export default ViewAnswers