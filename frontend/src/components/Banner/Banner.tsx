import Button from 'components/Button/Button';
import React, { ReactElement } from 'react'
import { BannerContent, StyledBanner } from './Banner.styled';

interface Props {
  
}

export default function Banner({}: Props): ReactElement {
  return (
    <StyledBanner>
      <picture className="home-hero__image object-cover">
        <source 
          media="(max-width: 767px)" 
          srcSet="//cdn.shopify.com/s/files/1/0003/5933/3902/files/CC_Hero_2_Mobile_640x.png?v=1624983200 640w" 
        />
        <source 
          media="(max-width: 999px)" 
          srcSet="//cdn.shopify.com/s/files/1/0003/5933/3902/files/CC_Hero_2_Tablet_2024x.png?v=1624983175 1024w" 
        />
        <source 
          media="(min-width: 1000px)" 
          srcSet="//cdn.shopify.com/s/files/1/0003/5933/3902/files/CC_HERO_Option2_car_2160x.png?v=1624982902 2160w"
        />
        <img 
          src="//cdn.shopify.com/s/files/1/0003/5933/3902/files/CC_HERO_Option2_car_2160x.png?v=1624982902" 
          className="object-cover" 
          alt=""
        />
      </picture>
      <BannerContent>
        <h2>Complete Nutrition. Science-Backed and Sustainable.</h2>
        <p>When there is no time, grab a Soylent and have a nutritious meal that is as easy as it is delicious!</p>

          <Button text={'Shop now'} arrowanimation={'true'} shrinkanimation={'true'} upper={'true'}></Button>

      </BannerContent>
    </StyledBanner>
  )
}
