
'use client'
import { useEffect, useState, useLayoutEffect, useRef } from 'react';


// TODO: move to outer json for config
const attributes = ["a Computer Scientist", "a Mathematician", "a Maker", "a Developer", "a Data Scientist", "a Machine Learning Engineer"];
const prefix = "Carles Onielfa is ";
let wordIndex = 0;
let attrIndex = 0;
let writeOrder = true;

export default function ResponseWindow({onAnimationEnd}) {
    const [responseText, setResponseText] = useState(' '),
        [attributeText, setAttributeText] = useState(''),
        [carat, setCarat] = useState('▌'),
        [count, setCount] = useState(0),
        [ticking, setTicking] = useState(true);

    function updateText(){
        setResponseText(prefix.substring(0, count))
        // Iterate over each word in the carrousel
        if (count >= prefix.length) {
            wordIndex += writeOrder ? 1 : -1;
            const attr = attributes[attrIndex] + "."
            if(wordIndex >= attr.length || wordIndex <= 0){
                if (attrIndex == attributes.length - 1){
                    setTicking(false)
                }
                else if (writeOrder){
                    writeOrder = false;
                }
                else{
                    writeOrder = true;
                    attrIndex += 1;
                    wordIndex = 0;
                }
            }            
            // Iterate over each word in the carrousel
            setAttributeText(attr.substring(0, wordIndex))

        }
        setCount(count + 1)
    }

    useEffect(() => {
        const timer = setTimeout(() => ticking && updateText(), 1e2)
        if(!ticking){
            onAnimationEnd()
        }
        return () => clearTimeout(timer)
    }, [count, ticking])

    return (
        <div className="animate-expand-height">
            <div className="bg-gray-800 px-6 py-6 shadow-2xl mx-8 rounded-b-lg">
                <div className="max-w-xl min-h-[3rem] lg:max-w-lg text-white font-mono text-sm">
                    {responseText}{count < prefix.length && carat}
                    <div>
                        {attributeText}{count >= prefix.length && carat}
                    </div>
                    
                </div>
            </div>
        </div>
    );
}