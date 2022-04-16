import React, { ReactElement, useState } from 'react';
import { Card } from 'components/Common';
import { RadioInput, ScoreByStars, Stepper, Selector } from 'components/Common';

// assets
import { ReactComponent as ArrowSvg } from './assets/Icon/arrow.svg';

// types
import { CardProps } from '../Card/Card';

// styles
import 'styled-components/macro';
import {
  ShippingFriquencies,
  StyledProductCardForm,
  SubscribeComment,
  SubTitle,
} from './ProductCard.styled';
import { deliverOptions } from './deliverOptions';

interface ProductCardProp {
  id: number | string;
  src: string;
  hoverSrc: string;
  price: number | string;
  bottles: number | string;
  discount_percentage: string;
}

const SUBSCRIBE = 'subscribe';
const PURCHASE = 'oneTime';

type radioIdType = 'subscribe' | 'oneTime';

export default function ProductCard({
  id,
  href,
  src,
  title,
  description,
  hoverSrc,
  price,
  bottles,
  discount_percentage,
}: CardProps & ProductCardProp): ReactElement {
  const [checkedRadioId, setCheckedRadioId] = useState<radioIdType>(SUBSCRIBE);

  const updateCheckedRadio: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setCheckedRadioId(e.target.id as radioIdType);

  const dollarPrice = +price / 100;

  return (
    <Card
      href={href}
      src={src.replace('{width}', '500')}
      hoverSrc={hoverSrc.replace('{width}', '500')}
      title={title}
      description={
        <SubTitle>
          <span>{description}</span>
          <ScoreByStars score={4.4} />
        </SubTitle>
      }
    >
      <StyledProductCardForm>
        <RadioInput
          id={SUBSCRIBE + id}
          value={SUBSCRIBE}
          checked={checkedRadioId === SUBSCRIBE + id}
          price={(dollarPrice * (100 - Number(discount_percentage))) / 100}
          bottles={bottles}
          onChange={updateCheckedRadio}
          text="Subscribe & Save"
        />
        <RadioInput
          id={PURCHASE + id}
          value={PURCHASE}
          checked={checkedRadioId === PURCHASE + id}
          price={dollarPrice}
          bottles={bottles}
          onChange={updateCheckedRadio}
          text="One-Time Purchase"
        />
        <div className="shipping-wrapper">
          <label htmlFor="purchase-option">Deliver Every:</label>
          <div className="selector-wrapper">
            <Selector id="purchase-option" options={deliverOptions} />
            <ArrowSvg />
          </div>
          <ShippingFriquencies>
            <Stepper />
            <button className="add-to-card" type="button">
              Add to Cart
            </button>
          </ShippingFriquencies>
        </div>
      </StyledProductCardForm>
      <SubscribeComment>Subscribe & Save 11.78%</SubscribeComment>
    </Card>
  );
}
