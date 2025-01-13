import React, { useState } from 'react'
import { InputField } from '../components'

import { Link } from 'react-router-dom'


const ForgotPassword = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    })

    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = () => { }
    return (
        <section className='w-full h-full'>
            <div className='w-full  md:w-2/4 mx-auto my-8 p-6   rounded flex flex-col items-center justify-center gap-6 md:shadow-lg  md:border md:border-gray-600'>
                <h1 className='text-4xl font-bold'>Forgot Password</h1>
                <form className='w-full flex flex-col gap-4 md:gap-6' onSubmit={handleSubmit} >
                    <InputField
                        label="Email"
                        name="email"
                        placeholder={"example@gmail.com"}
                        onChange={handleChange}
                        type="email" />


                    <button className='w-full bg-primary text-white text-lg font-medium rounded p-2'>
                        {
                            loading ? "Saving.." : "Register"
                        }
                    </button>
                    <div className='w-full text-base'>
                        <p className='text-center'>Don't have an account? <Link to="/register" className='text-primary font-medium'>Register</Link></p>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default ForgotPassword