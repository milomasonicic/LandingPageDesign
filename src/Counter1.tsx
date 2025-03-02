import Counter from "./Counter"
import React, { useEffect, useRef } from "react";

interface CounterProps {
    onVisible: () => void
}

function Counter1({onVisible}:CounterProps) {

    const counterRef = useRef(null);

  useEffect(() => {
    // Kreiranje IntersectionObserver-a
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Ako je Counter komponenta postala vidljiva, pozivamo onVisible funkciju
            onVisible();
          }
        });
      },
      {
        threshold: 0.5, // Kad 50% komponente postane vidljivo, okida se
      }
    );

    // Posmatranje Counter komponente
    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    // Čišćenje Observer-a pri unmount-u
    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [onVisible]);
    return(
        <div className=" w-full">
            <div className="max-w-[1440px] 
                flex md:flex-row flex-col md:items-center
                justify-center
                mx-auto md:h-[225px] h-[550px]">
                <div className="md:w-[40%] 
                    md:h-[80%] h-[33%]
                    flex items-center
                    w-[100%] text-xl  
                    px-2">
                    <h1 className="text-2xl px-2 text-zinc-50 font-bold">
                        Strategically located within your reach, 
                        we’ll take your ambitious project from an intriguing idea to a smashing success.
                    </h1>
                </div>

                <div className="md:w-[30%]  
                    md:h-[80%] h-[33%]
                    flex items-center
                    w-[100%] text-xl 
                    border-b-4 
                    px-2">
                    <Counter targetNumber={222} label="PROJECTS"></Counter>
                </div>

                <div className="md:w-[30%] 
                    md:h-[80%] h-[33%]
                    flex items-center 
                    w-[100%] text-xl  
                    border-b-4 
                    px-2">
                    <Counter targetNumber={72} label="TECH PROFESSIONALS"></Counter>
                </div>
            </div>

        </div>
    )
}

export default Counter1