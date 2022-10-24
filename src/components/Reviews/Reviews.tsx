import React, { FC } from 'react';
import './reviews.css';
import { ReviewType } from './review.types';
import Pagination from '../Pagination/Pagination';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Slide from 'react-reveal/Slide';

const Reviews: FC<ReviewType> = ({ reviews }) => {
  return (
    <>
      <Slide right cascade>
        <div className={'row review-container'}>
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
      </Slide>
      <Pagination alignment={'center'} />
    </>
  );
};

export default Reviews;
