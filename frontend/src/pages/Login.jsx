import React, { useState } from 'react'
import { InputField } from '../components'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
import { toast } from "react-hot-toast"

const Login = () => {
    const baseUrl = import.meta.env.VITE_API_BASE_URL;

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (formData.email == "") {
            toast.error("Please Enter email")
        }
        else if (formData.password == "") {
            toast.error("Please Enter password")
        }
        if (formData.email && formData.password) {
            try {
                setLoading(true)
                const response = await axios.post(`${baseUrl}/auth/login`, formData)
                localStorage.setItem("token", response.data.token)
                localStorage.setItem("user", JSON.stringify(response.data.user))
                setLoading(false)
                toast.success("Login Successfully")
                navigate("/")
                setFormData({ email: "", password: "" })
            }
            catch (error) {
                setLoading(true)
                toast.error(error?.response?.data?.message)
                setLoading(false)
            }
        }
    }

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

                    <div className='w-full text-base'>
                        <Link className='text-center text-error ' to="/forgot-password" >Forgot Password ?</Link>
                    </div>

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