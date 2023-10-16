import React, { FC, ReactElement, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Form from '../form';
import Field from '../form-field';
import FieldPhone from '../form-field-phone';
import Area from '../form-area';
import { useForm } from '../../hooks/useForm';
import { Pages, appFormNames } from '../../utils/constants';
import styles from './index.module.scss';
import { useDispatch, useSelector } from '../../store/hooks';
import { saveCertificate } from '../../store/action/certificate';

const FormCertificate: FC = (): ReactElement => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { current, success } = useSelector((state) => state.certificate);

  const { values, errors, onChange, onSubmit } = useForm({
    formName: appFormNames.formCertificate,
    submitCallback() {
      if (current) {
        dispatch(
          saveCertificate({
            id: current.id,
            tablename: current.tablename,
            primarykey: current.primarykey,
            price: current.price,
            summa: current.summa,
            clientname: values.fio.value,
            phone: values.tel.value,
            email: values.email.value,
            msg: values.msg?.value || '',
          })
        );
      }
    },
  });

  useEffect(() => {
    if (success === true) {
      navigate(Pages.payment, { replace: true });
    }
  }, [navigate, success]);

  return (
    <Form
      name={appFormNames.formCertificate}
      title={current?.name || ''}
      onSubmit={onSubmit}
      id={appFormNames.formCertificate}
    >
      <Field
        type="text"
        name="fio"
        value={values.fio?.value || ''}
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
        value={values.tel?.value || ''}
        error={errors.tel}
        formName={appFormNames.formCertificate}
        className={styles.field}
        tabIndex={2}
      />
      <Area
        name="msg"
        value={values.msg?.value || ''}
        error={errors.msg}
        placeholder="Введите сообщение"
        onChange={onChange}
        className={styles.field}
        tabIndex={3}
      >
        Сообщение
      </Area>
      <Field
        type="email"
        name="email"
        value={values.email?.value || ''}
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
