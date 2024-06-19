import Link from 'next/link'
import React from 'react'
import { Button } from 'primereact/button';

const Navbar = () => {
  return (
    <nav className="bg-slate-100 p-4">
      <div className="container mx-auto flex justify-between items-center fixded">
        <div>
          <Link href="/" className="text-dark text-2lg font-bold">Japanese Learning App</Link>
        </div>
        <div className="flex items-center">
          <div className="hidden md:block">
            <Link href="/login" className="p-button mr-4">Login</Link>
            <Link href="/register" className='p-button'>Sign Up</Link>
          </div>
          <button className="md:hidden p-button">Menu</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
