
import React, { useState } from 'react'
import { useState } from 'react';

const Forms = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        comment: "",
        category: "",
        rating: 0,
    });

    const [submit, setSubmit] = useState(null);

    const renderStar = () => {
        let arr = [1, 2, 3, 4, 5];
        return arr.map((star) => (
            <span
                key={star}
                onClick={() => setForm({ ...form, rating: star })}
                className={`text-2xl cursor-pointer mr-1 ${star <= form.rating ? "text-yellow-500" : "text-gray-300"}`}>
                <i className="fa-solid fa-star"></i>
            </span>
        ));
    };

    const handlechange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handlesubmit = (e) => {
        e.preventDefault();
        setSubmit(form);
        console.log("Submitted Data:", form);
    };

    return (
        <div className='bg-sky-900'>
            <div className='max-w-md shadow-2xl p-6 mt-10 rounded-3xl border mx-auto bg-white'>
                <h1 className='text-center underline'>Feedback Form</h1>

                <form className='space-y-7' onSubmit={handlesubmit}>
                    <div>
                        <label className='block font-semibold'>Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder='Enter your name'
                            className='w-full p-1 border rounded-xl'
                            onChange={handlechange}
                        />
                    </div>
                    <div className="space-y-1">
                        <label className='block font-semibold'>Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder='Enter your email'
                            className='w-full border p-1 rounded-xl'
                            onChange={handlechange}
                        />
                    </div>
                    <div className="space-y-1">
                        <label className='block font-semibold'>Comment</label>
                        <textarea
                            name="comment"
                            rows={3}
                            className='w-full border rounded-2xl'
                            onChange={handlechange}
                        ></textarea>
                    </div>

                    <div className='space-y-1'>
                        <label>
                            <select
                                name="category"
                                className='w-full p-3 border rounded-2xl text-center'
                                onChange={handlechange}
                            >
                                <option value="">--Select Here--</option>
                                <option value="website">Website</option>
                                <option value="App">App</option>
                                <option value="Product">Product</option>
                                <option value="Service">Service</option>
                                <option value="Other">Other</option>
                            </select>
                        </label>
                    </div>

                    <div className="space-y-1">
                        <label className='font-semibold block'>Rating</label>
                        <div>{renderStar()}</div>
                    </div>

                    <button
                        type='submit'
                        className='block w-full bg-cyan-500 text-3xl text-white cursor-pointer'>
                        Submit
                    </button>
                </form>

                {submit && (
                    <div className='mt-4 p-4 bg-green-100 rounded-xl'>
                        <h2 className='font-bold'>Submitted Data:</h2>
                        <pre>{JSON.stringify(submit, null, 2)}</pre>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Forms;
