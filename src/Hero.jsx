import React from 'react'

const Hero = () => {
  return (
    <>
      <div className='relative'>
        <div className="p-10">
          <h1 className="text-5xl font-bold mb-2">
            Try Salesforce <br /> Starter Suite for <br /> free.
          </h1>
          <p className="text-lg mt-6" >
            Unite marketing, sales, and service in a single app. Try <br /> Salesforce Starter Suite today.
            There's nothing to install. <br />
            No credit card required.
          </p>
          <br />
          <br />
          <div className='flex gap-5'>
            <button className='text-2xl m-3 p-4 bg-sky-600   hover:bg-blue-800' >Start free trial</button>
            <br />
            <button className='text-2xl  border m-3 p-4  hover:bg-blue-800  text-white-800 '> Watch demo</button>
          </div>
        </div>
        <div >
          <img className="absolute h-100 w-264  right-0 top-0" src=" https://wp.sfdcdigital.com/en-ap/wp-content/uploads/sites/14/2024/02/php-marquee-starter-lg-bg.jpg?w=1024" alt="img" />
        </div>

        <div className="bg-white text-blue-800 text-center text-4xl">
          Learn what Salesforce products can do for
          <br />  you.
        </div>
 

        </div> 
      </>
    
  )
}

export default Hero