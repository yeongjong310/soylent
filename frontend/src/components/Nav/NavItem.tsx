import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'

interface Props {
  text: string;
  href: string;
}

export default function NavItem({ text, href }: Props): ReactElement {
  return (
    <li>
      <Link to={href}>{text}</Link>
    </li>
  )
}
