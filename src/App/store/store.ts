import { combineReducers, configureStore } from '@reduxjs/toolkit';

import dataReducer from './reducers/DataSlice';

const rootReducers = combineReducers({
	dataReducer,
});

export const setupStore = () =>
	configureStore({
		reducer: rootReducers,
	});

export type RootState = ReturnType<typeof rootReducers>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
