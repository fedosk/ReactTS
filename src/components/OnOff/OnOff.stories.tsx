import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {OnOff} from './OnOff';
import {action} from "@storybook/addon-actions";

export default {
    title: '/OnOff',
    component: OnOff,
} as ComponentMeta<typeof OnOff>;


const Template: ComponentStory<typeof OnOff> = (args) => {
    let [status, setStatus] = useState<boolean>(false)
    return <OnOff status={status} changeStatusOnOff={() => {
        setStatus(!status)
    }}/>
};

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary: ComponentStory<typeof OnOff> = (args) => <OnOff {...args} changeStatusOnOff={action('hello')} />;
Secondary.args = {
    status: false,
}
