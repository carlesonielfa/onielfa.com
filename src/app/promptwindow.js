'use client'
import { useEffect, useState, useLayoutEffect, useRef } from 'react';
import ResponseWindow from './responsewindow';
export default function PromptWindow({ onAnimationEnd, innerRef }) {
    const text = "Who is Carles Onielfa?"
    const [focusedInput, setFocusedInput] = useState(false),
        [ticking, setTicking] = useState(true),
        [count, setCount] = useState(0),
        [promptText, setPromptText] = useState(''),
        [submitButtonText, setSubmitButtonText] = useState('▶'),
        [showResponse, setShowResponse] = useState(false)


    const caratInterval = 6;
    const framesUntilButton = 10;
    const framesUntilExit = 10;

    function updateText() {
        setFocusedInput(true);
        // Set promptText to a substring of text from 0 to count
        setPromptText(text.substring(0, count) + (((count < text.length || count % caratInterval < caratInterval / 2) && count < text.length + framesUntilButton) ? '|' : ''));
        // If count is equal to the length of text, animate the submit button with 3 dots
        if (count >= text.length + framesUntilButton) {
            setFocusedInput(false)
            setSubmitButtonText("...".substring(0, count % 4))
        }
        if (count >= text.length + framesUntilButton + framesUntilExit) {
            setShowResponse(true);
        }
        // Increment count
        setCount(count + 1)
    }
    useEffect(() => {
        const timer = setTimeout(() => ticking && updateText(), 2e2)
        return () => clearTimeout(timer)
    }, [count, ticking])


    return (
        <div className="h-screen w-screen absolute top-0 left-0 flex justify-center items-center align-middle max-w-7xl">
            <div className='m-auto'>
                <div ref={innerRef} className={(showResponse ? "animate-slide-out-top " : "") + "isolate block bg-gray-900 px-6 py-6 shadow-2xl mx-2 rounded-lg"}>
                    <div className="max-w-xl lg:max-w-lg">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-center sm:text-left">Prompt:</h2>
                        <div className="mt-6 flex max-w-md gap-x-4">
                            <input
                                id="typewrite"
                                className={(focusedInput ? "disabled:ring-2 disabled:ring-inset disabled:ring-indigo-500" : "") + " typewrite min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"}
                                placeholder="Enter your prompt"
                                disabled
                                autoFocus
                                value={promptText}
                            >
                            </input>
                            <button
                                id="submit-btn"
                                type="submit"
                                className="rounded-md inline-block min-w-[42px] bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                            >
                                {submitButtonText}
                            </button>
                        </div>
                    </div>
                </div>
                <ResponseWindow/>
            </div>
        </div>
    )
}