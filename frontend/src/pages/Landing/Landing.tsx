import { ReactElement } from 'react'
import { Banner } from 'components';
import { SlickSection } from 'sections';

export default function Landing(): ReactElement {
  return (
    <main>
      <Banner />
      <SlickSection />
    </main>
  )
}
