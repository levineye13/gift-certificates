import React, { FC, ReactElement } from 'react';

import styles from './index.module.scss';

interface IForm {
  readonly children: ReactElement | ReactElement[];
  readonly name: string;
  readonly title: string;
}

const Form: FC<IForm> = ({ children, name, title }): ReactElement => {
  return (
    <form className={styles.form} name={name} noValidate>
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>{title}</legend>
        {children}
      </fieldset>
    </form>
  );
};

export default Form;
