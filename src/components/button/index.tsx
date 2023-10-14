import React, { FC, MouseEvent, ReactElement } from 'react';

import styles from './index.module.scss';

interface IButton {
  readonly type: 'submit' | 'button' | 'reset';
  readonly children: string;
  readonly name: string;
  readonly onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  readonly form?: string;
  readonly disabled?: boolean;
  readonly className?: string;
}

const Button: FC<IButton> = ({
  type,
  children,
  name,
  onClick,
  form,
  disabled,
  className = '',
}): ReactElement => {
  return (
    <button
      className={`${styles.button} ${className}`}
      type={type}
      name={name}
      form={form}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
