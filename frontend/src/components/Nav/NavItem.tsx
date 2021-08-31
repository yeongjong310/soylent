import React, { ReactElement } from 'react'
import { NavLink } from 'react-router-dom'

interface Props {
  text: string;
  href: string;
}

export default function NavItem({ text, href }: Props): ReactElement {
  return (
    <>
     <h2>{text}</h2> 
     <NavLink to={href}></NavLink>
    </>
  )
}
