// store.js
import { legacy_createStore as createStore ,applyMiddleware} from 'redux';
import rootReducer from '../actions';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = createStore(persistedReducer);
  const persistor = persistStore(store);
  
  export { store, persistor };