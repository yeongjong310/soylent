import React, { ReactElement, useState, useEffect } from 'react'
import { Banner, Slick } from 'components';
import { SlickSection } from 'sections';
interface Props {
  
}

export default function Landing({}: Props): ReactElement {
  return (
    <main>
      <Banner />
      <SlickSection />
    </main>
  )
}
