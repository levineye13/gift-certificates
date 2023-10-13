import React, { ChangeEvent, FC, ReactElement } from 'react';

import Option from '../select-option';
import styles from './index.module.scss';
import { useDispatch, useSelector } from '../../store/hooks';
import { setSelectCertificate } from '../../store/action/certificate';
import { ICertificate } from '../../utils/interfaces';

const SelectCertificate: FC = (): ReactElement => {
  const dispatch = useDispatch();
  const { list, current } = useSelector((state) => state.certificate);

  const handleChange =
    (certificate: ICertificate) =>
    (e: ChangeEvent<HTMLInputElement>): void => {
      dispatch(setSelectCertificate(certificate));
    };

  return (
    <div className={styles.select}>
      <p className={`${styles.selected} ${current ? '' : styles.default}`}>
        {current?.name || 'Выберите товар'}
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
        {list.length > 0 &&
          list.map((cert) => (
            <Option
              name="radio"
              onChange={handleChange(cert)}
              checked={cert.id === current?.id}
              key={cert.id}
            >
              {cert.name}
            </Option>
          ))}
      </ul>
    </div>
  );
};

export default SelectCertificate;
