 


import React from 'react'

const Cards2 = () => {
    return (
        <>
            <div className="flex justify-center h-96 ">
                <div className="mt-5 p-15 border-2 shadow-2xl rounded-2xl flex items-center  ">

                    {/* Left content */}
                    <div>
                        <p className="text-4xl mb-4">
                            Try Salesforce for free. <br />
                            No credit card required, <br />
                            no software to install.
                        </p>

                        <a href="https://www.salesforce.com/in/form/signup/freetrial-sales/?d=trysf-btn-ft">
                            <button className="text-2xl border m-2 p-2 text-white bg-blue-500 hover:bg-blue-950">
                                Start free trial
                            </button>
                        </a>

                        <a href="https://www.salesforce.com/in/editions-pricing/sales-cloud/?d=trysf-btn-pricing">
                            <button className="text-2xl border m-3 p-2 bg-white border-blue-500 hover:bg-sky-300">
                                See pricing
                            </button>
                        </a>
                    </div>

                    {/* Right image */}
                    <div>
                        <img
                            src="https://wp.sfdcdigital.com/en-in/wp-content/uploads/sites/21/2023/12/php-free-trial-mobile-inr2000-940w.png?resize=768,654"
                            alt="img"
                            className="h-60 w-60 "
                        />
                    </div>
                </div>


            </div>
            <div className='mt-10 text-center font-medium  text-4xl'>
                How can we help grow your business?
            </div>
            

            <div className='px-10 mt-20  flex flex-wrap justify-between gap-7'>
                <div className=''>

                    <img className='h-70 w-70' src="https://wp.sfdcdigital.com/en-in/wp-content/uploads/sites/21/2023/04/php-products-small-business-in.jpg?resize=1024,1024" alt="img" />

                    <span className='underline text-blue-700'>Sell faster</span>
                </div>

 <div>

                    <img className='h-70 w-70' src=" https://wp.sfdcdigital.com/en-in/wp-content/uploads/sites/21/2023/04/php-products-sales-in.jpg?resize=1024,1024" alt="img" />
                        <span className='underline text-blue-700'>Close more deals</span>
                </div>

                 <div>

                    <img className='h-70 w-70' src=" https://wp.sfdcdigital.com/en-in/wp-content/uploads/sites/21/2023/04/php-products-service-in.jpg?resize=1024,1024" alt="img" />
                        <span className='underline text-blue-700'>Scale Service</span>
                </div>



                 <div>

                    <img className='h-70 w-70' src="https://wp.sfdcdigital.com/en-in/wp-content/uploads/sites/21/2023/03/php-products-marketing.jpg?resize=1024,1024" alt="img" />
                        <span className='underline text-blue-700'> Build Customer relationships</span>
                </div>


            </div>
        </>

    )
}

export default Cards2
