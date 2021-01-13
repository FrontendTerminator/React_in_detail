import React from "react";
import {Select} from "./Select";


export default {
    title: 'components/TestSelect',
    component: Select,
}

export const TestSelect = () => <Select
    items={[
        {title: "None", value: 1},
        {title: "Boston", value: 2},
        {title: "Paris", value: 3},
        {title: "London", value: 4}
    ]}
/>

