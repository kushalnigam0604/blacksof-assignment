import React from 'react'
import Form from './Form'

function Body() {
  return (
    <div className='flex w-4/5 m-auto flex-wrap bg-black pt-20 pb-20'>
      <div className='w-1/2 '>
          <p className='text-white text-3xl font-normal mb-5'>Searching for <p className='font-bold'>Augumented Development</p> Teams to steer your product towards triump?</p>
          <div className='flex text-white'>
              <div className='w-1/4'>
                  <p className='font-extrabold text-xl'>50+</p>
                  <p className='text-xs'>Clients</p>
              </div>
              <div className='w-1/4'>
                  <p className='font-extrabold text-xl'>80+</p>
                  <p className='text-xs'>Projects successfully completed</p>
              </div>
              <div className='w-1/4'>
                  <p className='font-extrabold text-xl'>60%</p>
                  <p className='text-xs'>of the client converted into long term</p>
              </div>

          </div>
      </div>
      <Form/>
    </div>
  )
}

export default Body
