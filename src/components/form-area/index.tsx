import React, { FC, ReactElement } from 'react';

import styles from './index.module.scss';

interface IArea {
  readonly children: string;
  readonly value: string;
  readonly error: string;
  readonly name: string;
  readonly className?: string;
  readonly required?: boolean;
  readonly placeholder?: string;
  readonly tabIndex?: number;
}

const FormArea: FC<IArea> = ({
  children,
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
      <textarea
        rows={3}
        className={styles.area}
        name={name}
        required={required}
        value={value}
        placeholder={placeholder}
        tabIndex={tabIndex}
      />
      <span className={styles.error}>{error}</span>
    </label>
  );
};

export default FormArea;
