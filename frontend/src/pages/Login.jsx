import React, { useState } from 'react'
import { InputField } from '../components'
import { Link } from 'react-router-dom'

const Login = () => {

    const [formData, setFormData] = useState({
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
            <div className='w-full  md:w-2/4 mx-auto my-8 p-6  rounded flex flex-col items-center justify-center gap-4 md:shadow-lg  md:border md:border-gray-600'>
                <h1 className='text-4xl font-bold'>Login</h1>
                <form className='w-full flex flex-col gap-4' onSubmit={handleSubmit}>
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

                    <button className='w-full bg-primary text-white font-medium text-lg rounded p-2'>{
                        loading ? "Saving.." : "Login"
                    }</button>
                    <div className='w-full text-base'>
                        <p className='text-center'>Don't have an account? <Link to="/register" className='text-primary font-medium'>Register</Link></p>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Login