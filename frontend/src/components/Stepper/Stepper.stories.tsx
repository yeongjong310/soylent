import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { theme } from 'styles/theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'styles/GlobalStyle';
import Stepper from './Stepper';

export default {
  title: 'Components/Stepper',
  component: Stepper,
  argTypes: {
    className: {
      control: false
    }
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Story />
      </ThemeProvider>
    )
  ]
} as ComponentMeta<typeof Stepper>;

const Template: ComponentStory<typeof Stepper> = (args) => <Stepper {...args} />;

export const Moblie = Template.bind({});