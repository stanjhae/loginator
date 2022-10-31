import React from 'react';
import { view } from '@risingstack/react-easy-state';
import './imageSection.css';
import Pagination from '../Pagination/Pagination';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Slide from 'react-reveal/Slide';
import { ImageSectionTypes } from './imageSection.types';

const ImageSection: React.FC<ImageSectionTypes> = ({
  imageUris,
  pagination = false,
  paginationAlignment = 'end',
}) => {
  return (
    <div>
      <Slide delay={100} duration={2000} bottom>
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
      </Slide>

      {pagination && (
        <div className={'section-pagination'}>
          <Pagination alignment={paginationAlignment} />
        </div>
      )}
    </div>
  );
};

export default view(ImageSection);
