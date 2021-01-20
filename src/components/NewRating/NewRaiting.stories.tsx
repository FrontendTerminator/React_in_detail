import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {NewRatingMemo, RatingPropsType} from "./NewRating"

export default {
    title: 'NewRating stories',
    component: NewRatingMemo,
}

const callback = action("rating changed inside component")

export const NewRatingMode1 = () => <NewRatingMemo defaultValue={0} onChange={callback}/>;
export const NewRatingMode2 = () => <NewRatingMemo defaultValue={1} onChange={callback}/>;
export const NewRatingMode3 = () => <NewRatingMemo defaultValue={2} onChange={callback}/>;
export const NewRatingMode4 = () => <NewRatingMemo defaultValue={3} onChange={callback}/>;
export const NewRatingMode5 = () => <NewRatingMemo defaultValue={4} onChange={callback}/>;
export const NewRatingMode6 = () => <NewRatingMemo defaultValue={5} onChange={callback}/>;
