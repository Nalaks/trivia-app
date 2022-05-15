import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { fetchQuizQuestions } from '../api/questionApi';
import { GetServerSideProps } from 'next';
import { useEffect } from 'react';

const Home: NextPage = () => {
  useEffect(() => {
    const data = fetchQuizQuestions(10, 'easy', 9);
    console.log(data);
  }, []);

  return (
    <>
      <Head>
        <title>Trivia App</title>
        <meta name='description' content='Trivia App' />
      </Head>

      <div>
        <h1 className='text-5xl font-bold underline'>Hello Next.js</h1>
        <div className='relative z-10 flex flex-col items-start justify-start p-10 bg-white shadow-2xl rounded-xl'>
          <h4 className='w-full text-4xl font-medium leading-snug text-center'>
            Example contact form
          </h4>
          <form className='relative w-full mt-6 space-y-8'>
            <div className='relative'>
              <label className='absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white'>
                First Name
              </label>
              <input
                type='text'
                className='block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black'
                placeholder='John'
              />
            </div>
            <div className='relative'>
              <label className='absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white'>
                Last Name
              </label>
              <input
                type='text'
                className='block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black'
                placeholder='Doe'
              />
            </div>
            <div className='relative'>
              <label className='absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white'>
                Email Address
              </label>
              <input
                type='text'
                className='block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black'
                placeholder='janedoe@email.com'
              />
            </div>
            <div className='relative'>
              <button className='inline-block w-full px-5 py-4 text-xl font-medium text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-500 ease'>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

// export const getServerSideProps: GetServerSideProps = async () => {
//   const data = fetchQuizQuestions(10, 'easy', 9);
//   return {
//     props: { data },
//   };
// };

export default Home;
