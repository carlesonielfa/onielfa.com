'use client'
import { useEffect, useState , useRef, unmountComponentAtNode} from 'react';
import PromptWindow from './promptwindow.js';

export default function Home() {
  const [showResponse, setShowResponse] = useState(false);
  let promptWindowRef = useRef(null);

  return (
    <PromptWindow innerRef={promptWindowRef}/>
  )
}