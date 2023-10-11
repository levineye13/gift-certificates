import React, { FC, ReactElement } from 'react';

import styles from './index.module.scss';

interface IField {
  readonly children: string;
  readonly type: 'text' | 'tel' | 'email';
  readonly value: string;
  readonly error: string;
  readonly name: string;
  readonly className?: string;
  readonly placeholder?: string;
  readonly required?: boolean;
  readonly tabIndex?: number;
}

const FormField: FC<IField> = ({
  children,
  type,
  value,
  error,
  name,
  className,
  required,
  placeholder,
  tabIndex,
}): ReactElement => {
  return (
    <label className={`${styles.label} ${className || ''}`}>
      <p className={styles.par}>{children}</p>
      <input
        className={styles.input}
        type={type}
        value={value}
        name={name}
        required={required}
        placeholder={placeholder}
        tabIndex={tabIndex}
      />
			<span className={styles.error}>{error}</span>
    </label>
  );
};

export default FormField;
