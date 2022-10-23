import React from 'react';
import { view } from '@risingstack/react-easy-state';
import './section.css';
import { SectionTypes } from './section.types';
import Pagination from '../Pagination/Pagination';
import Reviews from '../Reviews/Reviews';

const Section: React.FC<SectionTypes> = ({
  title,
  description,
  imageUris,
  pagination = false,
  headerTitle,
  paginationAlignment = 'end',
  reviews,
}) => {
  return (
    <div className={'section-container'}>
      <div
        className={
          'row justify-space-between align-items-center section-text-container'
        }
      >
        {!!headerTitle && (
          <div className={'section-header-container'}>
            <h4>{headerTitle}</h4>
          </div>
        )}

        {!!title && <h2 className={'section-title'}>{title}</h2>}
        {!!description && (
          <div className={'section-description'}>{description}</div>
        )}
      </div>
      {!!imageUris?.length && (
        <div className={'section-banner-container'}>
          {imageUris?.map((uri) => (
            <div key={uri}>
              <div>
                <img
                  className={'section-banner'}
                  src={uri}
                  alt={'Accepting cashew payment'}
                />
              </div>
            </div>
          ))}
        </div>
      )}

      {!!reviews?.length && <Reviews reviews={reviews} />}

      {pagination && (
        <div className={'section-pagination'}>
          <Pagination alignment={paginationAlignment} />
        </div>
      )}
    </div>
  );
};

export default view(Section);
