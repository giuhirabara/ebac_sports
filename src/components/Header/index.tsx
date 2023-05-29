import * as S from './styles'

import cesta from '../../assets/cesta.png'
import { useSelector } from 'react-redux'

import { rootReducer } from '../../store/store'

const Header = () => {
  const itens = useSelector((state: rootReducer) => state.carrinho.itens)
  const favoritos = useSelector((state: rootReducer) => state.favoritos.itens)

  const valorTotal = itens.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

  function paraReal(valorTotal: number): import("react").ReactNode {
    throw new Error('Function not implemented.')
  }

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favoritos.length} favoritos</span>
        <img src={cesta} />
        <span>
          {itens.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header