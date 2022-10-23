import React, { FC } from 'react';
import { ButtonType } from './button.types';
import classNames from 'classnames';
import './button.css';

const Button: FC<ButtonType> = ({
  text,
  primary,
  onClick,
  noPadding = false,
}) => {
  const buttonClass = classNames({
    button: true,
    primary: primary,
    'no-padding': noPadding,
  });

  return (
    <p onClick={onClick} className={buttonClass}>
      {text}
    </p>
  );
};

export default Button;
