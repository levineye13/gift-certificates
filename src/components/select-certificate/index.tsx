import React, { ChangeEvent, FC, ReactElement, useState } from 'react';

import Option from '../select-option';
import styles from './index.module.scss';

const cert = [50000, 40000, 30000, 20000, 10000];
const defaultData = { index: -1, content: '', default: 'Выберите товар' };

const SelectCertificate: FC = (): ReactElement => {
  const [select, setSelect] = useState(defaultData);

  const handleChange =
    (index: number) =>
    (e: ChangeEvent<HTMLInputElement>): void => {
      setSelect({
        default: defaultData.default,
        index,
        content: `Сертификат на ${cert[index]} руб`,
      });
    };

  const handleClear = (): void => {
    setSelect(defaultData);
  };

  return (
    <div className={styles.select}>
      <p
        className={`${styles.selected} ${
          select.index === -1 ? styles.default : ''
        }`}
      >
        {select.content || select.default}
      </p>
      <div className={styles.arrow}>
        <svg
          height="20"
          width="20"
          viewBox="0 0 20 20"
          aria-hidden="true"
          focusable="false"
          className={styles.img}
        >
          <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
        </svg>
      </div>
      <ul className={styles.list}>
        {cert.map((cert, index) => (
          <Option
            name="radio"
            onChange={handleChange(index)}
            checked={index === select.index}
            key={index}
          >
            {`Сертификат на ${cert} руб`}
          </Option>
        ))}
      </ul>
    </div>
  );
};

export default SelectCertificate;
