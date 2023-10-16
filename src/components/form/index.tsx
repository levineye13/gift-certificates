import React, { FC, ReactElement } from 'react';

import styles from './index.module.scss';

interface IForm {
  readonly children: ReactElement | ReactElement[];
  readonly name: string;
  readonly title: string;
  readonly id: string;
  readonly onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Form: FC<IForm> = ({
  children,
  name,
  title,
  id,
  onSubmit,
}): ReactElement => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmit(e);
  };

  return (
    <form
      className={styles.form}
      name={name}
      id={id}
      noValidate
      onSubmit={handleSubmit}
    >
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>{title}</legend>
        {children}
      </fieldset>
    </form>
  );
};

export default Form;
