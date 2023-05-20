import { ShoppingCart } from 'phosphor-react';
import { QuantityInput } from '../QuantityInput'
import * as S from './style';
import { useState } from 'react';
import { useCart } from '../../hooks/useCart';

export interface Coffee {
    id: number
    tags: string[]
    name: string
    description: string
    photo: string
    price: number
  }
  
  interface CoffeeProps {
    coffee: Coffee
  }

const CartButton: React.FC<CoffeeProps>= ({ coffee }) => {
    const { addCoffeeToCart } = useCart()
  
    const [quantity, setQuantity] = useState(1)
  
    function handleIncrease() {
      setQuantity((state) => state + 1)
    }
  
    function handleDecrease() {
      setQuantity((state) => state - 1)
    }
  
    function handleAddToCart() {
      const coffeeToAdd = {
        ...coffee,
        quantity,
      }
  
      addCoffeeToCart(coffeeToAdd)
  
      setQuantity(1)
    }
  

    return (
        <S.AddCartWrapper>
        <QuantityInput
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
          quantity={quantity}
        />
        <button onClick={handleAddToCart}>
          <ShoppingCart weight="fill" size={22} />
        </button>
      </S.AddCartWrapper>   
    )
}

export default CartButton;