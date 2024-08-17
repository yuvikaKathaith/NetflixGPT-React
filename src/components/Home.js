import React from 'react'
import Header from './Header'
import Hero from './Hero'
const Home
 = () => {
  return (
    <div>
      <Header />
        <div>
          <Hero />
          <div className='absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50'>
              <h1 className='text-white text-5xl font-bold m-0.5 mt-48'>
              Unlimited films, TV programmes and more</h1>
              <h3 className='text-white text-2xl m-5'>Watch anywhere. Cancel at any time.</h3>
              <h3 className='text-white text-xl'>Ready to watch? Enter your email to create or restart your membership.</h3>
              <div className='flex flex-row p-4 mt-2 mb-12 ml-4 mr-6 place-content-start'>
                <input type="email" placeholder="Email address" className='w-[364px] h-[56px] p-2 text-white text-bold bg-black bg-opacity-50 border border-white border-opacity-50 rounded'/>
                <button className='place-content-end bg-red-600 w-[200px] h-[55px] text-2xl text-white font-bold ml-1.5'>Get Started &rarr; </button>     
              </div>
          </div>
        </div>
    </div>
  )
}


export default Home