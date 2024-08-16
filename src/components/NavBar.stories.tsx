import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import NavBar from './NavBar';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'Components/NavBar',
  component: NavBar,
  decorators: [(Story) => <MemoryRouter><Story /></MemoryRouter>],
} as Meta<typeof NavBar>;

const Template: StoryFn<typeof NavBar> = (args) => <NavBar {...args} />;

export const Default = Template.bind({});
Default.args = {};
