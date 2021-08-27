import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {Select} from './Select';
import {action} from "@storybook/addon-actions";

export default {
    title: '/Select',
    component: Select,
} as ComponentMeta<typeof Select>;


const Template: ComponentStory<typeof Select> = (args) => {
    const [value, setValue] = useState('1')
    return (
        <Select {...args}
                value={value}
                onChange={setValue}
                items={[
                    {value: '1', title: 'Minsk'},
                    {value: '2', title: 'Moscow'},
                    {value: '3', title: 'Kiev'},
                ]}/>
    )

}

export const Primary = Template.bind({});
Primary.args = {};

export const WithoutValue = Template.bind({});
WithoutValue.args = {};

