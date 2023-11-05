import * as T from './types'
import { SVG } from '../components/SVG/Index'

export const productsData: T.ProductsData = {
  data: [
    {
      imageProduct: <SVG name="coffe-expresso" />,
      productName: 'Expresso Tradicional',
      productValue: 5.99,
      productDescription:
        'O tradicional café feito com água quente e grãos moídos2',
      coffeType: ['Tradicional'],
    },
    {
      imageProduct: <SVG name="coffe-americano" />,
      productName: 'Expresso Americano',
      productValue: 7.99,
      productDescription: 'Expresso diluído, menos intenso que o tradicional',
      coffeType: ['Tradicional'],
    },
    {
      imageProduct: <SVG name="coffe-cremoso" />,
      productName: 'Expresso Cremoso',
      productValue: 8.99,
      productDescription: 'Café expresso tradicional com espuma cremosa',
      coffeType: ['Tradicional'],
    },
    {
      imageProduct: <SVG name="coffe-gelado" />,
      productName: 'Expresso Gelado',
      productValue: 10.99,
      productDescription: 'Bebida preparada com café expresso e cubos de gelo',
      coffeType: ['Tradicional', 'Gelado'],
    },
    {
      imageProduct: <SVG name="coffe-com-leite" />,
      productName: 'Café com Leite',
      productValue: 11.99,
      productDescription:
        'Meio a meio de expresso tradicional com leite vaporizado',
      coffeType: ['Tradicional', 'Com Leite'],
    },
    {
      imageProduct: <SVG name="coffe-latte" />,
      productName: 'Latte',
      productValue: 12.99,
      productDescription:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      coffeType: ['Tradicional', 'Com Leite'],
    },
    {
      imageProduct: <SVG name="coffe-capuccino" />,
      productName: 'Capuccino',
      productValue: 14.99,
      productDescription:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
      coffeType: ['Tradicional', 'Com Leite'],
    },
    {
      imageProduct: <SVG name="coffe-macchiato" />,
      productName: 'Macchiato',
      productValue: 15.99,
      productDescription:
        'Café expresso misturado com um pouco de leite quente e espuma',
      coffeType: ['Tradicional', 'Com Leite'],
    },
    {
      imageProduct: <SVG name="coffe-mocaccino" />,
      productName: 'Mocaccino',
      productValue: 16.99,
      productDescription:
        'Café expresso com calda de chocolate, pouco leite e espuma',
      coffeType: ['Tradicional', 'Com Leite'],
    },
    {
      imageProduct: <SVG name="chocolate-quente" />,
      productName: 'Chocolate Quente',
      productValue: 12.99,
      productDescription:
        'Bebida feita com chocolate dissolvido no leite quente e café',
      coffeType: ['Especial', 'Com Leite'],
    },
    {
      imageProduct: <SVG name="coffe-cubano" />,
      productName: 'Cubano',
      productValue: 17.99,
      productDescription:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
      coffeType: ['Especial', 'Alcoólico', 'Gelado'],
    },
    {
      imageProduct: <SVG name="coffe-havaiano" />,
      productName: 'Havaiano',
      productValue: 18.99,
      productDescription: 'Bebida adocicada preparada com café e leite de coco',
      coffeType: ['Especial'],
    },
    {
      imageProduct: <SVG name="coffe-arabe" />,
      productName: 'Árabe',
      productValue: 18.99,
      productDescription:
        'Bebida preparada com grãos de café árabe e especiarias',
      coffeType: ['Especial'],
    },
    {
      imageProduct: <SVG name="coffe-irlandes" />,
      productName: 'Irlandês',
      productValue: 20.99,
      productDescription:
        'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      coffeType: ['Especial', 'Alcoólico'],
    },
  ],
}
