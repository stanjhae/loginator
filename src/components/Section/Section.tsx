import React from 'react';
import { view } from '@risingstack/react-easy-state';
import './section.css';
import { SectionTypes } from './section.types';
import Pagination from '../Pagination/Pagination';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Bounce from 'react-reveal/Bounce';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Zoom from 'react-reveal/Zoom';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Slide from 'react-reveal/Slide';

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
      <div className={'row justify-space-between section-text-container'}>
        {!!headerTitle && (
          <Zoom delay={100} duration={2000} bottom>
            <div className={'section-header-container'}>
              <h4>{headerTitle}</h4>
            </div>
          </Zoom>
        )}

        {!!title && (
          <Bounce delay={100} duration={2000} left>
            <h2>{title}</h2>
          </Bounce>
        )}
        {!!description && (
          <Bounce delay={100} duration={2000} right>
            <div className={'section-description'}>{description}</div>
          </Bounce>
        )}
      </div>
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

export default view(Section);
