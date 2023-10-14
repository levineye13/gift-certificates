import React, { FC, ReactElement } from 'react';

import styles from './index.module.scss';

interface IArea {
  readonly children: string;
  readonly value: string | number;
  readonly error: string;
  readonly name: string;
  readonly onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  readonly className?: string;
  readonly required?: boolean;
  readonly placeholder?: string;
  readonly tabIndex?: number;
}

const FormArea: FC<IArea> = ({
  children,
  value,
  onChange,
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
        onChange={onChange}
        placeholder={placeholder}
        tabIndex={tabIndex}
      />
      <span className={styles.error}>{error}</span>
    </label>
  );
};

export default FormArea;
