import React from 'react';

const Cards = () => {
    return (
        <>
            <div className="flex justify-center gap-4 p-4">

                {/* Card 1 */}
                <div className="flex flex-col items-center justify-center p-4 text-center border rounded-lg w-80">
                    <img
                        src="https://res.cloudinary.com/hy4kyit2a/f_auto,fl_lossy,q_70/learn/modules/salesforce-quick-look-1/259d8619519bb3912ef0100cee5071cc_badge.png"
                        alt="img"
                        className="w-30 h-30  mb-4"
                    />
                    <span className="border px-3 rounded-full mb-2">Module</span>
                    <p className="text-blue-900 mt-2 text-2xl">
                        Salesforce Values: Quick <br /> Look
                    </p>
                    <p>
                        Learn how Salesforce helps your business
                        build stronger relationships
                        with your customers.
                    </p>
                    <div className="mt-4 text-center">
                        <p className="underline font-medium">Start Learning</p>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="flex flex-col items-center justify-center p-4 text-center border rounded-lg w-80">
                    <img
                        src="https://res.cloudinary.com/hy4kyit2a/f_auto,fl_lossy,q_70/learn/modules/lex_implementation_basics/56b5a2cb9fb731dbfe6b5b88cd855775_badge.png"
                        alt="img"
                        className="w-30 h-30 mb-4"
                    />
                    <span className="border px-3 rounded-full mb-2">Module</span>
                    <p className="text-blue-900 mt-2 text-2xl">
                        Salesforce CRM <br /> Look
                    </p>
                    <p>
                        Learn how to use customer relationship <br /> management (CRM) software to grow your <br /> business.
                    </p>
                    <div className="mt-4 text-center">
                        <p className="underline font-medium">Start Learning</p>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="flex flex-col items-center justify-center p-4 text-center border rounded-lg w-80">
                    <img
                        src="https://res.cloudinary.com/hy4kyit2a/f_auto,fl_lossy,q_70/learn/modules/sales-cloud-platform-quick-look/b91b2499486a772a4eee8ce55aa32b57_badge.png"
                        alt="img"
                        className="w-30 h-30   mb-4"
                    />
                    <span className="border px-3 rounded-full mb-2">Module</span>
                    <p className="text-blue-900 mt-2 text-2xl">
                        Salesforce Cloud Basics <br /> Look
                    </p>
                    <p>
                        Grow your business, boost productivity, <br /> and make smart decisions with Sales <br /> Cloud.
                    </p>
                    <div className="mt-4 text-center">
                        <p className="underline font-medium">Start Learning</p>
                    </div>
                </div>
            </div>
            <div className='text-center '>
                <button className='border m-10 p-2 w-40  text-blue-900 hover:bg-sky-200 '><a href="https://trailhead.salesforce.com/">Learn for free</a></button>
            </div>
            <div className=' mt-7 text-center'>
                <p className='text-4xl font-semibold'>
                    Over 150,000 companies, both big and <br /> small, are growing their business with <br /> Salesforce.
                </p>

            </div>

            <div className='text-center '>
                <button className='border m-10 p-2 w-40  text-blue-900 hover:bg-sky-200 '><a href="https://www.salesforce.com/in/customer-success-stories/?d=cb1-txt-stories">View all customers</a></button>
            </div>

        </>
    );
};

export default Cards;
