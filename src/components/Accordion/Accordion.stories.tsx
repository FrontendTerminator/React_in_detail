import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {Accordion, AccordionPropsType} from "./Accordion"
import {Story} from "@storybook/react/types-6-0";

export default {
    title: 'components/Accordion stories',
    component: Accordion,
}

const callback = action('accordionmode change event fired ')
const onClickCallback = action('some item wac clicked ')

export const MenuCollapsedMode = () => <Accordion
    onClick={onClickCallback}
    titleValue={"Menu"} collapsed={true} onChange={callback} items={[]}/>;
export const UsersUncollapsedMode = () => <Accordion
    onClick={onClickCallback}
    titleValue={"Users"} collapsed={false} onChange={callback}
    items={[{title: 'Dimuch', value: 1}, {title: 'Valera', value: 2},
        {title: 'Artem', value: 3}, {title: 'Viktor', value: 4}]}/>;

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion onClick={value => {alert(`user with ${value} should be happy`)} }
                      titleValue={"Menu"} collapsed={value} onChange={() => setValue(!value)}
                      items={[
                          {title: 'Dimuch', value: 1},
                          {title: 'Valera', value: 2},
                          {title: 'Artem', value: 3},
                          {title: 'Viktor', value: 4}
                          ]}/>
}


// const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />;

// export const MenuCollapsedMode2 = Template.bind({});
// MenuCollapsedMode2.args = {
//     titleValue: "Menu",
//     collapsed: true
// }
//
// export const UsersUncollapsedMode2 = Template.bind({});
// UsersUncollapsedMode2.args = {
//     titleValue: "Users",
//     collapsed: false
// }
//
// export const ModeChanging2: Story<AccordionPropsType> = (args) => {
//     const [value, setValue] = useState<boolean>(true)
//
//     return <Accordion {...args} collapsed={value} onChange={() => setValue(!value)}/>
// }
// ModeChanging2.args = {
//     titleValue: "Menu"
// }