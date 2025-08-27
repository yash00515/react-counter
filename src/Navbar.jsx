import React from 'react';

const Navbar = () => {
    return (
        <>
            <nav className="p-7 border-white bg-white flex items-center gap-6">
                {/* Logo */}
                <div className="h-10 w-20">
                    <img
                        src="https://a.sfdcstatic.com/shared/images/c360-nav/salesforce-with-type-logo.svg"
                        alt="Logo"
                    />
                </div>

                {/* Menu */}
                <div className="   flex gap-9 justify-between font-medium flex-1">
                    <p>Products</p>
                    <p>Industries</p>
                    <p>Customers</p>
                    <p>Learning</p>
                    <p>Support</p>
                    <p>Company</p>
                    <p>Salesforce+</p>
                </div>

                {/* Contact & Icons */}
                <div className="font-medium flex items-center gap-5">
                    <p>
                        Contact <br /> 1800-420-7332
                    </p>
                    <i className="fa-solid fa-home text-xl"></i>
                    <i className="fa-solid fa-globe text-xl"></i>
                    <i className="fa-solid fa-user text-xl"></i>
                    <span>Login</span>
                    <button className="bg-green-700 text-white hover:text-green-950 px-4 py-2 rounded">
                        Try for free
                    </button>
                </div>
            </nav>
            <div className="bg-blue-800 text-2xl text-white text-center font-medium items-center">Learn why Gartner recognized Salesforce as the World's #1 Leader in Customer Data Platforms (CDP)    <a className='underline' href="https://www.salesforce.com/in/form/data/data-cloud-gartner-magic-quadrant/?d=pb">  Get the report</a>  </div>
        </>
    );
};

export default Navbar;
