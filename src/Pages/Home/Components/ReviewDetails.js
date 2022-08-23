import React from 'react';

const ReviewDetails = ({ review }) => {
    const { name, description, img } = review;
    console.log(review);
    return (
        <div style={{ border: "1px solid #BFBFBF" }} class="card w-full bg-base-100 ">
            <div class="px-4 py-2">
                <div class="avatar flex justify-around">
                    <div class="w-24 rounded-full">
                        <img src={img} />
                    </div>
                    <h2 class="card-title">{name}</h2>
                </div>
                <p>{description}</p>

            </div>
        </div>
    );
};

export default ReviewDetails;