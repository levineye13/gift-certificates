import { TCertificateActions } from './certificate';
import { TFormActions } from './form';

export type TAppActions = TFormActions | TCertificateActions;

export { setField, clearForm, setError } from './form';
export {
  setCertificates,
  fetchCertificates,
  setSelectCertificate,
  saveCertificate,
  setCertificateNumber,
  setFailed,
  setRequest,
  setSucces,
} from './certificate';
