import React, { FC, ReactElement } from 'react';

import styles from './index.module.scss';
import { Link, Navigate } from 'react-router-dom';
import { Pages } from '../../utils/constants';
import { useSelector } from '../../store/hooks';

const Payment: FC = (): ReactElement => {
  const { certNumber } = useSelector((state) => state.certificate);

  if (!certNumber) {
    return <Navigate to={Pages.root} replace />;
  }

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h2 className={styles.title}>Сертификат: {certNumber}</h2>
        <Link className={styles.link} to={Pages.root}>
          На главную
        </Link>
      </div>
    </section>
  );
};

export default Payment;
