/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import soon from "./../../src/assets/img/refister.jpg";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
const CoursesComponent = ({ posts }) => {
  return (
    <div className="py-4 sm:py-1 w-[100%] flex justify-center mx-auto ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16  border-red-200 pt-1 sm:mt-16 sm:pt-2 lg:mx-0 lg:max-w-none lg:grid-cols-2 ">
          {posts.map((post) => (
            <article
              key={post.id}
<<<<<<< HEAD
              className="flex max-w-xl flex-col items-start justify-between p-6 rounded-3xl border border-opacity-100 hover:border-red-100 h-[110%] w-[100%] relative"
              style={{
                backgroundImage: `url(${post.backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <img
                src={soon}
                alt=""
                className="top-[-4.5%] right-[9%] absolute w-40"
              />
=======
              className="flex max-w-xl flex-col items-start justify-between p-4 rounded-3xl border border-opacity-100 hover:border-red-100 h-[110%] w-[100%] relative"
              style={{ backgroundImage: `url(${post.backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <img src={soon} alt="" className='top-[-5.5%] right-[9%] absolute w-40' />
>>>>>>> 2c808bae1cbcb5ba9981c87001d616e3938816f4
              <div className="group relative">
                <h3 className="mt-3 text-2xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600 w-60">
                  <span className="absolute inset-0 w-[50%]" />
                  {post.title}
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 w-[60%]">
                  {post.description}
                </p>
                {/* <img src={soon} alt="comin" /> */}
              </div>
              <Link to={`/pricing/${post.title}`}>
                <p className="text-[12px] mt-6 flex items-center">
                  Know More <IoIosArrowRoundForward className="text-[16px]" />
                </p>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};


export default CoursesComponent;
