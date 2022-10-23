import React, { FC } from 'react';
import './reviews.css';
import classNames from 'classnames';
import { ReviewType } from './review.types';

const Reviews: FC<ReviewType> = ({ reviews }) => {
  const reviewClass = classNames({
    row: true,
    'review-container': true,
  });

  return (
    <div className={reviewClass}>
      {reviews?.map((review) => (
        <div key={review.avatar} className={'review-item'}>
          <div className={'row review-item-header'}>
            <div>
              <img src={review.avatar} alt={review.name} />
            </div>
            <div>
              <p>{review.name}</p>
              <p className={'review-role'}>{review.role}</p>
            </div>
          </div>
          <div className={'review-comment'}>{review.comment}</div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
