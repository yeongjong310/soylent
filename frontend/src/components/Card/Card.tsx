import React, { ReactElement, ReactNode } from 'react'
import { Link } from 'react-router-dom';
import { StyledCard } from './Card.styled';

interface Props {
  href: string;
  src?: string;
  title: string;
  description?: string | ReactNode;
  children?: ReactNode;
  width?: number;
  ratio?: number;
}

export default function Card({width, ratio, href, src, title, description, children}: Props): ReactElement {
  return (
    <StyledCard
      width={width}
      ratio={ratio}
    >
      <Link to={href} title={`${title} 이동`}>
        <div className="img-container">
          <img src={src} alt={title} />
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
