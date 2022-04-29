import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {NavBar} from '../components';

export default {
  title: 'Figma/NavBar',
  component: NavBar,
} as ComponentMeta<typeof NavBar>;


const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;

export const Selected = Template.bind({});
Selected.args = {
  items: ['women', 'men', 'kids'],
  selected: 'women',
  onItemSelected:(item:string)=>action(`Select ${item}`)
};

