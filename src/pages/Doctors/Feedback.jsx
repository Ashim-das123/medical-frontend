import React, { useState } from 'react'
import avatar from '../../assets/images/avatar-icon.png'
import { formatDate } from '../../utils/formatDate'
import { AiFillStar } from "react-icons/ai";
import FeedbackForm from './FeedbackForm';
const Feedback = ({ reviews, totalRating }) => {

    const [showFeedbackForm, setFeedbackForm] = useState(false);

    return (
        <div>
            <div className='mb-[50px]'>
                <h4 className='text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]'>All reviews ({totalRating})</h4>
                {reviews?.map((review, index) =>
                (
                    <div key={index} className='flex justify-between gap-10 mb-[30px]'>
                        <div className='flex gap-3'>
                            <figure>
                                <img className='w-8 h-8' src={review?.user?.photo} alt="" />
                            </figure>
                            <div>
                                <h5 className='text-[16px] leading-6 text-primaryColor font-bold'>{review?.user?.name}</h5>
                                <p className='text-[14px] leading-6 text-textColor'>{formatDate(review?.createdAt)}</p>
                                <p className='text__para mt-3 font-medium text-[15px] '>{review?.reviewText}</p>
                            </div>
                        </div>

                        <div className='flex gap-1'>
                            {
                                [...Array(review?.rating).keys()].map((_, idx) => (
                                    <AiFillStar key={idx} color='#FEB60D' />
                                ))
                            }
                        </div>

                    </div>
                )
                )}
            </div>

            {!showFeedbackForm && <div className='text-end'>
                <button className='btn' onClick={() => setFeedbackForm(true)}>Give Feedback</button>
            </div>
            }
            {
                showFeedbackForm && <FeedbackForm />
            }

        </div>
    )
}

export default Feedback