import React from 'react';
import { view } from '@risingstack/react-easy-state';
import './imageSection.css';
import Pagination from '../Pagination/Pagination';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Slide from 'react-reveal/Slide';
import { ImageSectionTypes } from './imageSection.types';

const ImageSection: React.FC<ImageSectionTypes> = ({
  images,
  pagination = false,
  paginationAlignment = 'end',
}) => {
  return (
    <div>
      <Slide delay={100} duration={2000} bottom>
        {!!images?.length && (
          <div className={'image-section-container'}>
            {images?.map((image) => (
              <div className={'image-section-inner-container'} key={image.uri}>
                <div>
                  <img
                    className={'image'}
                    src={image.uri}
                    alt={'Accepting cashew payment'}
                  />
                </div>
                {!!image.title && (
                  <div className={'row product-details'}>
                    <div>
                      <p>{image.title}</p>
                    </div>
                    <div className={'product-category'}>
                      <p>{image.category}</p>
                    </div>
                  </div>
                )}
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
