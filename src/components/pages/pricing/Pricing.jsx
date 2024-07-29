/* eslint-disable no-unused-vars */
import React from 'react'
import react from './../../../assets/img/react.png'
import js from './../../../assets/img/js.png'
import db from './../../../assets/img/mongo.png'
import html from './../../../assets/img/html.png'
import css from './../../../assets/img/css.png'
import node from './../../../assets/img/node.png'
import cap from './../../../assets/img/img5.svg'
import Accordion from './../../../Accordion';
import Question from './../../Question';
import capbackground from "../../../assets/img/cap-background.webp"
const Pricing = () => {

    const features = [
        {
            title: 'Live Interactive Sessions',
            description: 'Weekly live interactive sessions on Google Meet by expert trainers.',
        },
        {
            title: 'Capstone Project',
            description: 'A final project that allows students to apply their learning to solve real-world problems.',
        },
        {
            title: 'Certification',
            description: 'Post successful completion of course all learners will be awarded with Fynd Academy Certificates.',
        },
        {
            title: 'Placement Assistance',
            description: 'To help graduates find relevant job opportunities and prepare for the workforce.',
        },
        {
            title: 'Mentorship & Doubt Solving Support',
            description: 'Guidance from experienced professionals to support learning and career development.',
        },
        {
            title: 'Interview Preparation & Soft Skills Training',
            description: 'Students will be trained in interview and soft skills for success in any job.',
        },
        {
            title: 'Coding Camps',
            description: 'Interactive workshops teaching essential coding skills through practical projects and activities.',
        },
        {
            title: 'Community',
            description: 'Network with like-minded peers, platform to share knowledge and explore growth opportunities.',
        },
    ];

    const questionsAnswers = [
        {
            question: "What is React?",
            answer: "React is a JavaScript library for building user interfaces."
        },
        {
            question: "How does React work?",
            answer: "React creates a virtual DOM in memory and synchronizes it with the real DOM."
        },
        {
            question: "What are components in React?",
            answer: "Components are independent, reusable pieces of code in a React application."
        },
        {
            question: "How do you create a component in React?",
            answer: "A component can be created using a JavaScript function or a class."
        },

    ];
    const logos = [
        { src: react, alt: 'React', gradient: 'bg-gradient-red' },
        { src: db, alt: 'MongoDB', gradient: 'bg-gradient-blue' },
        { src: node, alt: 'Node.js', gradient: 'bg-gradient-green' },
        { src: js, alt: 'JavaScript', gradient: 'bg-gradient-purple' },
        { src: css, alt: 'CSS3', gradient: 'bg-gradient-orange' },
        { src: html, alt: 'HTML5', gradient: 'bg-gradient-teal' },
    ];
    return (
        <div style={{ marginTop: "100px" }}>
            <div className=''>
                <div className="relative isolate px-6 pt-8 lg:px-8">
                    <div
                        aria-hidden="true"
                        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    >
                        <div
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        />
                    </div>
                    <div className="">
                        <div className="w-[90%] mx-auto">
                            <div className="flex flex-col lg:flex-row justify-between items-center">
                                <div>
                                    <h1 className="text-3xl lg:text-4xl font-bold text-purple-800 mb-10">Full Stack JavaScript (MERN)</h1>
                                    <p className="mt-4 text-lg text-gray-700">
                                        Our 12-week programming course covers frontend, backend, and database management. With expert guidance and mentorship, you'll be well-prepared for a successful career launch.
                                    </p>
                                    <div className="mt-6 flex flex-col lg:flex-row lg:space-x-8 space-y-4 lg:space-y-0">
                                        <div>
                                            <h2 className="text-xl font-semibold text-gray-800">Google Meet</h2>
                                            <p className="text-gray-600">Interactive live sessions</p>
                                        </div>
                                        <div>
                                            <h2 className="text-xl font-semibold text-gray-800">2 Months</h2>
                                            <p className="text-gray-600">Comprehensive live training</p>
                                        </div>
                                        <div>
                                            <h2 className="text-xl font-semibold text-gray-800">Placement</h2>
                                            <p className="text-gray-600">Support for 6 Months</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-8 lg:mt-0 lg:ml-8  rounded-3xl w-[90%] sm:w-[60%] shadow-md p-6 text-center">
                                    {/* <h3 className="text-xl font-semibold text-purple-800 mt-2">Coming Soon</h3> */}
                                    <p className="text-3xl font-bold text-purple-800 mt-4">₹11,499/-</p>
                                    <p className="text-sm text-gray-500 line-through">₹14,999/-</p>
                                    <button className="mt-6 px-6 py-2 bg-purple-600 text-white rounded-full w-[100%] sm:w-[50%]">Notify Me</button>
                                </div>
                            </div>
                            <div className="mt-12">
                                <h2 className="text-xl sm:text-4xl  font-bold text-gray-800 text-center mt-24 mb-10">Tools and Softwares</h2>
                                <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-1 gap-y-8 imglogo w-[100%] mx-auto">
                                    <img src={react} alt="React" className="w-[80%] mx-auto border-2 rounded-3xl p-8" />
                                    <img src={db} alt="MongoDB" className="w-[80%] mx-auto border-2 rounded-3xl p-8" />
                                    <img src={node} alt="Node.js" className="w-[80%] mx-auto border-2 rounded-3xl p-8" />
                                    <img src={js} alt="JavaScript" className="w-[80%] mx-auto border-2 rounded-3xl p-8" />
                                    <img src={css} alt="CSS3" className="w-[80%] mx-auto border-2 rounded-3xl p-8" />
                                    <img src={html} alt="HTML5" className="w-[80%] mx-auto border-2 rounded-3xl p-8" />
                                </div>
                            </div>





                            <div className="py-8 sm:py-16">
                                <div className="container mx-auto bg-cover bg-no-repeat w-full min-h-60 rounded-3xl"
                                    style={{ backgroundImage: `url(${capbackground})` }}>
                                    <div className="flex flex-col items-center justify-center min-h-[60vh] lg:flex-row lg:justify-center lg:items-center p-6">
                                        <div className="mb-6 lg:mb-0 lg:mr-6 flex-shrink-0">
                                            <img src={cap} loading="lazy" alt="cap masters images" className="w-full h-auto lg:w-auto" />
                                        </div>
                                        <div className="text-center lg:text-left flex-1">
                                            <h2 className="text-3xl sm:text-4xl lg:text-3xl xl:text-4xl mb-5">
                                                Get a chance to win upto
                                            </h2>
                                            <h2 className="text-3xl sm:text-5xl lg:text-4xl xl:text-5xl text-yellow-500">
                                                100% Scholarship
                                            </h2>
                                            <div className="mt-6">
                                                <div className="text-xl sm:text-2xl lg:text-xl xl:text-2xl">
                                                    Take the Python scholarship test now!
                                                </div>
                                            </div>
                                            <div className="mt-8">
                                                <a href="#" className="px-8 py-4 lg:px-12 xl:px-16 bg-white text-black rounded-3xl shadow-md hover:bg-gray-200 transition duration-300">
                                                    Register Now
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            
                            <Accordion />
                        </div>
                        <div className='mt-16 text-xl sm:text-4xl text-center font-bold mb-5'>
                            <h1>See what we offer</h1>
                            <div className="flex flex-wrap justify-center gap-4 p-4 w-[100%] sm:w-[60%] mx-auto ">
                                {features.map((feature, index) => (
                                    <div
                                        key={index}
                                        className={`bg-white rounded-lg shadow-md py-8 px-4 max-w-sm  text-start w-[80%]
                                                }`}
                                    >
                                        <h2 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h2>
                                        <p className="text-sm">{feature.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="question-container sm:flex w-[90%] mx-auto top-0 sm:mt-24">
                            <h1 className='sticky-header w-auto text-xl md:text-[3rem] sm:mt-24 sm:text-3xl tracking-wider text-center font-semibold mt-12 mb-5 !leading-snug'>Frequently Asked Questions</h1>
                            <Question />
                        </div>
                    </div>
                </div>
            </div>
            <div
                aria-hidden="true"
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                />
            </div>
        </div>
    )
}

export default Pricing