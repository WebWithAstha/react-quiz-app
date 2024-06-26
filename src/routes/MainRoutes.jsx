import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from '../App'
import Intro from '../components/Quizes'
import Question from '../components/Question'
import Home from '../components/Home'
import Result from '../components/Result'
import LoadingQuestion from '../components/LoadingQuestion'
import ViewAnswers from '../components/ViewAnswers'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/question' element={<Question/>}/>
        <Route path='/quizes' element={<Intro/>}/>
        <Route path='/result' element={<Result/>}>
            <Route path='view' element={<ViewAnswers/>}/>
        </Route>
    </Routes>
  )
}

export default MainRoutes