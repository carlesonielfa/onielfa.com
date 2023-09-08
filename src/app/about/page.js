'use client'
import { useEffect, useState , useRef, unmountComponentAtNode} from 'react';
import Link from 'next/link';

export default function About() {
  const [showResponse, setShowResponse] = useState(false);
  let promptWindowRef = useRef(null);

  return (
    <div>
        Hello!
      
    </div>
  )
}