import React, { FC, ReactElement } from 'react';

import Form from '../form';
import Field from '../form-field';
import FieldPhone from '../form-field-phone';
import Area from '../form-area';
import { useForm } from '../../hooks/useForm';
import { appFormNames } from '../../utils/constants';
import styles from './index.module.scss';
import { useDispatch, useSelector } from '../../store/hooks';
import { saveCertificate } from '../../store/action/certificate';

const FormCertificate: FC = (): ReactElement => {
  const dispatch = useDispatch();
  const { current } = useSelector((state) => state.certificate);

  const { values, errors, onChange } = useForm({
    formName: appFormNames.formCertificate,
  });

  const handleSubmit = () => {
    if (current) {
      dispatch(
        saveCertificate({
          id: current.id,
          tablename: current.tablename,
          primarykey: current.primarykey,
          price: current.price,
          summa: current.summa,
          clientname: values.fio,
          phone: values.tel,
          email: values.email,
        })
      );
    }
  };

  return (
    <Form
      name={appFormNames.formCertificate}
      title={current?.name || ''}
      onSubmit={handleSubmit}
      id={appFormNames.formCertificate}
    >
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
