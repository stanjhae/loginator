import React from 'react';
import { view } from '@risingstack/react-easy-state';
import './section.css';
import { SectionTypes } from './section.types';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Bounce from 'react-reveal/Bounce';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Zoom from 'react-reveal/Zoom';

const Section: React.FC<SectionTypes> = ({
  title,
  description,
  headerTitle,
}) => {
  return (
    <div className={'section-container'}>
      <div className={'row justify-space-between section-text-container'}>
        {!!headerTitle && (
          <Zoom delay={100} duration={2000} bottom>
            <div className={'section-header-container'}>
              <h3>{headerTitle}</h3>
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
    </div>
  );
};

export default view(Section);
