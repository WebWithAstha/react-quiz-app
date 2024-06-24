import React from 'react'

const LoadingQuestion = () => {
    return (
        <div className='w-full animate-pulse h-screen bg-zinc-100 py-10 px-8'>
            <div className="flex items-center gap-4 h-4 rounded-lg bg-zinc-400/[.8]">

            </div>
            <div className="min-h-40 bg-zinc-400/[.8] rounded-lg mt-6 px-4 py-4">

            </div>

            <div className="pb-3 overflow-y-auto text-sm text-gray-700 mt-6" aria-labelledby="dropdownSearchButton">
                <div className="mb-4 h-[2.2rem] bg-zinc-400/[.8] rounded">
                </div>
                <div className="mb-4 h-[2.2rem] bg-zinc-400/[.8] rounded">
                </div>
                <div className="mb-4 h-[2.2rem] bg-zinc-400/[.8] rounded">
                </div>
                <div className="mb-4 h-[2.2rem] bg-zinc-400/[.8] rounded">
                </div>

            </div>

            <div className="flex w-full gap-2">

                <div
                    className="relative w-1/2 h-10 bg-zinc-400/[.8] rounded-lg">

                </div>
                <div
                    className="relative w-1/2 h-10 bg-zinc-400/[.8] rounded-lg">

                </div>
            </div>
        </div>
    )
}

export default LoadingQuestion