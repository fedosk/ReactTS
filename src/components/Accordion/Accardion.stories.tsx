import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import Accordion from './Accordion';
import {action} from "@storybook/addon-actions";

export default {
    title: '/Accordion',
    component: Accordion,
} as ComponentMeta<typeof Accordion>;

const items = [{
    title: "Sergej",
    value: '1',
}, {
    title: "Eduard",
    value: '2',
}, {
    title: "Ivan",
    value: '3',
}, {
    title: "Anton",
    value: '4',
}, {
    title: "Danik",
    value: '5',
},]

const Template: ComponentStory<typeof Accordion> = (args) => {
    let [accardionCollapsed, setAccardionCollapsed] = useState<boolean>(false)
    return <Accordion {...args}
                      titleValue={'Menu'}
                      collapsed={accardionCollapsed}
                      changeAccardionCollapsed={() => {
                          setAccardionCollapsed(!accardionCollapsed)
                      }}
                      onClick={action(`cliked`)}/>
};

export const Primary = Template.bind({});

Primary.args = {
    items
};

export const Collapsed: ComponentStory<typeof Accordion> = (args) =>
    <Accordion {...args}
               changeAccardionCollapsed={action('NotCollapsed')}
               onClick={(e) => alert(`Hello ${e}`)}/>;

Collapsed.args = {
    titleValue: 'Menu',
    collapsed: false,
    items
}

export const NotCollapsed: ComponentStory<typeof Accordion> = (args) =>
    <Accordion {...args}
               changeAccardionCollapsed={action('Collapsed')}
               onClick={action(`cliked`)}/>;

NotCollapsed.args = {
    titleValue: 'Menu',
    collapsed: true,
    items
}