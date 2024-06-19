import MainLayout from '@/components/MainLayout'
import { Button } from 'primereact/button'
import React from 'react'
import { Card } from 'primereact/card';

function Home() {
  
  const goToQuiz = () => {
    
  }

  return (
    <MainLayout>
      <div className="container mx-auto mt-4">
        <Card>
          <h1 className="text-4xl font-bold text-center">Welcome to the Japanese Learning App</h1>
        
        <p className="text-center mt-4">
          This is a simple application that helps you learn Japanese. 
          You can create an account, login, and start learning Japanese.
        </p>
        <div className='flex justify-center mt-3 items-center'>
          <Button label="Get Started" severity='success' onClick={() =>  window.open('/learn/getstarted', '_blank')}/>
        </div>
        </Card>
      </div>
    </MainLayout>
  )
}

export default Home
