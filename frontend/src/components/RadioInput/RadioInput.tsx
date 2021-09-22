import React from 'react';
import { Container } from './RadioInput.styled';

export default function RadioInput({ id, value, price, text, bottles, onChange, checked }: { 
  id: string;
  value: string;
  price: string | number;
  bottles: string | number;
  text: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  checked: boolean;
}) {
  return (
    <Container>
      <input 
        id={id}
        type="radio" 
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id}>{text}</label>
      <span className="price">
        <strong>${(+price).toFixed(2)} </strong>
        <span className="price--each">
          (${(+price/+bottles).toFixed(2)}/bottle)
        </span>
      </span>
    </Container>
  )
}
