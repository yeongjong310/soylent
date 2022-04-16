import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { theme } from 'styles/theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'styles/GlobalStyle';
import ProductCard from './ProductCard';

export default {
  title: 'Components/ProductCard',
  component: ProductCard,
  argTypes: {
    className: {
      control: false
    }
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Router>
          <GlobalStyle />
          <Story />
        </Router>
      </ThemeProvider>
    )
  ]
} as ComponentMeta<typeof ProductCard>;

const Template: ComponentStory<typeof ProductCard> = (args) => <ProductCard {...args} />;

export const Moblie = Template.bind({});
Moblie.args = {
  title: 'Complete Meal', 
  description: '12 Bottles',
  href: '#', 
  src: '/assets/images/nav/drinks/complete_protein.png',
  hoverSrc: '/assets/images/nav/drinks/complete_energy.png'
}