import React from 'react'
import Typewriter from 'typewriter-effect';
const Home = () => {
  
  return (
    
    <>
    <section className="px-4 sm:px-4 md:px-4 py-16 dark:bg-gray-900" id="Home" >
    <div className='flex flex-col dark:bg-gray-900 dark:text-white justify-center items-center h-screen md:h-[80vh] lg:h-[60vh] w-full text-[#10002B] text-5xl gap-4 font-mono font-extrabold mt-20 start(3)'>Hello, I am <p className='bg-gradient-to-r from-purple-600 to-fuchsia-500 bg-clip-text text-transparent'>Arya</p>
     < div className="w-full text-center text-[25px] sm:text-[15px] md:text-[40px] lg:text-[50px]">
      <Typewriter
          options={{
            strings: [' Aspiring Web-Developer', ' Aspiring Designer', 'Welcome to my portfolio!'],
            autoStart: true,
            loop: true,
            delay: 75, 
            deleteSpeed: 50, 
          }}
          
        />
        </div>
        
        
     </div>

     </section>
    </>  
)

}

export default Home