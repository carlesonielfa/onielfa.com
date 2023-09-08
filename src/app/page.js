'use client'
import { useState, useRef } from 'react';
 
import { useRouter } from 'next/navigation';
import PromptWindow from './welcome.js';
import Link from 'next/link';

export default function Home() {
  const [showResponse, setShowResponse] = useState(false);
  const [ended, setEnded] = useState(false);
  let promptWindowRef = useRef(null);
  const router = useRouter()
  return (
    <div onAnimationEnd={() => {if(ended) {router.push('/about')}}} className={ended && ('animate-disappear')}>
      <div className="h-screen w-screen absolute top-0 left-0 flex justify-center items-center align-middle">
        <div className='m-auto'>
          <PromptWindow innerRef={promptWindowRef} onAnimationEnd={() => setEnded(true)} />
        </div>
      </div>
      <Link type="button" className="!fixed bottom-0 right-0 text-center w-full sm:w-auto sm:bottom-5 sm:right-5 uppercase sm:rounded-lg bg-indigo-300 p-3 text-xs font-medium leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg" href="/about">Skip Animation</Link>
      
    </div>
  )
}