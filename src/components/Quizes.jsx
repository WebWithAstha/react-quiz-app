import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Axios from '../utils/axios'
import { useDispatch, useSelector } from 'react-redux'
import { asyncSetQuestions } from '../store/actions/allQuestionActions'

const Intro = () => {

    const initialCategories = [
        { category: 'linux', image: "https://cdn-icons-png.flaticon.com/512/15465/15465695.png" },
        { category: 'code', tag: 'javascript', image: "https://cdn-icons-png.flaticon.com/512/9695/9695722.png" },
        { category: 'devops', image: "https://cdn-icons-png.flaticon.com/512/5405/5405899.png" },
        { category: 'code', tag: 'html', image: "https://cdn-icons-png.flaticon.com/512/1051/1051277.png" },
        { category: 'sql', image: "https://cdn-icons-png.flaticon.com/512/4492/4492311.png" },
        { category: 'cms', image: "https://cdn-icons-png.flaticon.com/512/3950/3950815.png" },
        { category: 'bash', image: "https://cdn-icons-png.flaticon.com/512/919/919837.png" },
        { category: 'docker', image: "https://cdn-icons-png.flaticon.com/512/2721/2721652.png" },
        { category: 'code', tag: 'php', image: "https://cdn-icons-png.flaticon.com/512/2721/2721652.png" },
    ];

    const [categories, setCategories] = useState(initialCategories);
    const userQuizData = useSelector(store => store.userQuizDataSlice)
    // console.log(userQuizData)
    
    const dispatch = useDispatch()



    const getQusetions = async (category, tag) => {

        const { data } = await Axios.get(`/questions?apiKey=0t8gkoXo9bdE32smqbPtWlf1zL45hcoDrdBH5qpg&limit=10&category=${category}&difficulty=easy&tags=${tag ? tag : ''}`)

        const answers = data.map(q => {
            return Object.entries(q.answers).map(([key, val]) => {
                return  {[key]: false}
            })
        })
        console.log(data)
        console.log(data[0].category)

        const userQuizData = {
            quizes: 0,
            questions: data,
            category,
            tag,
            answers
        }

        dispatch(asyncSetQuestions(userQuizData))

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
            <div className="flex items-center justify-between shadow-lg border-4 border-zinc-300/[.1] bg-zinc-500/[.1] rounded-lg p-2">

                <div className="w-1/2 border-r px-2 flex items-center gap-2">
                    <img className='w-8 object-contain' src="https://cdn-icons-png.flaticon.com/512/2827/2827957.png" alt="" />
                    <div className="">
                        <h1 className='text-lg font-bold'>Quizs</h1>
                        <p className='text-sm text-sky-500 font-bold'>000</p>
                    </div>
                </div>
                <div className="w-1/2 flex px-2 items-center gap-2">
                    <img className='w-8 object-contain' src="https://cdn-icons-png.flaticon.com/512/2827/2827957.png" alt="" />
                    <div className="">
                        <h1 className='text-lg font-bold'>Quizs</h1>
                        <p className='text-sm text-sky-500 font-bold'>000</p>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <h1 className='text-lg font-bold mt-6'>Quizes</h1>
                <div className="grid grid-cols-2 grid-rows-4 mt-4 gap-6">
                    {categories.map((cat, i) => (
                        <Link to={`/question/${0}`} key={i} onClick={(e) => getQusetions(cat.category, cat.tag)}>
                            <div className="h-max rounded-lg border-2 border-zinc-300/[.1] bg-zinc-500/[.1] shadow-lg p-4">
                                <img className='w-16 object-contain' src={cat.image} alt="" />
                                <h2 className='font-semibold leading-tight mt-2 capitalize'>{cat.tag ? cat.tag : cat.category}</h2>
                                <h4 className='text-sm'>20 questions</h4>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="grid hidden grid-cols-2 grid-rows-4 mt-4 gap-6">

                    <Link to="/quiz/linux/1">
                        <div className="h-max rounded-lg border-2 border-zinc-300/[.1] bg-zinc-500/[.1] shadow-lg p-4">
                            <img className='w-16 object-contain' src="https://cdn-icons-png.flaticon.com/512/15465/15465695.png" alt="" />
                            <h2 className='font-semibold leading-tight mt-2'>Linux</h2>
                            <h4 className='text-sm'>20 questions</h4>
                        </div>
                    </Link>
                    <div className="h-max rounded-lg border-2 border-zinc-300/[.1] bg-zinc-500/[.1] shadow-lg p-4">
                        <img className='w-16 object-contain' src="https://cdn-icons-png.flaticon.com/512/9695/9695722.png" alt="" />
                        <h2 className='font-semibold leading-tight mt-2'>Javascript</h2>
                        <h4 className='text-sm'>20 questions</h4>
                    </div>

                    <div onClick={(e) => (getQusetions('devops'))} className="h-max rounded-lg border-2 border-zinc-300/[.1] bg-zinc-500/[.1] shadow-lg p-4">
                        <img className='w-16 object-contain' src="https://cdn-icons-png.flaticon.com/512/5405/5405899.png" alt="" />
                        <h2 className='font-semibold leading-tight mt-2'>DevOps</h2>
                        <h4 className='text-sm'>20 questions</h4>
                    </div>
                    <div className="h-max rounded-lg border-2 border-zinc-300/[.1] bg-zinc-500/[.1] shadow-lg p-4">
                        <img className='w-16 object-contain' src="https://cdn-icons-png.flaticon.com/512/1051/1051277.png" alt="" />
                        <h2 className='font-semibold leading-tight mt-2'>Html</h2>
                        <h4 className='text-sm'>20 questions</h4>
                    </div>
                    <div className="h-max rounded-lg border-2 border-zinc-300/[.1] bg-zinc-500/[.1] shadow-lg p-4">
                        <img className='w-16 object-contain' src="https://cdn-icons-png.flaticon.com/512/4492/4492311.png" alt="" />
                        <h2 className='font-semibold leading-tight mt-2'>Sql</h2>
                        <h4 className='text-sm'>20 questions</h4>
                    </div>
                    <div className="h-max rounded-lg border-2 border-zinc-300/[.1] bg-zinc-500/[.1] shadow-lg p-4">
                        <img className='w-16 object-contain' src="https://cdn-icons-png.flaticon.com/512/3950/3950815.png" alt="" />
                        <h2 className='font-semibold leading-tight mt-2'>Cms</h2>
                        <h4 className='text-sm'>20 questions</h4>
                    </div>
                    <div className="h-max rounded-lg border-2 border-zinc-300/[.1] bg-zinc-500/[.1] shadow-lg p-4">
                        <img className='w-16 object-contain' src="https://cdn-icons-png.flaticon.com/512/919/919837.png" alt="" />
                        <h2 className='font-semibold leading-tight mt-2'>Bash</h2>
                        <h4 className='text-sm'>20 questions</h4>
                    </div>
                    <div className="h-max rounded-lg border-2 border-zinc-300/[.1] bg-zinc-500/[.1] shadow-lg p-4">
                        <img className='w-16 object-contain' src="https://cdn-icons-png.flaticon.com/512/2721/2721652.png" alt="" />
                        <h2 className='font-semibold leading-tight mt-2'>Php</h2>
                        <h4 className='text-sm'>20 questions</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro