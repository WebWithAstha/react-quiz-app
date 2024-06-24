import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from '../App'
import Intro from '../components/Quizes'
import Question from '../components/Question'
import Home from '../components/Home'
import Result from '../components/Result'
import LoadingQuestion from '../components/LoadingQuestion'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/quiz/:category/:ques' element={<Question/>}/>
        <Route path='/quiz/:category/:tag/:ques' element={<Question/>}/>
        <Route path='/quiz' element={<Question/>}/>
        <Route path='/question/:number' element={<Question/>}/>
        <Route path='/quizes' element={<Intro/>}/>
        <Route path='/result' element={<Result/>}/>
        <Route path='/l' element={<LoadingQuestion/>}/>
    </Routes>
  )
}

export default MainRoutes