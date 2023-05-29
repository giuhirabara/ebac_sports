import { configureStore } from '@reduxjs/toolkit';
import { carrinhoReducer } from './reducers/carrinhoSlice';
import { favoritosReducer } from './reducers/favoritoSlice';

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    favoritos: favoritosReducer,
  },
});


export type rootReducer = ReturnType<typeof store.getState>;
