import 'styled-components/macro';
import React, { ReactElement, useEffect, useState } from 'react'
import { Slick } from 'components';
import { Container } from './SlickSection.styled';


export default function SlickSection(): ReactElement {
  const [randomData, setRandomData] = useState();
  const [currentTab, setCurrentTab] = useState('all-drinks');
  useEffect(() => {
    const url = "api/featured";

    const fetchData = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) throw new Error('비동기 통신 오류');

        const json = await response.json();

        setRandomData(json);
      } catch(e) {
        console.error(e);
      }
    }

    fetchData();
  }, []);

  const updateButtonName:React.MouseEventHandler<HTMLUListElement> = (e) => {
    const target = e.target as Element;
    if (target.tagName !== 'BUTTON') return;

    switch(target.textContent) {
      case 'Drinks':
        setCurrentTab('all-drinks');
        break;
      case 'Powder':
        setCurrentTab('all-powder');
        break;
      case 'Squared':
        setCurrentTab('squared');
        break;
      default:
    }
  }

  return (
    <Container>
      <h2>Find Your Perfect Soylent</h2>
      <ul
        onClick={updateButtonName}
        >
        <li className={currentTab === 'all-drinks' ? 'active' : ''}><button>Drinks</button></li>
        <li className={currentTab === 'all-powder' ? 'active' : ''}><button>Powder</button></li>
        <li className={currentTab === 'squared' ? 'active' : ''}><button>Squared</button></li>
      </ul>
        <p>No time, no problem! Grab a complete, nutritious meal that is as healthy as it is tasty!</p>
      {randomData && 
        <Slick data={randomData[currentTab]}/>
      }
    </Container>
  )
}
