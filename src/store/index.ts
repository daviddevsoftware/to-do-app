// Redux
import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';

// Middleware libraries
import logger from 'redux-logger';
import thunk from 'redux-thunk';

// Slice's
import TasksSlice from './tasks';

// Store
const store = configureStore({
    reducer: {
        TaskData: TasksSlice,
    },
    middleware: [thunk, logger],
});

// Exports
export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const persistor = persistStore(store);
