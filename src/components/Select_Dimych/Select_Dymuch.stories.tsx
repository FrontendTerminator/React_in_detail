import React from "react";
import {Select} from "./Select_Dymuch";
import {action} from "@storybook/addon-actions";


export default {
    title: 'components/Test Select by Dimych',
    component: Select,
}

export const TestSelectByDimych = () => <Select onChange={action('Value changed')}
                                               value={'2'}
                                               items={[
                                                   {value: '1', title: 'Minsk'},
                                                   {value: '2', title: 'Moscow'},
                                                   {value: '3', title: 'Kiev'},
                                               ]}
/>

