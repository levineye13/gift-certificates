import React, { FC, ReactElement } from 'react';

import Form from '../form';
import Field from '../form-field';
import Area from '../form-area';
import styles from './index.module.scss';

const FormCertificate: FC = (): ReactElement => {
  return (
    <Form name="form" title="Сертификат на 5000 руб">
      <Field
        type="text"
        name="fio"
        value=""
        error=""
        placeholder="Введите ФИО"
        className={styles.field}
        tabIndex={1}
      >
        ФИО
      </Field>
      <Field
        type="tel"
        name="tel"
        value=""
        error=""
        className={styles.field}
        tabIndex={2}
      >
        Телефон
      </Field>
      <Area
        name="message"
        value=""
        error=""
        placeholder="Введите сообщение"
        className={styles.field}
        tabIndex={3}
      >
        Сообщение
      </Area>
      <Field
        type="email"
        name="email"
        value=""
        error=""
        placeholder="Введите почту"
        className={styles.field}
        tabIndex={4}
      >
        Почта
      </Field>
      <a
        className={styles.link}
        href="https://sycret.ru/"
        target="_blank"
        rel="noreferrer noopener"
      >
        Правила
      </a>
    </Form>
  );
};

export default FormCertificate;
