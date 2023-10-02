import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk], // Aqui é onde você adiciona o middleware Redux Thunk
  // Outras configurações do store, se necessário
});

export default store;