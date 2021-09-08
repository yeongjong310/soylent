import React, { ReactElement, ReactNode } from 'react'
import { Link } from 'react-router-dom';
import { StyledCard } from './Card.styled';

interface Props {
  href: string;
  src?: string;
  title: string;
  description?: string;
}

export default function Card({href, src, title, description}: Props): ReactElement {
  return (
    <StyledCard>
      <Link to={href} title={`${title} 이동`}>
        <div className="img-container">
          <img src={src} alt={title} />
        </div>
        <strong>{title}</strong>
        <p>
          {description}
        </p>
      </Link>
    </StyledCard>
  )
}
