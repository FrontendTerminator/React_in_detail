import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {NewRating, RatingPropsType} from "./NewRating"

export default {
    title: 'NewRating stories',
    component: NewRating,
}

const callback = action("rating changed inside component")

export const NewRatingMode1 = () => <NewRating defaultValue={0} onChange={callback}/>;
export const NewRatingMode2 = () => <NewRating defaultValue={1} onChange={callback}/>;
export const NewRatingMode3 = () => <NewRating defaultValue={2} onChange={callback}/>;
export const NewRatingMode4 = () => <NewRating defaultValue={3} onChange={callback}/>;
export const NewRatingMode5 = () => <NewRating defaultValue={4} onChange={callback}/>;
export const NewRatingMode6 = () => <NewRating defaultValue={5} onChange={callback}/>;
