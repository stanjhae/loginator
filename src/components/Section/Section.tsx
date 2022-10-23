import React from 'react';
import { view } from '@risingstack/react-easy-state';
import './section.css';
import { SectionTypes } from './section.types';

const Section: React.FC<SectionTypes> = ({ title, description, imageUri }) => {
  return (
    <div className={'section-container'}>
      <div
        className={
          'row justify-space-between align-items-center section-text-container'
        }
      >
        {!!title && <h2 className={'section-title'}>{title}</h2>}
        {!!description && (
          <div className={'section-description'}>{description}</div>
        )}
      </div>
      {!!imageUri && (
        <img
          className={'section-banner'}
          src={imageUri}
          alt={'Accepting cashew payment'}
        />
      )}
    </div>
  );
};

export default view(Section);
