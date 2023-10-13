import React, { FC, ReactElement } from 'react';

import SelectCertificateComponent from '../../components/select-certificate';
import Button from '../../components/button';
import styles from './index.module.scss';
import { useSelector } from '../../store/hooks';

interface ISelectCertificate {
  readonly className?: string;
}

const SelectCertificate: FC<ISelectCertificate> = ({
  className = '',
}): ReactElement | null => {
  const { current } = useSelector((state) => state.certificate);

  return (
    <section className={`${styles.section} ${className}`}>
      <SelectCertificateComponent />
      {current && (
        <div className={styles.div}>
          <p className={styles.price}>
            Цена&nbsp;-&nbsp;
            <span className={styles.span}>{current.summa.split('.')[0]}</span>
          </p>
          <Button type="button" name="price">
            Купить
          </Button>
        </div>
      )}
    </section>
  );
};

export default SelectCertificate;
