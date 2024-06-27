import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Axios from '../utils/axios'
import { useDispatch, useSelector } from 'react-redux'
import { asyncLoad} from '../store/actions/userQuizDataAction'

const Intro = () => {

    const initialCategories = [
        { category: 'linux', image: "https://cdn-icons-png.flaticon.com/512/15465/15465695.png" },
        { category: 'code', tag: 'javascript', image: "https://cdn-icons-png.flaticon.com/512/9695/9695722.png" },
        { category: 'devops', image: "https://cdn-icons-png.flaticon.com/512/5405/5405899.png" },
        { category: 'code', tag: 'html', image: "https://cdn-icons-png.flaticon.com/512/1051/1051277.png" },
        { category: 'sql', image: "https://cdn-icons-png.flaticon.com/512/4492/4492311.png" },
        { category: 'cms', image: "https://cdn-icons-png.flaticon.com/512/3950/3950815.png" },
        { category: 'bash', image: "https://cdn-icons-png.flaticon.com/512/919/919837.png" },
        { category: 'docker', image: "https://cdn-icons-png.flaticon.com/512/15466/15466088.png" },
        { category: 'code', tag: 'php', image: "https://cdn-icons-png.flaticon.com/512/5968/5968332.png" },
    ];

    const dispatch = useDispatch()
    const [categories, setCategories] = useState(initialCategories);
    const { userQuizData } = useSelector(store => store.userQuizDataSlice)

    // emptying questions 
    useEffect(() => {
        if (userQuizData.questions && userQuizData.questions.length > 0) {
            const newUserQuizData = {...userQuizData}
            newUserQuizData.pageNo = 0
            newUserQuizData.answers = []
            newUserQuizData.questions = []
            dispatch(asyncLoad(newUserQuizData))
        }
    }, [])


    const getQusetions = async (category, tag) => {

        // fetching questions from api
        const { data } = await Axios.get(`/questions?apiKey=0t8gkoXo9bdE32smqbPtWlf1zL45hcoDrdBH5qpg&limit=10&category=${category?category:''}&difficulty=easy&tags=${tag ? tag : ''}`)

        // setting initial answers are false
        const answers = data.map(q => {
            const result = {};
            Object.entries(q.answers).forEach(([key, val]) => {
                result[key] = false;
            });
            return result;
        });

        // creating userQuizData
        const updatedUserQuizData = {
            quizes: userQuizData.quizes || 0,
            pageNo:0,
            questions: data,
            category,
            tag,
            answers
        }


        dispatch(asyncLoad(updatedUserQuizData))

    }

    return (
        <div className='w-full min-h-screen bg-zinc-100 py-10 px-8'>
            <div className="flex items-center justify-between mb-6">
                <div className="about">
                    <h1 className='text-2xl font-bold'>Hi, Player</h1>
                    <p className='text-sm'>Let's make this day productive.</p>
                </div>
                <div className="img shadow-lg rounded-full w-14 h-14 overflow-hidden">
                    <img className='w-full h-full object-cover' src="https://cdn-icons-png.flaticon.com/512/924/924874.png" alt="" />
                </div>
            </div>
                <div className="w-full justify-between shadow-lg border-4 border-zinc-200/[.1] bg-zinc-400/[.1] rounded-lg py-2 px-2 flex items-center gap-2">
                    <img className='w-8 object-contain' src="https://cdn-icons-png.flaticon.com/512/2827/2827957.png" alt="" />
                    <h1 className='text-lg font-bold opacity-40'>Quiz attended</h1>
                    <p className='text-sm text-sky-500 font-bold'>{userQuizData.quizes}</p>
                </div>
                <h1 className='text-lg font-bold mt-6'>Mixed quiz</h1>
                <div className="w-full justify-between mt-4 flex-col shadow-lg border-4 border-zinc-200/[.1] bg-zinc-400/[.1] rounded-lg py-2 px-2 flex items-center">
                    <img className='w-20 object-contain' src="https://cdn-icons-png.flaticon.com/512/6662/6662917.png" alt="" />
                    <h2 className='font-semibold leading-tight mt-2 capitalize'>Random</h2>
                    <h4 className='text-sm'>10 questions</h4>

                </div>
            <div className="mt-4">
                <h1 className='text-lg font-bold mt-6'>Pick quiz of choice</h1>
                <div className="grid grid-cols-2 grid-rows-4 mt-4 gap-6">
                    {categories.map((cat, i) => (
                        <Link to={`/question`} key={i} onClick={(e) => getQusetions(cat.category, cat.tag)}>
                            <div className="h-max rounded-lg border-2 border-zinc-200/[.1] bg-zinc-400/[.1] shadow-lg p-4">
                                <img className='w-16 object-contain' src={cat.image} alt="" />
                                <h2 className='font-semibold leading-tight mt-2 capitalize'>{cat.tag ? cat.tag : cat.category}</h2>
                                <h4 className='text-sm'>10 questions</h4>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Intro