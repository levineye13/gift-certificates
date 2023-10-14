import React, { FC, ReactElement, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Background from '../background';
import SelectSertificate from '../../pages/select-certificate';
import Contacts from '../../pages/contacts';
import Payment from '../../pages/payment';
import styles from './index.module.scss';
import { useDispatch } from '../../store/hooks';
import { fetchCertificates } from '../../store/action';
import { Pages } from '../../utils/constants';

const App: FC = (): ReactElement => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCertificates());
  });

  return (
    <div className={styles.app}>
      <Background />
      <Routes>
        <Route
          path={Pages.root}
          element={
            <SelectSertificate className={styles['app_select-certificate']} />
          }
        />
        <Route
          path={Pages.contacts}
          element={<Contacts className={styles.app_contacts} />}
        />
        <Route path={Pages.payment} element={<Payment />} />
      </Routes>
    </div>
  );
};

export default App;
