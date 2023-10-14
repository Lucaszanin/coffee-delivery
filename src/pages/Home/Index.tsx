import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { QuickInfoCard } from '../../components/QuickInfoCard/Index'
import ImageHero from 'src/assets/hero-img.svg'
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
      <S.MainTitle>Nossos cafés</S.MainTitle>
      <S.MainContainer>
        <CatalogCard
          productImageUrl="src\assets\expresso.svg"
          coffeType={['Tradicional']}
          productName="Expresso Tradicional"
          description="O tradicional café feito com água quente e grãos moídos"
          productValue={10}
        />
        <CatalogCard
          productImageUrl="src\assets\americano.png"
          coffeType={['Tradicional']}
          productName="Expresso Americano"
          description="Expresso diluído, menos intenso que o tradicional"
          productValue={10.91}
        />
        <CatalogCard
          productImageUrl="src\assets\cremoso.png"
          coffeType={['Tradicional']}
          productName="Expresso Cremoso"
          description="Café expresso tradicional com espuma cremosa"
          productValue={11.91}
        />
        <CatalogCard
          productImageUrl="src\assets\express-gelado.png"
          coffeType={['Tradicional', 'Gelado']}
          productName="Expresso Gelado"
          description="Bebida preparada com café expresso e cubos de gelo"
          productValue={9.91}
        />
        <CatalogCard
          productImageUrl="src\assets\latte.png"
          coffeType={['Tradicional', 'com leite']}
          productName="Latte"
          description="Uma dose de café expresso com o dobro de leite e espuma cremosa"
          productValue={9.91}
        />
        <CatalogCard
          productImageUrl="src\assets\expresso.svg"
          coffeType={['Tradicional', 'Gelado']}
          productName="Expresso Tradicional"
          description="O tradicional café feito com água quente e grãos moídos"
          productValue={9.91}
        />
        <CatalogCard
          productImageUrl="src\assets\expresso.svg"
          coffeType={['Tradicional', 'Gelado']}
          productName="Expresso Tradicional"
          description="O tradicional café feito com água quente e grãos moídos"
          productValue={9.91}
        />
        <CatalogCard
          productImageUrl="src\assets\expresso.svg"
          coffeType={['Tradicional', 'Gelado']}
          productName="Expresso Tradicional"
          description="O tradicional café feito com água quente e grãos moídos"
          productValue={9.91}
        />{' '}
        <CatalogCard
          productImageUrl="src\assets\expresso.svg"
          coffeType={['Tradicional', 'Gelado']}
          productName="Expresso Tradicional"
          description="O tradicional café feito com água quente e grãos moídos"
          productValue={9.91}
        />
        <CatalogCard
          productImageUrl="src\assets\expresso.svg"
          coffeType={['Tradicional', 'Gelado']}
          productName="Expresso Tradicional"
          description="O tradicional café feito com água quente e grãos moídos"
          productValue={9.91}
        />
        <CatalogCard
          productImageUrl="src\assets\expresso.svg"
          coffeType={['Tradicional', 'Gelado']}
          productName="Expresso Tradicional"
          description="O tradicional café feito com água quente e grãos moídos"
          productValue={9.91}
        />
        <CatalogCard
          productImageUrl="src\assets\expresso.svg"
          coffeType={['Tradicional', 'Gelado']}
          productName="Expresso Tradicional"
          description="O tradicional café feito com água quente e grãos moídos"
          productValue={9.91}
        />{' '}
        <CatalogCard
          productImageUrl="src\assets\expresso.svg"
          coffeType={['Tradicional', 'Gelado']}
          productName="Expresso Tradicional"
          description="O tradicional café feito com água quente e grãos moídos"
          productValue={9.91}
        />
        <CatalogCard
          productImageUrl="src\assets\expresso.svg"
          coffeType={['Tradicional', 'Gelado']}
          productName="Expresso Tradicional"
          description="O tradicional café feito com água quente e grãos moídos"
          productValue={9.91}
        />
      </S.MainContainer>
    </>
  )
}
