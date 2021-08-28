import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import { items, filter } from 'redux/phonebook/phonebook-slices';

const phonebookPersistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

const contactsReducer = combineReducers({
  items,
  filter,
});

const store = configureStore({
  reducer: {
    contacts: persistReducer(phonebookPersistConfig, contactsReducer),
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
});

const persistor = persistStore(store);

export { store, persistor };
