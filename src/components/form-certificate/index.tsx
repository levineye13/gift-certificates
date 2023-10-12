import React, { FC, ReactElement } from 'react';

import Form from '../form';
import Field from '../form-field';
import FieldPhone from '../form-field-phone';
import Area from '../form-area';
import { useForm } from '../../hooks/useForm';
import { appFormNames } from '../../utils/constants';
import styles from './index.module.scss';

const FormCertificate: FC = (): ReactElement => {
  const { values, errors, onChange } = useForm({
    formName: appFormNames.formCertificate,
  });

  return (
    <Form name="formCertificate" title="Сертификат на 5000 руб">
      <Field
        type="text"
        name="fio"
        value={values.fio}
        error={errors.fio}
        required
        onChange={onChange}
        placeholder="Введите ФИО"
        className={styles.field}
        tabIndex={1}
      >
        ФИО
      </Field>
      <FieldPhone
        value={values.tel}
        error={errors.tel}
        onChange={onChange}
        className={styles.field}
        tabIndex={2}
      />
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
        value={values.email}
        error={errors.email}
        required
        onChange={onChange}
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
