import React, { FC, ReactElement } from 'react';

import styles from './index.module.scss';

const Background: FC = (): ReactElement => {
  return <div className={styles.background} />;
};

export default Background;
