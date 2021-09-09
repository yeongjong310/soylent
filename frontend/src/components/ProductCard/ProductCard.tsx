import React, { ReactElement, useState } from 'react'
import Styled from 'styled-components/macro';
import { StyledProductCardForm } from './ProductCard.styled';
import { Card, Star } from 'components';
import { CardProps } from '../Card/Card';

interface ProductCard {
  src: string;
  hoverSrc: string;
}

const SUBSCRIBE = "subscribe";
const PURCHASE = "purchase";

type radioIdType = "subscribe"|"purchase";

export default function ProductCard({href, src, title, description, hoverSrc}: CardProps & ProductCard): ReactElement {
  const [checkedRadioId, setCheckedRadioId] = useState<radioIdType>(SUBSCRIBE);
  const updateCheckedRadio:React.ChangeEventHandler<HTMLInputElement> = 
    (e) => setCheckedRadioId(e.target.id as radioIdType);
  console.log(src.replace('{width}', '500'));
  return (
    <Card
      href={href} 
      src={src.replace('{width}', '500')} 
      hoverSrc={hoverSrc.replace('{width}', '500')}
      title={title} 
      description={
      <div
        css={`
          display:flex;
          justify-content: space-between;
        `}
      >
        <span>{description}</span>
        <div
          css={
            'margin-bottom: 0.8125rem'
          }
        >
          <Star percent={100}/>
          <Star percent={100}/>
          <Star percent={100}/>
          <Star percent={100}/>
          <Star percent={50}/>
          <span css={
            `padding-left: 0.3125rem`
          }>302 Reviews</span>
        </div>
      </div>}
      >
        <StyledProductCardForm>
          <RadioInput
            id={SUBSCRIBE}
            value={SUBSCRIBE}
            checked={checkedRadioId===SUBSCRIBE}
            price={"37.05"}
            bottle={12}
            onChange={updateCheckedRadio}
            text="Subscribe & Save"
          />
          <RadioInput
            id={PURCHASE}
            value={PURCHASE}
            checked={checkedRadioId===PURCHASE}
            price={"123"}
            bottle={12}
            onChange={updateCheckedRadio}
            text="One-Time Purchase"
          />
          <div>
            <div>
              <label 
                css={
                  ` 
                    display: block;
                    margin-top: 0.625rem;
                    margin-bottom: 0.3125rem;
                    font-size: 0.6875rem;
                  `
                }
                htmlFor="purchase-option">
                Deliver Every:
              </label>
              <div>
                <select id="purchase-option" className="purchase-option">
                  <option value="15">15 Days</option>
                  <option value="30">30 Days</option>
                  <option value="45">45 Days</option>
                  <option value="60">60 Days</option>
                </select>
              </div>
            </div>
            {/* stepper here */}
          </div>
        </StyledProductCardForm>
    </Card>
  )
}

function RadioInput({ id, value, price, text, bottle, onChange, checked }: { 
  id: string;
  value: string;
  price: string | number;
  bottle: number;
  text: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  checked: boolean;
}) {
  return (
    <div
      css={
        `
          display: flex;
          justify-content: space-between; 
          margin-bottom: 0.625rem;
        `
      }
    >
      <input 
        id={id}
        type="radio" 
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id}>{text}</label>
      <span
        css={
          `
            font-size: 0.6875rem;
            flex-grow: 1;
            text-align: right;
          `
        }
      ><strong>${(+price).toFixed(2)} </strong>(${(+price/+bottle).toFixed(2)}/bottle)
      </span>
    </div>
  )
}
