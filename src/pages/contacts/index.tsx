import React, { FC, ReactElement } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';

import FormCertificate from '../../components/form-certificate';
import Button from '../../components/button';
import styles from './index.module.scss';
import { Pages, appFormNames } from '../../utils/constants';
import { useSelector } from '../../store/hooks';

interface ISelectCertificate {
  readonly className?: string;
}

const Contacts: FC<ISelectCertificate> = ({ className = '' }): ReactElement => {
  const navigate = useNavigate();
  const { current } = useSelector((state) => state.certificate);

  const handleButtonClick = () => {
    navigate(-1);
  };

  if (!current) {
    return <Navigate to={Pages.root} replace />;
  }

  return (
    <section className={`${styles.section} ${className}`}>
      <FormCertificate />
      <div className={styles.div}>
        <Button type="button" name="back" onClick={handleButtonClick}>
          Назад
        </Button>
        <Button
          type="submit"
          name="payment"
          className={styles.section_button}
          form={appFormNames.formCertificate}
        >
          Оплатить
        </Button>
      </div>
    </section>
  );
};

export default Contacts;
