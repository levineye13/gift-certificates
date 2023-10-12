import React, { FC, ReactElement } from 'react';
import { useMask } from '@react-input/mask';

import Form from '../form';
import Field from '../form-field';
import Area from '../form-area';
import styles from './index.module.scss';

const FormCertificate: FC = (): ReactElement => {
  const inputRef = useMask({
    mask: '+7 (___) ___-__-__',
    replacement: { _: /\d/ },
    showMask: true,
  });

  return (
    <Form name="form" title="Сертификат на 5000 руб">
      <Field
        type="text"
        name="fio"
        value=""
        error=""
        required
        placeholder="Введите ФИО"
        className={styles.field}
        tabIndex={1}
      >
        ФИО
      </Field>
      <Field
        type="text"
        name="tel"
        value=""
        error=""
        required
        className={styles.field}
        tabIndex={2}
        inputRef={inputRef}
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
        required
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
