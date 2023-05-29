import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Produto } from '../../App';

type CarrinhoState = {
  itens: Produto[];
  favoritos: Produto[];
};

const initialState: CarrinhoState = {
  itens: [],
  favoritos: [],
};

const favoritoSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    adicionarFavorito: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload;

      if (state.favoritos.find((item) => item.id === produto.id)) {
        alert('Item já adicionado aos favoritos');
      } else {
        state.favoritos.push(produto);
      }
    },

    removerFavorito: (state, action: PayloadAction<number>) => {
      const produtoId = action.payload;
      state.favoritos = state.favoritos.filter((produto) => produto.id !== produtoId);
    },
  },
});

export const { adicionarFavorito, removerFavorito } = favoritoSlice.actions;
export const favoritosReducer = favoritoSlice.reducer;
