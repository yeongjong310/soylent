import React, { ReactElement, ReactNode } from 'react'

interface NavProps {
  className?: string,
  children: ReactNode
}

export default function Nav({ className, children }: NavProps): ReactElement {
  return (
    <>
      {/* <SkipToContent /> */}
      <nav
        className={className}>
        <div className="navItems">
          { children }
        </div>
      </nav>
    </>
  )
}
