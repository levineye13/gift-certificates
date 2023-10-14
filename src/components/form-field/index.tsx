import React, { FC, ReactElement } from 'react';

import styles from './index.module.scss';

interface IField {
  readonly children: string;
  readonly type: 'text' | 'tel' | 'email';
  readonly value: string | number;
  readonly error: string;
  readonly name: string;
  readonly onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  readonly className?: string;
  readonly placeholder?: string;
  readonly required?: boolean;
  readonly tabIndex?: number;
  readonly inputRef?: React.RefObject<HTMLInputElement>;
  readonly inputMode?: React.HTMLAttributes<HTMLInputElement>['inputMode'];
}

const FormField: FC<IField> = ({
  children,
  type,
  value,
  error,
  name,
  onChange,
  className,
  required,
  placeholder,
  tabIndex,
  inputRef,
  inputMode,
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
        onChange={onChange}
        ref={inputRef}
        placeholder={placeholder}
        tabIndex={tabIndex}
        inputMode={inputMode}
      />
      <span className={styles.error}>{error}</span>
    </label>
  );
};

export default FormField;
