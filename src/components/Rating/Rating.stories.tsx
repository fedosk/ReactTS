import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {Rating, RatingValuePropsType} from './Rating';

export default {
    title: '/Rating',
    component: Rating,
} as ComponentMeta<typeof Rating>;

const Template: ComponentStory<typeof Rating> = (args) => {
    let [ratingValue, setRatingValue] = useState<RatingValuePropsType>(0)
    return <Rating value={ratingValue} changeRatingValue={setRatingValue} />
};

export const Primary = Template.bind({});
Primary.args = {
    value: 3
};

export const Secondary: ComponentStory<typeof Rating> = (args) =>  <Rating {...args} />;
Secondary.args = {
    value: 1
};

export const Third: ComponentStory<typeof Rating> = (args) =>  <Rating {...args} />;
Third.args = {
    value: 2
};

export const Fourth: ComponentStory<typeof Rating> = (args) =>  <Rating {...args} />;
Fourth.args = {
    value: 3
};

export const Fifth: ComponentStory<typeof Rating> = (args) =>  <Rating {...args} />;
Fifth.args = {
    value: 4
};

export const Sixth: ComponentStory<typeof Rating> = (args) =>  <Rating {...args} />;
Sixth.args = {
    value: 5
};
