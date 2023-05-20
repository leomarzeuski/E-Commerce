import CartButton from '../CartButton'
import AlertDialog from '../Dialog'
import { RegularText, TitleText } from '../Typography'
import {
  CardFooter,
  CoffeeCardContainer,
  Description,
  Name,
  Tags
} from './styles'

export interface Coffee {
  id: number
  tags: string[]
  name: string
  description: string
  photo: string
  price: number,
  modal: {
    id: number
  tags: string[]
  name: string
  description: string
  photo: string
  price: number,
  }
}

interface CoffeeProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeProps) {



  const formattedPrice = coffee.price.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
  })

  return (
    <>
      <CoffeeCardContainer>
        <img src={`/coffees/${coffee.photo}`} alt="" />

        <Tags>
          {coffee.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </Tags>

        <Name>{coffee.name}</Name>
        <Description>{coffee.description}</Description>

        <CardFooter>
          <div>
            <RegularText size="s">R$</RegularText>
            <TitleText size="m" color="text" as="strong">
              {formattedPrice}
            </TitleText>
          </div>

          <CartButton coffee={coffee}/>
        </CardFooter>
      <AlertDialog coffee={coffee.modal}/>
      </CoffeeCardContainer>
    </>
  )
}
