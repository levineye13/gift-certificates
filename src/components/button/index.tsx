import React, { FC, MouseEvent, ReactElement } from 'react';

import styles from './index.module.scss';

interface IButton {
  readonly type: 'submit' | 'button' | 'reset';
  readonly children: string;
  readonly name: string;
  readonly form?: string;
  readonly disabled?: boolean;
  readonly className?: string;
}

const Button: FC<IButton> = ({
  type,
  children,
  name,
  form,
  disabled,
  className = '',
}): ReactElement => {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {};

  return (
    <button
      className={`${styles.button} ${className}`}
      type={type}
      name={name}
      form={form}
      disabled={disabled}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
