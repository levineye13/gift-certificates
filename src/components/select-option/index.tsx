import React, { ChangeEvent, FC, ReactElement } from 'react';

import styles from './index.module.scss';

interface ISelectOption {
  readonly children: string;
  readonly name: string;
  readonly onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  readonly checked: boolean;
}

const SelectOption: FC<ISelectOption> = ({
  children,
  name,
  checked,
  onChange,
}): ReactElement => {
  return (
    <li className={styles.item}>
      <label className={styles.label}>
        {children}
        <input
          type="radio"
          name={name}
          className={styles.radio}
          checked={checked}
          onChange={onChange}
        />
      </label>
    </li>
  );
};

export default SelectOption;
