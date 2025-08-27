
import React, { useState } from 'react'
const Bankform = () => {
    const [form, setForm] = useState({
        name: "",
        Email: "",
        AccountNo: "",
        IFSC: "",
        BankName: "",
        AccountType: "",
        Branch: "",
    })

    const [submit, setSubmit] = useState(null);


    const Handlechange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }


    const Handlesubmit = (e) => {
        e.preventDefault();
        setSubmit(form);
        console.log("submit data", form)
    }

    return (
        <>
            <div className="bg-sky-950 w-full ">

                <div className="flex  justify-center bg-emerald-700">

                    <form className='bg-white border-gray-400  p-10 w-96' onSubmit={Handlesubmit}>

                        <h2 className='text-center underline'>Bank Account Detail Form</h2>

                        <br />
                        <div className="space-y-1">
                            <label className='block font-semibold'>Name</label>
                            <input onChange={Handlechange}
                                name='name' type="text"

                                className='w-full block border p-1 mt-1' />
                        </div>

                        <div className='space-y-1'>
                            <label className='w-full font-semibold'>
                                Email
                            </label>
                            <input type="text" onChange={Handlechange}
                                name='Email'
                                className='w-full block border mt-1 p-1' />

                        </div>

                        <div className="space-y-1">
                            <label className='block font-semibold'>Account Number</label>
                            <input onChange={Handlechange}
                                type="number"
                                name="Accountno"
                                placeholder='Enter your number'
                                className='w-full border mt-1 p-1 '
                            />
                        </div>

                        <div className="space-y-1">
                            <label className='block font-semibold'>IFSC</label>
                            <input onChange={Handlechange}
                                type="text"
                                name="IFSC"
                                placeholder='Enter your Code'
                                className='w-full border mt-1 p-1 '

                            />
                        </div>

                        <div className="space-y-1">
                            <label className='block font-semibold'>Bank Name</label>
                            <input onChange={Handlechange}
                                type="text"
                                name="BankName"
                                placeholder='Enter your Bank'
                                className='w-full border mt-1 p-1 '

                            />
                        </div>

                        <div className="space-y-1">
                            <label className='block font-semibold'>Account Type</label>
                            <input onChange={Handlechange}
                                type="text"
                                name="AccountType"
                                placeholder='Enter your type'
                                className='w-full border mt-1 p-1 '

                            />
                        </div>

                        <div className="space-y-1">
                            <label className='block font-semibold'>Branch Name</label>
                            <input onChange={Handlechange}
                                type="text"
                                name="Branch"
                                placeholder='Enter your Code'
                                className='w-full border mt-1 p-1 '

                            />
                        </div>
                        <br />
                        <button
                            type='submit'
                            className='block w-full space-y-2 bg-cyan-500 text-3xl text-white cursor-pointer'>
                            Submit
                        </button>

                    </form>
                    <br />

                    {submit && (
                        <div className='mt-4 p-4 bg-green-100 rounded-xl'>
                            <h2 className='font-bold'>Submitted Data:</h2>
                            <pre>{JSON.stringify(submit, null, 2)}</pre>
                        </div>
                    )}

                </div>

            </div>


        </>

    )
}

export default Bankform