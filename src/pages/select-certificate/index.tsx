import React, { FC, ReactElement } from 'react';

import SelectCertificateComponent from '../../components/select-certificate';
import Button from '../../components/button';
import styles from './index.module.scss';

interface ISelectCertificate {
  readonly className?: string;
}

const SelectCertificate: FC<ISelectCertificate> = ({
  className = '',
}): ReactElement => {
  return (
    <section className={`${styles.section} ${className}`}>
      <SelectCertificateComponent />
      <div className={styles.div}>
        <p className={styles.price}>
          Цена - <span className={styles.span}>50000 р.</span>
        </p>
        <Button type="button" name="price">
          Купить
        </Button>
      </div>
    </section>
  );
};

export default SelectCertificate;
