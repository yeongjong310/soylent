import React from 'react';
import { Nav } from 'components';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { theme } from 'styles/theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'styles/GlobalStyle';

export default {
  title: 'Components/Nav',
  component: Nav,
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
} as ComponentMeta<typeof Nav>;

const Template: ComponentStory<typeof Nav> = (args) => <Nav {...args} />;

export const Moblie = Template.bind({});
Moblie.args = {
  style: {
    top: "0%",
  }
}