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
  readonly inputRef?: React.MutableRefObject<HTMLInputElement | null>;
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
  inputRef,
}): ReactElement => {
  return (
    <label className={`${styles.label} ${className || ''}`}>
      <p className={`${styles.par} ${required ? styles.par_required : ''}`}>
        {children}
      </p>
      <input
        className={styles.input}
        type={type}
        value={value}
        name={name}
        required={required}
        ref={inputRef}
        placeholder={placeholder}
        tabIndex={tabIndex}
      />
      <span className={styles.error}>{error}</span>
    </label>
  );
};

export default FormField;
