import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { TAppActions } from './action';
import { rootReducer } from './reducers';

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = Dispatch<TAppActions>;

export type TAppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, RootState, unknown, TAppActions>
>;
