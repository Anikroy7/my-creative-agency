import React, { useEffect, useState } from 'react';
import ReviewDetails from './ReviewDetails';

const CeoReviews = () => {

    const [reviews, serReviews] = useState([]);

    useEffect(() => {
        fetch('CeoReview.json')
            .then(res => res.json())
            .then(data => serReviews(data))
    }, [])
    return (
        <section className='mt-48'>
            <div className='flex px-16 gap-4'>
                {
                    reviews.map(review => <ReviewDetails
                        review={review}
                    ></ReviewDetails>)
                }
            </div>
        </section >
    );
};

export default CeoReviews;