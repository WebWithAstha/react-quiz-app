import { load } from "../reducers/userQuizDataSlice"




export const asyncLoad = (userQuizData)=>(dispatch, getState)=>{
    dispatch(load(userQuizData))
    localStorage.setItem("userQuizData",JSON.stringify(userQuizData))
}
export const asyncSetPage = (pageNo)=>(dispatch, getState)=>{
    const userQuizData = {...getState().userQuizDataSlice.userQuizData}
    userQuizData.pageNo = pageNo
    dispatch(load(userQuizData))
    localStorage.setItem("userQuizData",JSON.stringify(userQuizData))
}

export const asyncChangeAnswers = (answers) => (dispatch, getState) => {
    const quizData = getState().userQuizDataSlice.userQuizData;
    const copyQuizData = JSON.parse(JSON.stringify(quizData));
    copyQuizData.answers = answers;
    dispatch(load(copyQuizData));
    localStorage.setItem("userQuizData", JSON.stringify(copyQuizData));
};
