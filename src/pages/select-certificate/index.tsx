import React, { FC, ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';

import SelectCertificateComponent from '../../components/select-certificate';
import Button from '../../components/button';
import styles from './index.module.scss';
import { useSelector } from '../../store/hooks';
import { Pages } from '../../utils/constants';

interface ISelectCertificate {
  readonly className?: string;
}

const SelectCertificate: FC<ISelectCertificate> = ({
  className = '',
}): ReactElement | null => {
  const { current } = useSelector((state) => state.certificate);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(Pages.contacts);
  };

  return (
    <section className={`${styles.section} ${className}`}>
      <SelectCertificateComponent />
      {current && (
        <div className={styles.div}>
          <p className={styles.price}>
            Цена&nbsp;-&nbsp;
            <span className={styles.span}>{`${
              current.summa.split('.')[0]
            } р.`}</span>
          </p>
          <Button type="button" name="price" onClick={handleButtonClick}>
            Купить
          </Button>
        </div>
      )}
    </section>
  );
};

export default SelectCertificate;
