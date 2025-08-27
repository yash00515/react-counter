import React from 'react'

const Footer = () => {
  return (
    <>

      <div className='mt-20'>
        <div>
          <img src="https://a.sfdcstatic.com/shared/images/c360-nav/salesforce-with-type-logo.svg" alt="img" className='h-30 w-30' />
        </div>
        {/*         
        <div className="flex border gap-5">

          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-x-twitter"></i>
          <i className="fa-brands fa-square-linkedin"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-youtube"></i>

        </div> */}

        <div className=''>
          <p className='font-semibold  border-none '>Call us at 1800-420-7332</p>
        </div>



        <div className='flex justify-center gap-15 '>

          <div className='text-blue-700'>
            <p className='text-black'>New to Salesforce?</p>
            <br />

            <p>Why Salesforce</p>
            <p>what is CRM?</p>
            <p>Explore all Products</p>
            <p>SaaS</p>
            <p>Customer Success</p>
            <p>Product Pricing</p>

          </div>


          <div className='text-blue-700'>

            <p className='text-black'>About Salesforce</p>
            <br />

            <p>Our Story</p>
            <p>Careers</p>
            <p>Press</p>
            <p>Blog</p>
            <p>Security and Performance</p>
            <p>Salesforce.org</p>
            <p>Best CRM Software</p>
            <p>Sustainability</p>
            <p>Legal</p>
            <p>Give us your Feedback</p>
          </div>


          <div className='text-blue-700'>
            <p className='text-black'>Popular Links</p>
            <br />

            <p>New Release Features</p>
            <p>Salesforce Mobile App</p>
            <p>Business App Store</p>
            <p>Dreamforce</p>
            <p>CRM Software</p>
            <p>Salesforce Plus</p>
            <p>Salesforce for startups</p>
          </div>

        </div>


      </div>
      <div className='bg-blue-950 text-white'>
        <div className='mt-6 px-3 flex justify-center gap-10'>
          <h4>Worldwide </h4>

          <p>Legal</p>
          <p>Terms of Service</p>
          <p>Privacy</p>
          <p>Responsible Disclosure</p>
          <p>Trust</p>
          <p>Contact</p>
          <p>Cookie Preferences</p>
          <p>Your Privacy Choices</p>

        </div>
        <div>
          <p className='px-5 text-center'>© Copyright 2025 Salesforce, Inc. All rights reserved. Various trademarks held by their respective owners.</p>
        </div>
      </div>
    </>
  )
}

export default Footer