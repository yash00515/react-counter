import React from 'react'
import './Style.css'

const Hero3 = () => {
    return (
        <>


<br /><br />
<br />
<br />
            {/* cards and photo */}


            <div className=" -top-12  ">
                {/* mountain img */}
                <div className='mountain'>

                    <img
                        className="w-full"
                        src=" https://wp.sfdcdigital.com/en-in/wp-content/uploads/sites/21/2023/03/pb-hp-products-bg.png?w=1024"
                        alt="img"
                    />
                </div>

                {/* cards  */}
                <div className=" relative flex gap-7 newCard justify-center">

                    <div className='rounded-2xl shadow-md p-6 w-44'>
                        <div className="h-50 w-30 rounded-full justify-center   items-center">
                            <img src="https://wp.sfdcdigital.com/en-in/wp-content/uploads/sites/21/2023/03/pb-hp-product-smb_icon-1.jpg?w=873" alt="img" className='h-20 w-30' />

                            <h3 className='text-blue-500 text-center mt-4'> Small Business</h3>

                            <p className='mt-2 text-center text-shadow-orange-400 '>Sales, service, and email  <br /> outreach tools in a single app.</p>
                        </div>

                        <div className="mt-11 text-center">
                            <p className='underline font-medium text-left'> Learn more</p>
                        </div>



                    </div>



                    {/* 2 */}
                    <div className='rounded-2xl shadow-md p-6 w-44'>
                        <div className="h-50 w-30 rounded-full justify-center   items-center">
                            <img src="https://wp.sfdcdigital.com/en-in/wp-content/uploads/sites/21/2023/03/pb-hp-product-smb_icon-2.jpg?resize=768,433" alt="img" className='h-20 w-30' />

                            <h3 className='text-blue-500 text-center mt-4'> Sales Cloud</h3>

                            <p className='mt-2 text-center text-shadow-orange-400 '>Close more deals and speed <br /> up growth with the #1 CRM.</p>
                        </div>

                        <div className="mt-11 text-center">
                            <p className='underline font-medium text-left'> Learn more</p>
                        </div>

                    </div>


                    {/* 3 */}


                    <div className='rounded-2xl shadow-md p-6 w-44'>
                        <div className="h-50 w-30 rounded-full justify-center   items-center">
                            <img src=" https://wp.sfdcdigital.com/en-in/wp-content/uploads/sites/21/2023/03/pb-hp-product-smb_icon-3.jpg?resize=768,433" alt="img" className='h-20 w-30' />

                            <h3 className='text-blue-500 text-center mt-4'> Sales Cloud</h3>

                            <p className='mt-2 text-center text-shadow-orange-400 '> Make customers happy faster <br /> and build loyalty with Service <br /> Cloud.</p>
                        </div>

                        <div className="mt-11 text-center">
                            <p className='underline font-medium text-left'> Learn more</p>
                        </div>

                    </div>
                    {/* 4 */}


                    <div className='rounded-2xl shadow-md p-6 w-44'>
                        <div className="h-50 w-30 rounded-full justify-center   items-center">
                            <img src="  https://wp.sfdcdigital.com/en-in/wp-content/uploads/sites/21/2023/03/pb-hp-product-smb_icon-4.jpg?resize=768,433" alt="img" className='h-20 w-30' />

                            <h3 className='text-blue-500 text-center mt-4'> Marketing Cloud
                            </h3>

                            <p className='mt-2 text-center text-shadow-orange-400 '>  Build customer relationships <br /> for life with data-first digital <br /> marketing.</p>
                        </div>

                        <div className="mt-11 text-center">
                            <p className='underline font-medium text-left'> Learn more</p>
                        </div>



                    </div>
                    

                </div>
                        

            </div>



            {/* TEXT */}

            <div className="font-semibold  text-5xl text-center mt-20 text-blue-700">
                We bring companies and customers <br /> together</div>

            <div><p className='font-light text-black  text-2xl text-center mt-20'>Salesforce is the world’s most trusted customer relationship management (CRM) <br /> platform. We help your marketing, sales, commerce, service and IT teams work as one <br /> from anywhere — so you can keep your customers happy everywhere.</p>
            </div>

            {/* BUTTON */}
            <div className='flex gap-5 justify-center mt-5'>
                <button className='text-2xl m-5 p-5 bg-sky-600   hover:bg-blue-800' >Start free trial</button>
                <br />
                <button className='text-2xl  border m-5 p-4  hover:bg-blue-800  text-white-800 '> Watch demo</button>
            </div>

            <div >
                <p className=" mt-4 text-4xl m-  text-blue-900  text-center">Learn valuable skills for free, with Trailhead.</p>

                <p className=' mt-4    text-center'>
                    Follow guided learning paths and get hands-on to learn Salesforce, digital, and soft <br /> skills from anywhere.
                </p>
            </div>


            <div></div>


        </>
    )
}

export default Hero3