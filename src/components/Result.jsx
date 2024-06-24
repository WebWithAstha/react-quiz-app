import React from 'react'

const Result = () => {
  return (
    <div className='px-8'>
          <div className="min-h-40 flex flex-col gap-2 rounded-lg items-center border-4 border-sky-500/[.1] bg-sky-500/[.4] shadow mt-6 px-4 py-4">
                <h1 className='leading-tight text-center font-bold text-2xl'> Final Score</h1>
                <div className="w-36 h-36 rounded-full border-4 border-sky-500/[.4] shadow-md bg-sky-50 flex justify-center items-center text-3xl font-bold">60/60 </div>
            </div>
          <div className=" flex  gap-2 rounded-lg items-center border-4 border-zinc-300/[.1] bg-zinc-500/[.1] shadow mt-6 px-4 py-4">
                <div className="w-1/3 border-r">
                <h1 className='leading-tight px-1 font-medium mb-1 text-md'>Correct</h1>
                <div className="w-12 h-12 rounded-full border-4 border-green-500/[.4] shadow-md bg-green-50 flex justify-center items-center text-md font-bold">60 </div>
                </div>
                <div className="w-1/3 pl-3 border-r">
                <h1 className='leading-tight px-1 font-medium mb-1 text-md'>Correct</h1>
                <div className="w-12 h-12 rounded-full border-4 border-blue-500/[.4] shadow-md bg-blue-50 flex justify-center items-center text-md font-bold">60 </div>
                </div>
                <div className="w-1/3 pl-3">
                <h1 className='leading-tight px-1 font-medium mb-1 text-md'>Correct</h1>
                <div className="w-12 h-12 rounded-full border-4 border-red-500/[.4] shadow-md bg-red-50 flex justify-center items-center text-md font-bold">60 </div>
                </div>
            </div>
    </div>
  )
}

export default Result