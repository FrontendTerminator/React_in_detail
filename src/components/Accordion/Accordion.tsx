import React from "react";

type ItemType = {
    title: string
    value: any
}

export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    color?: string
    items: ItemType[]
    onClick: (value: any) => void
}

export function Accordion(props: AccordionPropsType) {
    return (<div>
            <AccordionTitle
                title={props.titleValue}
                onChange={props.onChange}
                color={props.color}
            />
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
            </div>
    )
}



type AccordionTitlePropsType = {
    title: string
    onChange: () => void
    color?: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering");
    return (<div
        style={{color: props.color ? props.color : "black"}}
        onClick={(e) => props.onChange()}>
        <h3>{props.title}</h3>
    </div>)
}

type AccordionBodyType = {
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyType) {
    console.log("AccordionBody rendering");
    return (
        <div>
            <ul>
                {
                    props.items.map((i, index) => <li onClick={() => {props.onClick(i.value)} } key={index}>{i.title}</li>)
                }
            </ul>
        </div>
    )
}
