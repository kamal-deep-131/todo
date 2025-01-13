import React, { useState } from 'react'
import { InputField } from '../components'

import { Link } from 'react-router-dom'


const Register = () => {
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
                <h1 className='text-4xl font-bold'>Register</h1>
                <form className='w-full flex flex-col gap-4 md:gap-6' onSubmit={handleSubmit} >
                    <InputField
                        label="Name"
                        name="name"
                        placeholder={"Kamal Deep"}
                        onChange={handleChange}
                        type="text" />
                    <InputField
                        label="Email"
                        name="email"
                        placeholder={"example@gmail.com"}
                        onChange={handleChange}
                        type="email" />
                    <InputField
                        label="Password"
                        name="password"
                        placeholder={"**********"}
                        onChange={handleChange}
                        type="password" />
                    <div className='w-full text-base'>
                        <Link className='text-center text-error ' to="/forgot-password" >Forgot Password ?</Link>
                    </div>
                    <button className='w-full bg-primary text-white text-lg font-medium rounded p-2'>
                        {
                            loading ? "Saving.." : "Register"
                        }
                    </button>
                    <div className='w-full text-base'>
                        <p className='text-center'>Already have an account? <Link to="/login" className='text-primary font-medium'>Login</Link></p>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Register