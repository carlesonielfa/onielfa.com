import { useState } from 'react';
function About() {
    const topics = [
        {
            key: 0,
            title: "Background in",
            body: ["Mathematics", "Computer Science"],
            text_color: "text-white",
            ring_color: "ring-white"
        },
        {
            key: 1,   
            title: "Passionate about Machine Learning in",
            body: ["Language", "Vision", "Genomics"],
            text_color: "text-white",
            ring_color: "ring-white"
        },
        {
            key: 2,
            title: "Currently developing",
            body: ["Cutting-edge Machine Learning for Enterprise RAG-as-a-service "],
            text_color: "text-white",
            ring_color: "ring-white"
        },
        {
            key: 3,
            title: "Personal interests include",
            body: ["Game Development", "Music Production", "Electronic Projects"],
            text_color: "text-white",
            ring_color: "ring-white"
        },
    ]
    function topic(title, body, text_color, ring_color, key){
        return (
            <div key={key}>
            <h2 className='text-center text-base font-semibold'>{title}</h2>
            <div className='flex flex-row w-full justify-center text-md text-center sm:gap-8 gap-2 mt-2 mb-2 font-bold text-sm sm:text-base items-center'>
                {
                    body.map((item) => (
                        <div class={text_color+" "+ring_color+" ring-1  rounded-md shadow-md py-1 px-2 bg-white/10"}>
                            {item}
                        </div>
                    ))
                }
                </div>
            </div>
        )
    }
    return (
        <div className="flex flex-col gap-4 sm:mt-2">
            {
                topics.map((t) => (
                    topic(t.title, t.body, t.text_color, t.ring_color, t.key)
                ))
            }
            <span className='text-center text-sm font-mono mt-2'>
                Always looking for a new challenge to learn and grow.
            </span>
        </div>
    );
}

export default About;