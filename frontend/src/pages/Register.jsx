import React, { useState, useContext } from 'react'
import { InputField } from '../components'
import { toast } from "react-hot-toast"
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
import { AuthContext } from '../context/AuthContext'


const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    })

    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const baseUrl = import.meta.env.VITE_API_BASE_URL;
    const { setIsLoggedIn } = useContext(AuthContext)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (formData.name == "") {
            toast.error("Please Enter Name")
        } else if (formData.email == "") {
            toast.error("Please Enter email")
        }
        else if (formData.password == "") {
            toast.error("Please Enter password")
        }
        if (formData.name && formData.email && formData.password) {
            try {
                setLoading(true)
                const response = await axios.post(`${baseUrl}/auth/register`, formData)
                localStorage.setItem("token", response?.data?.token)
                localStorage.setItem("user", JSON.stringify(response?.data?.user))
                toast.success("Register Successful")
                setIsLoggedIn(true)
                navigate("/")
                setFormData({ name: "", email: "", password: "" })
                setLoading(false)

            } catch (error) {
                setLoading(true)
                toast.error(error?.response?.data?.message)
                console.log(error)
                setLoading(false)
            }
        }
    }

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