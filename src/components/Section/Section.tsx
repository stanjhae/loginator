import React from 'react';
import { view } from '@risingstack/react-easy-state';
import './section.css';
import { SectionTypes } from './section.types';
import Pagination from '../Pagination/Pagination';

const Section: React.FC<SectionTypes> = ({
  title,
  description,
  imageUris,
  pagination = false,
  headerTitle,
  paginationAlignment = 'end',
}) => {
  return (
    <div className={'section-container'}>
      <div
        className={
          'row justify-space-between section-text-container'
        }
      >
        {!!headerTitle && (
          <div className={'section-header-container'}>
            <h4>{headerTitle}</h4>
          </div>
        )}

        {!!title && (
          <div>
            <h2>{title}</h2>
          </div>
        )}
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


      {pagination && (
        <div className={'section-pagination'}>
          <Pagination alignment={paginationAlignment} />
        </div>
      )}
    </div>
  );
};

export default view(Section);
