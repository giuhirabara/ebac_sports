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

const carrinhoSlice = createSlice({
    name: 'carrinho',
    initialState,
    reducers: {
      adcionarCarrinho: (state, action: PayloadAction<Produto>) => {
        const unidProd = action.payload;
  
        if (state.itens.find((produto) => produto.id === unidProd.id)) {
          alert('Item já adicionado');
        } else {
          state.itens.push(unidProd);
        }
      },
    },
  });

  export const { adcionarCarrinho } = carrinhoSlice.actions;
  export const carrinhoReducer = carrinhoSlice.reducer;