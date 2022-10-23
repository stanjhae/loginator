import React, { FC } from 'react';
import './pagination.css';
import classNames from 'classnames';
import { PaginationType } from './pagination.types';

const Pagination: FC<PaginationType> = ({ alignment = 'end' }) => {
  const paginationClass = classNames({
    row: true,
    'pagination-container': true,
    'justify-end': alignment === 'end',
    'justify-center': alignment === 'center',
  });

  return (
    <div className={paginationClass}>
      <p className={'pagination-button'}>
        <img src={'/images/left-angle.png'} alt={'Left slider button'} />
      </p>
      <p className={'pagination-button'}>
        <img src={'/images/right-angle.png'} alt={'Left slider button'} />
      </p>
    </div>
  );
};

export default Pagination;
