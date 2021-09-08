import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Card } from 'components';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from 'styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';

export default {
  title: 'Components/Card',
  component: Card,
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
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Mobile = Template.bind({});
Mobile.args = {
  title: 'Complete Meal', 
  description: 'No time, no problem! Complete, drinkable meal.',
  href: '#', 
  src: '/assets/images/nav/drinks/complete_meal.png'
}