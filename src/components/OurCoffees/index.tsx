import { CoffeeCard } from '../CoffeeCard'
import { TitleText } from '../Typography'
import { CoffeeList, OurCoffeesContainer } from './styles'

import { options} from '../../mock/coffee'
import ColorTabs from '../Menu'
import  { useState } from 'react';



export function OurCoffees() {

  const [optionSelected, setOptionSelected] = useState<string>('0'); 

  const selectedtab = (data: string) => {
    console.log(data)
    setOptionSelected(data)
  }

  return (
    <OurCoffeesContainer className="container">
      <TitleText size="l" color="subtitle">
        Nossos Produtos 
      </TitleText>
      <ColorTabs selectedtab={selectedtab}/>


      <CoffeeList>
        {options[+optionSelected].map((categories) => (
          <CoffeeCard key={categories.id} coffee={categories} />
        ))}
      </CoffeeList>
    </OurCoffeesContainer>
  )
}
