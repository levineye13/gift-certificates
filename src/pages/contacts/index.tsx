import React, { FC, ReactElement } from 'react';

import FormCertificate from '../../components/form-certificate';
import Button from '../../components/button';
import styles from './index.module.scss';
import { appFormNames } from '../../utils/constants';

interface ISelectCertificate {
  readonly className?: string;
}

const Contacts: FC<ISelectCertificate> = ({ className = '' }): ReactElement => {
  return (
    <section className={`${styles.section} ${className}`}>
      <FormCertificate />
      <div className={styles.div}>
        <Button type="button" name="back">
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
