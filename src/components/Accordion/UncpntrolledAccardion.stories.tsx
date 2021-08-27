import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import UncontrolledAccordion from "./UncontrolledAccordion";

export default {
    title: '/UncontrolledAccordion',
    component: UncontrolledAccordion,
} as ComponentMeta<typeof UncontrolledAccordion>;


const Template: ComponentStory<typeof UncontrolledAccordion> = (args) => <UncontrolledAccordion {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
    titleValue:'Menu',
};

export const Users = Template.bind({});
Users.args = {
    titleValue:'Users',
};

