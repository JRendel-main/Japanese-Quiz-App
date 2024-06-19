import React, { ReactNode } from 'react'
import { DM_Sans as Inter } from 'next/font/google';
import Navbar from './Navbar';

const inter = Inter({ subsets: ['latin'], display: 'swap', weight: ["400", "700"] });
interface LayoutProps {
    children: ReactNode;
}
function MainLayout({ children }: LayoutProps) {
  return (
    <div className={`${inter.className}`}>
      <Navbar />
      <div className={`px-14`}>
        {children}
      </div>
    </div>
  );
}

export default MainLayout;
