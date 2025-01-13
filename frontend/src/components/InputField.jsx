import React from 'react'

const InputField = ({ label, placeholder, name, onChange, value, type }) => {
    return (
        <div className='w-full flex flex-col justify-start items-start gap-2'>
            <label className='text-lg'>{label}:</label>
            <input
                className='w-full border border-gray-600
                 rounded p-2 outline-black placeholder:text-gray-600 placeholder:text-lg'
                type={type}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
            />
        </div>
    )
}

export default InputField