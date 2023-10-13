import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { QuickInfoCard } from '../../components/QuickInfoCard/Index'
import ImageHero from '../../assets/hero-img.svg'
import * as S from './styles'
import { CatalogCard } from '../../components/CatalogCard/Index'

export const Home = () => {
  return (
    <>
      <S.HeroContainer>
        <S.WrapperContentLeft>
          <S.HeroTitle>
            Encontre o café perfeito para qualquer hora do dia
          </S.HeroTitle>
          <S.HeroSubtTitle>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </S.HeroSubtTitle>
          <S.CardsContainer>
            <QuickInfoCard
              backgroundIconColor="yellowDark"
              icon={<ShoppingCart size={16} weight="fill" />}
              text="Compra simples e segura"
            />
            <QuickInfoCard
              backgroundIconColor="gray"
              icon={<Package size={16} weight="fill" />}
              text="Embalagem mantém o café intacto"
            />
            <QuickInfoCard
              backgroundIconColor="yellowMid"
              icon={<Timer size={16} weight="fill" />}
              text="Entrega rápida e rastreada"
            />
            <QuickInfoCard
              backgroundIconColor="purple"
              icon={<Coffee size={16} weight="fill" />}
              text="O café vai fresquinho até você"
            />
          </S.CardsContainer>
        </S.WrapperContentLeft>
        <S.ContentRight>
          <img
            src={ImageHero}
            alt="Imagem de um copo de café com fundo amarelo e varios grãos de café no fundo"
          />
        </S.ContentRight>
      </S.HeroContainer>
      <main>
        <CatalogCard
          productImage="src\assets\expresso.svg"
          coffeType={['Tradicional', 'Gelado']}
          productName="Expresso Tradicional"
          description="O tradicional café feito com água quente e grãos moídos"
          productValue="9,90"
        />
      </main>
    </>
  )
}
