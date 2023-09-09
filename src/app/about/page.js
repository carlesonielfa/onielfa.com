'use client'
import { useEffect, useState, useRef, unmountComponentAtNode } from 'react';
import Link from 'next/link';

export default function About() {
  const [showResponse, setShowResponse] = useState(false);
  let promptWindowRef = useRef(null);

  return (
    <div className="bg-gray-400 h-screen flex dark:bg-black">
      <div class="min-w-0  flex-1 px-6 py-11">
        <h2 className='animate-text-popup text-5xl tracking-tight uppercase font-bold text-white sm:text-6xl'>
          Carles &nbsp; Onielfa

        </h2>
      </div>
    </div>

  )
}