import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook,
} from 'react-redux';

import { AppDispatch, RootState, TAppThunk } from './types';

export const useDispatch = () => dispatchHook<AppDispatch | TAppThunk>();
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;
