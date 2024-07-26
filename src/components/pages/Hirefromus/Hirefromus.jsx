/* eslint-disable no-unused-vars */
import React from 'react'
import icon1 from './../../../assets/img/contact_icon1.svg'
import icon2 from './../../../assets/img/contact_icon2.svg'
import co1 from './../../../assets/img/co-1.svg'
import co2 from './../../../assets/img/co-2.svg'
import About from './../About/About';
const Hirefromus = () => {
  const posts = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Explore the latest trends and technologies in web development.',
      backgroundImage: co1,
      img: co1
    },
    {
      id: 2,
      title: 'Mastering React',
      description: 'he world cant live without mobile and web applications in this day and age. Everything is digitized, from booking cabs to ordering food to make bank transactions. Thanks to the efficient frameworks that provide a seamless user experience. One such robust frontend library is React. This tutorial on ‘what is React’ will help you understand the librarys fundamentals and work with a simple demo',
      backgroundImage: co2
    },
    {
      id: 3,
      title: 'Mastering React',
      description: 'he world cant live without mobile and web applications in this day and age. Everything is digitized, from booking cabs to ordering food to make bank transactions. Thanks to the efficient frameworks that provide a seamless user experience. One such robust frontend library is React. This tutorial on ‘what is React’ will help you understand the librarys fundamentals and work with a simple demo',
      backgroundImage: co2
    },
  ];

  return (
    <div style={{ marginTop: "100px" }}>
      <div className="relative isolate px-6 pt-14 lg:px-8">
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
        <div className="mx-auto max-w-6xl header">
          <div className="text-center">
            <h1 className="text-3xl font-bold  text-red-600 sm:text-[3em] tracking-wide w-[100%] sm:w-[80%] mx-auto sm:leading-[50px]">
              Discover exceptional talent to empower your business
            </h1>
            <p className="mt-6 text-[1rem] leading-6 text-gray-600 sm:w-[60%] mx-auto py-10">
              Hire the finest candidates selected through rigorous screening, trained by industry experts, and independently assessed for your success
            </p>
          </div>
          <div className="img1">
            <img src={icon2} alt="" className='img1a' />
            <img src={icon1} alt="" className='img2a' />
          </div>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className=" bg-red-600 px-3.5 py-2.5 text-sm font-semibold rounded-3xl text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Start hiring
            </a>
          </div>
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-black sm:text-[3.13em] text-center mt-[6%]">
          Profiles we offer
        </h1>
        {/* <CoursesComponent posts={posts} /> */}
        <div className="py-4 sm:py-1 w-full flex justify-center mx-auto">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 pt-1 sm:mt-16 sm:pt-2 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="flex max-w-xl flex-col items-start justify-between p-4 rounded-3xl border-2 border-opacity-100 hover:border-red-100 h-[180px] w-full relative"
                  style={{ backgroundImage: `url(${post.backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                  <div className="group">
                    <h3 className="mt-2 text-2xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600 w-full sm:w-80">
                      <span className="absolute inset-0" />
                      {post.title}
                    </h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-black sm:text-[3.13em] text-center mt-[10%]">
        Partner companies
        </h1>
        <span className='text-xl flex justify-center  tracking-tight text-black sm:text-[1.13em]  sm: leading-[80px]'>Our graduates are involved in building</span>
        {/* <Join /> */}
        <div className='certificates w-[80%] mx-auto mt-12 flex flex-col md:flex-row gap-5'>
          <div className="left-part w-full md:w-[50%]  md:mt-2 flex flex-col  justify-center items-center">
            <h1 className='text-3xl md:text-3xl mb-5 font-bold text-center  lg:!text-start'>
              Earn a completion certificate
            </h1>
            <span className='text-center'>
              Enhance your professional profile with an online certificate received upon project submission
            </span>
            <button className=' bg-red-500 px-6 py-2 rounded-3xl mt-5 items-center justify-center border-2 border-red-300 w-48'>
              Register Now
            </button>
          </div>
          {/* <div className="right-part w-full md:w-[50%]">
            <img src={cer} alt="Certificate" className='w-full' />
          </div> */}
        </div>
        {/* <div className='certificates w-[80%] mx-auto mt-24 flex flex-col md:flex-row gap-5 '>
          <div className="left-part w-full md:w-[50%] flex justify-center items-center relative overflow-hidden rounded-3xl">
            <img src={student} alt="Student" className='transform transition-transform duration-500 ease-in-out hover:scale-150 img' />
            <div className="overlay absolute inset-0 flex justify-center items-center">
              <h2 className='text-white text-lg md:text-2xl font-bold'>Register for Free</h2>
            </div>
          </div>
          <div className="right-part w-full md:w-[50%] flex justify-center items-center relative overflow-hidden rounded-3xl">
            <img src={contact} alt="Contact" className='transform transition-transform duration-500 ease-in-out hover:scale-150 img' />
            <div className="overlay absolute inset-0 flex justify-center items-center">
              <h2 className='text-white text-lg md:text-2xl font-bold'>Hire From Us</h2>
            </div>
          </div>
        </div> */}
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

export default Hirefromus