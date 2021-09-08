import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { A11yHidden } from 'components';

export default {
  title: 'Components/A11yHidden',
  component: A11yHidden,
  args: {
    focusable: false,
    as: 'a',
  },
  argTypes: {
    className: {
      control: false
    },
  }
} as ComponentMeta<typeof A11yHidden>;

const Template: ComponentStory<typeof A11yHidden> = (args) => <A11yHidden {...args} />;

export const UnfocasableA11yHidden = Template.bind({});
UnfocasableA11yHidden.args = {
  children: 'test',
};

export const focasableA11yHidden = Template.bind({});
focasableA11yHidden.args = {
  children: 'test',
  focusable: true,
  href: '#',
};