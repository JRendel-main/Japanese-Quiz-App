import React from 'react'
import { ProgressBar } from 'primereact/progressbar'
import { Button } from 'primereact/button'

const quiz = () => {
  return (
    <div className='container'>
      <nav className='bg-transparent'>
        {/* Add back icon using lucid icon and blurry background */}
          <div className='flex justify-between items-center p-4'>
              <div>
              <button className='p-button-rounded p-button-text'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </button>
              </div>
              <div>
              <h1 className='text-2xl font-bold'>
                5/10
              </h1>
              </div>
              <div>
                <p className='text-lg font-light'>1:32</p>
              </div>
          </div>
        </nav>

        <div className="container px-3">
            <div className='mt-1'>
                <ProgressBar value={50} showValue={false} style={{height: '6px'}}/>
            </div>
            <div className='mt-5'>
                <h1 className='text-lg font-bold'>What is this character?</h1>
                <p className='text-lg font-light'>ひ</p>
            </div>
            <div className='mt-5'>
                <button className='p-button p-button-outlined p-button-secondary w-full py-3'>
                    ひ
                </button>
                <button className='p-button p-button-outlined p-button-secondary w-full py-3 mt-3'>
                    ほ
                </button>
                <button className='p-button p-button-outlined p-button-secondary w-full py-3 mt-3'>
                    へ
                </button>
                <button className='p-button p-button-outlined p-button-secondary w-full py-3 mt-3'>
                    は
                </button>
            </div>
            <div className='mt-6'>
                <Button label='Next' rounded outlined className='w-full p-button-success p-button-raised' />
            </div>
        </div>

    </div>
  )
}

export default quiz
