import React, {useState} from "react";
import s from "./Select_Dymuch.module.css"

type ItemsType = {
    title: string
    value: any
}
export type SelectPropsType = {
    items: ItemsType[]
    value?: any
    onChange: (value: any) => void
}

export function Select(props: SelectPropsType) {

    const selecteditem = props.items.find(i => i.value === props.value)

    return (
        <div>
            <div>{selecteditem && selecteditem.title}</div>
            {props.items.map(i => <div key={i.value}>{i.title}</div>)}
        </div>
    )
}

