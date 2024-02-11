import React from 'react'

// import HashLoader from 'react-spinners/HashLoader'
import ScaleLoader from "react-spinners/ScaleLoader"

const Loading = () => {
    return (
        <div className='flex items-center justify-center w-full h-full'>
            <ScaleLoader color='#0067FF' />
        </div>
    )
}

export default Loading