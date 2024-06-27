import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className=' w-full h-screen flex flex-col px-14 items-center justify-center relative'>
      <p className='text-center  italic w-full text-sky-700/[.5] font-bold leading-tight mb-2'>"Think you know tech? <br /> Prove it! Start now."</p>
      <img className='w-32 object-contain' src="https://cdn-icons-png.flaticon.com/512/4999/4999578.png" alt="" />
      {/* <input className='border border-sky-500 px-2.5 py-2 rounded-lg placeholder:text-sky-400 mt-4 shadow-lg' placeholder='Enter you name' type="text" /> */}
      <Link to="/quizes">
        <button
          className="relative py-2 px-14 mt-4 text-sky-700 uppercase text-base font-bold overflow-hidden bg-white rounded-lg transition-all duration-400 ease-in-out shadow-lg hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-sky-500 before:to-sky-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-lg hover:before:left-0"
        >
          Show me Quizes
        </button>
      </Link>
    </div>
  )
}

export default Home