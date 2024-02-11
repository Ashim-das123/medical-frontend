import React, { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'
import uloadImgToCloudinary from '../../utils/uploadCloudinary'
import { BASE_URL, token } from '../../config'
import { toast } from "react-toastify"
import ScaleLoader from "react-spinners/ScaleLoader"


const ProfileSettings = ({ user }) => {

    const navigate = useNavigate();

    const [selectedFile, setSelectedFile] = useState(null);

    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        photo: null,
        gender: '',
        bloodType: '',
    })

    useEffect(() => {
        setFormData({ name: user.name, email: user.email, photo: user.photo, gender: user.gender, bloodType: user.bloodType })
    }, [user])


    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleFileInputChange = async (e) => {
        const file = e.target.files[0]

        const data = await uloadImgToCloudinary(file)


        setSelectedFile(data.url)
        setFormData({ ...formData, photo: data.url })


    }
    const submitHandler = async (e) => {

        e.preventDefault();
        setLoading(true)

        try {

            const res = await fetch(`${BASE_URL}/user/${user._id}`, {
                method: "put",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(formData)
            })

            const { message } = await res.json();

            if (!res.ok) {
                throw new Error(message)
            }

            setLoading(false)
            toast.success(message)
            navigate('/users/profile/me')

        }
        catch (error) {
            toast.error(error.message)
            setLoading(false)
        }

    }


    return (
        <div className='mt-10 '>
            <form onSubmit={submitHandler}>


                <div className='mb-5'>
                    <input type="text" placeholder='Full Name' name='name' value={formData.name} onChange={handleInputChange}

                        className='w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor
text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer'
                        required
                    />
                </div>

                <div className='mb-5'>
                    <input type="email" placeholder='Enter your email' name='email' value={formData.email} onChange={handleInputChange}

                        className='w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor
                          text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer'
                        aria-readonly
                        readOnly
                    />
                </div>

                <div className='mb-5'>
                    <input type="password" placeholder='Password' name='password' value={formData.password} onChange={handleInputChange}

                        className='w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor
                          text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer'

                    />
                </div>
                <div className='mb-5'>
                    <input type="text" placeholder='Blood Type' name='bloodType' value={formData.bloodType} onChange={handleInputChange}

                        className='w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor
                          text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer'
                        required
                    />
                </div>

                <div className='mb-5 flex items-center justify-between'>


                    <label className='text-headingColor font-bold text-[16px] leading-7'>
                        Gender:<select name="gender" className='text-textColor font-semibold text-[15px] leading-7
                            px-4 py-3 focus:outline-none' value={formData.gender} onChange={handleInputChange}>

                            <option value="">Select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>

                        </select>
                    </label>
                </div>

                <div className='mb-5 flex items-center gap-3'>
                    {formData.photo && <figure className='w-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center'>
                        <img src={formData.photo} className='w-full rounded-full ' alt="" />
                    </figure>
                    }
                    <div className='relative w-[130px] h-[50px]'>
                        <input

                            type="file"
                            name='photo'
                            id='customFile'
                            onChange={handleFileInputChange}
                            accept='.jpg, .png'
                            className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'
                        />
                        <label htmlFor='customFile' className='absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem]
                  text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer '>
                            {
                                selectedFile ? selectedFile.name : "Upload Photo"
                            }</label>
                    </div>
                </div>

                <div className='mt-7'>
                    <button
                        disabled={loading && true}
                        className='bg-primaryColor text-[18px] leading-30 w-full rounded-lg px-4 py-3 text-white '
                        type='submit' >
                        {loading ? <ScaleLoader size={25} color='#ffffff' /> : 'Update'}
                    </button>
                </div>



            </form>
        </div>
    )
}

export default ProfileSettings