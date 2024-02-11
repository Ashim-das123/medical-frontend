import React from 'react'
import DoctorCard from './DoctorCard'
import { BASE_URL } from './../../config'
import useFetchData from './../../hooks/useFetchData'
import Loader from '../../components/Loader/Loading'
import Error from '../../Error/Error'
const DoctorsList = () => {


    const { data: doctors, loading, error } = useFetchData(`${BASE_URL}/doctor`)


    return (
        <>
            {
                loading && <Loader />
            }
            {
                error && <Error />
            }

            {!loading && !error &&
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px] '>  {/*mx-[150px] */}
                    {
                        doctors.map((doctor) => {
                            return <DoctorCard doctor={doctor} key={doctor._id} />
                        })
                    }
                </div>
            }

        </>
    )
}

export default DoctorsList


