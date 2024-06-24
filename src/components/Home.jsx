import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className=' w-full h-screen flex items-center justify-center relative'>
        <div className="img w-full h-full p-2 object-cover absolute top-0 left-0">

        <img className='w-full h-full object-cover rounded-lg' src="https://plus.unsplash.com/premium_photo-1678048604398-f42dda6997bd?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <Link to="/quizes">
        <button
                className="relative py-2 px-14 mt-6 text-sky-700 uppercase text-base font-bold overflow-hidden bg-white rounded-lg transition-all duration-400 ease-in-out shadow hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-sky-500 before:to-sky-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-lg hover:before:left-0"
            >
                Take Quiz 😎
            </button>
        </Link>
    </div>
  )
}

export default Home