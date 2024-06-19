import Link from 'next/link'
import { Card } from 'primereact/card'
import React from 'react'

const index = () => {
  return (
    <div className='container px-3'>
      <Card>
        <h1 className='text-2xl font-bold'>Take Hiragana Quiz (10pts)</h1>
        
        <p className='mt-3'>
          This quiz will test your knowledge of the Hiragana writing system. You will be shown a Hiragana character and you will have to select the correct Romaji translation from the multiple choice options.
        </p>
        
        <div className='mt-5'>
          <h2 className='text-xl font-bold'>Learning Objective</h2>
          <ul className='list-disc pl-5'>
            <li>Identify Hiragana characters</li>
            <li>Match Hiragana characters to Romaji</li>
          </ul>
        </div>

        <div className="mt-5">
            <h2 className='text-xl font-bold'>Quiz Brief</h2>
            <ul className='list-disc pl-5'>
              <li>10 Questions</li>
              <li>Multiple Choice</li>
              <li>1 Point per Correct Answer</li>
            </ul>
        </div>
      </Card>

      <footer>
        <Link href="hiragana/quiz" className='mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full fixed bottom-0 mx-auto'>
          Start Quiz
        </Link>
      </footer>
    </div>
  )
}

export default index
