import React, { useState } from 'react'


const Counter = () => {
     const [count, setCount]= useState<number>(0)
     const increment = (): void => {
          setCount(count + 1);
        };
        
        const decrement = (): void => {
          if(count>0){
          setCount(count - 1);
          }
        };
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4">
  
  <button className="my-6 py-2 px-4 border-2 border-blue-400 text-2xl md:text-3xl">
    {count}
  </button> 

  <div className="my-4 flex flex-col sm:flex-row gap-4">
    
    <button
      className="border-2 border-blue-400 py-2 px-4 text-lg md:text-2xl text-gray-500 cursor-pointer"
      onClick={increment}
    >
      Increment
    </button>

    <button
      disabled={count === 0}
      className={`border-2 py-2 px-4 text-lg md:text-2xl ${
        count === 0
          ? "border-blue-400 text-gray-500 cursor-not-allowed"
          : "border-blue-400 text-gray-500 cursor-pointer"
      }`}
      onClick={decrement}
    >
      Decrement
    </button>

  </div>

</section>
  )
}

export default Counter
