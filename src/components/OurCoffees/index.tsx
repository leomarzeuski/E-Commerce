import { CoffeeCard } from '../CoffeeCard'
import { TitleText } from '../Typography'
import { CoffeeList, OurCoffeesContainer } from './styles'

import { options, todos } from '../../mock/coffee'
import ColorTabs from '../Menu'
import { useEffect, useState } from 'react';



export function OurCoffees() {

  const [optionSelected, setOptionSelected] = useState<string>('0');

  const selectedtab = (data: string) => {
    setOptionSelected(data)
  }

  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = event => {
    setSearchTerm(event.target.value);
    if(searchTerm.length > 0) setOptionSelected('0')
  };

  const results = todos.filter(coffee =>
    coffee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <OurCoffeesContainer className="container">
      <TitleText size="l" color="subtitle">
        Nossos Produtos
      </TitleText>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
       {searchTerm.length == 0 && <ColorTabs selectedtab={selectedtab} />}
      {searchTerm.length > 0 ? (<CoffeeList> {results?.map((item, index) => (
        <CoffeeCard key={index} coffee={item} />
      ))}</CoffeeList>
      ) : (
        <CoffeeList>
          {options[+optionSelected].map((categories, index) => (
            <CoffeeCard key={index} coffee={categories} />
          ))}
        </CoffeeList>
      )}
    </OurCoffeesContainer>
  )
}
