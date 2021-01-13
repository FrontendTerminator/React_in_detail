import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {UncontrolledAccordion} from "./NewAccordion"

export default {
    title: 'UncontrolledAccordion stories',
    component: UncontrolledAccordion,
}

export const ModeChanging = () => {
   return <UncontrolledAccordion titleValue={"Users"} />
}