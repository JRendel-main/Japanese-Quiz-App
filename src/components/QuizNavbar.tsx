import { Button } from 'primereact/button'
import React from 'react'

const QuizNavbar = () => {
  return (
    <nav className='bg-transparent'>
      {/* Add back icon using lucid icon and blurry background */}
        <div className='flex justify-between items-center p-4'>
            <div>
            <Button icon='pi pi-arrow-left' className='p-button-rounded p-button-text' />
            </div>
            <div>
            <h1 className='text-2xl font-bold'>Quiz</h1>
            </div>
            <div>
            <Button icon='pi pi-times' className='p-button-rounded p-button-text' />
            </div>
        </div>
    </nav>
  )
}

export default QuizNavbar
