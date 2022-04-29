import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {NavButton} from '../components';

export default {
  title: 'Figma/NavButton',
  component: NavButton,
} as ComponentMeta<typeof NavButton>;


const Template: ComponentStory<typeof NavButton> = (args) => <NavButton {...args} />;

export const Selected = Template.bind({});
Selected.args = {
  selected: true,
  children: 'Men',
};

export const NotSelected = Template.bind({});
NotSelected.args = {
  children: 'Men',
};
