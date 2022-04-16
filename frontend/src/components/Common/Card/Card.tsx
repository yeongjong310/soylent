import React, { ReactElement, ReactNode, useState } from 'react'
import { Link } from 'react-router-dom';
import { StyledCard } from './Card.styled';

export interface CardProps {
  href: string;
  src?: string;
  hoverSrc?: string;
  title: string;
  description?: string | ReactNode;
  children?: ReactNode;
  width?: number;
  ratio?: number;
  className?: string;
}

export default function Card({width, ratio, href, src, hoverSrc, title, description, className, children}: CardProps): ReactElement {
  const [viewImg, setViewImg] = useState(src);
  
  return (
    <StyledCard
      width={width}
      ratio={ratio}
      ishover={viewImg===hoverSrc}
      className={className}
    >
      <Link to={href} title={`${title} 이동`}>
        <div className="img-container">
          {hoverSrc 
            ? <img 
              src={viewImg} 
              onMouseOver={() => {setViewImg(hoverSrc)}} 
              onMouseOut={() => {setViewImg(src)}}
              alt={title} />
            : <img 
              src={viewImg} 
              alt={title} />
          }
        </div>
      </Link>
      <Link aria-hidden='true' tabIndex={-1} to={href} title={`${title} 이동`}>
        <strong className="title">{title}</strong>
      </Link>
      {
        typeof description === 'string' 
        ? (<p className="description">
            {description}
          </p>)
        : typeof description === 'undefined'
        ? ''
        : description
      }
      {children}
    </StyledCard>
  )
}
