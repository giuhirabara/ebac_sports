import * as App from '../App'
import Produto from '../components/Produto'

import * as S from './styles'

type Props = {
  produtos: App.Produto[]
  favoritos: App.Produto[]
}

const ProdutosComponent = ({
  produtos,
  favoritos
}: Props) => {
  const produtoEstaNosFavoritos = (produto: App.Produto) => {
    const produtoId = produto.id
    const IdsDosFavoritos = favoritos.map((f) => f.id)

    return IdsDosFavoritos.includes(produtoId)
  }

  return (
    <>
      <S.Produtos>
        {produtos.map((produto) => (
          <Produto
            key={produto.id}
            produto={produto}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent