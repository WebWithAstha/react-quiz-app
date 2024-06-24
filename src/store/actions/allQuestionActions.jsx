import { load } from "../reducers/userQuizDataSlice"



export const asyncSetQuestions = (ques)=>(dispatch, getState)=>{
    console.log("I'm asynceSetQuestions")
    dispatch(load(ques))
    localStorage.setItem("userQuizData",JSON.stringify(ques))
}


