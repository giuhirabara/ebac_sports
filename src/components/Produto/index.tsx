import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { Produto, Produto as ProdutoType } from '../../App'

import { adcionarCarrinho } from '../../store/reducers/carrinhoSlice'
import { adicionarFavorito, removerFavorito } from '../../store/reducers/favoritoSlice'

type Props = {
  produto: ProdutoType
}

const ProdutoComponent = ({ produto }: Props) => {
  const dispatch = useDispatch();
  const favoritos = useSelector((state: { favoritos: Produto[] }) => state.favoritos);

  const estaNosFavoritos = favoritos.some((item) => item.id === produto.id);

  const adicionarOuRemoverDosFavoritos = () => {
    if (estaNosFavoritos) {
      dispatch(removerFavorito(produto.id));
    } else {
      dispatch(adicionarFavorito(produto));
    }
  };

  function paraReal(preco: number): import("react").ReactNode {
    throw new Error('Function not implemented.')
  }

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar onClick={adicionarOuRemoverDosFavoritos} type="button">
        {estaNosFavoritos
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar onClick={() => adcionarCarrinho(produto)} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  );
};

export default ProdutoComponent;