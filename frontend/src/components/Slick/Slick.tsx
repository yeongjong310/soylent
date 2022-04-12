import 'styled-components/macro';
import React, { ReactElement, useState } from 'react';
import useWindowWidth from 'hooks/useWindowWidth';
import { Container } from './Slick.styled';
import { ProductCard } from 'components';
import { ReactComponent as ThinArrowSvg } from './assets/Icon/arrow-thin.svg';
import { breakPoint } from 'styles/theme';

interface Props {
  data: [];
}

function Slick({ data }: Props): ReactElement {
  const [currentSlide, setCurrentSlide] = useState(0);
  const windowWidth = useWindowWidth();

  const step =
    windowWidth < +breakPoint.tablet1.replace('px', '')
      ? 1
      : windowWidth < +breakPoint.tablet2.replace('px', '')
      ? 2
      : 3;

  const updateCurrentSlide = (nextSlide: number) => {
    if (nextSlide < 0 || nextSlide >= data.length / step) return;
    setCurrentSlide(nextSlide);
  };

  return (
    <Container currentSlide={currentSlide}>
      <div className="current-slide">
        <button
          onClick={() => {
            updateCurrentSlide(currentSlide - 1);
          }}
        >
          <ThinArrowSvg
            css={`
              transform: rotate(180deg);
            `}
            width="26px"
            height="28px"
          />
        </button>
        <output>
          {currentSlide + 1}/{Math.ceil(data.length / step)}
        </output>
        <button
          onClick={() => {
            updateCurrentSlide(currentSlide + 1);
          }}
        >
          <ThinArrowSvg width="26px" height="28px" />
        </button>
      </div>
      <div className="carousel">
        {data.map(
          ({
            id,
            featuredImage,
            alternateImage,
            title,
            subtitle,
            price,
            bulkQuantity,
            subscriptions: { discount_percentage },
          }) => (
            <ProductCard
              key={id}
              id={id}
              href="#"
              src={featuredImage}
              title={title}
              hoverSrc={alternateImage}
              description={subtitle}
              price={price}
              bottles={bulkQuantity}
              discount_percentage={discount_percentage}
            />
          )
        )}
      </div>
    </Container>
  );
}

export default Slick;
