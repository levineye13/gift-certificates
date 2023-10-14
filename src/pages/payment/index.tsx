import React, { FC, ReactElement } from 'react';

import styles from './index.module.scss';
import { Link, Navigate } from 'react-router-dom';
import { Pages } from '../../utils/constants';
import { useDispatch, useSelector } from '../../store/hooks';
import {
  clearCertificateNumber,
  clearSelectCertificate,
} from '../../store/action/certificate';

const Payment: FC = (): ReactElement => {
  const dispatch = useDispatch();
  const { certNumber } = useSelector((state) => state.certificate);

  if (!certNumber) {
    return <Navigate to={Pages.root} replace />;
  }

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    dispatch(clearSelectCertificate());
    dispatch(clearCertificateNumber());
  };

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h2 className={styles.title}>Сертификат: {certNumber}</h2>
        <Link className={styles.link} to={Pages.root} onClick={handleClick}>
          На главную
        </Link>
      </div>
    </section>
  );
};

export default Payment;
