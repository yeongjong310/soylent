import React from 'react';
import { ReactComponent as UserIcon } from 'assets/Icon/user.svg';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import IconLink from './IconLink';
import { BrowserRouter as Router } from 'react-router-dom';

export default {
  title: 'Components/IconLink',
  component: IconLink,
  decorators: [
    (Story) => (
      <Router>
        <Story />
      </Router>
    ),
  ],
} as ComponentMeta<typeof IconLink>;

export const UserIconLink: ComponentStory<typeof IconLink> = (args) => (
  <IconLink {...args}>
    <UserIcon />
  </IconLink>
);

UserIconLink.args = {
  to: '#',
  as: 'div',
};
