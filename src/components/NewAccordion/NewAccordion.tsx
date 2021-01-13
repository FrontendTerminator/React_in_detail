import React, {useReducer, useState} from "react";

type AccordionPropsType = {
    titleValue: string
}

type ActionType = {
    type: string
}

const TOOGLE_CONSTANT = "TOOGLE-COLLAPSED"

const reducer = (state: boolean, action: ActionType) => {
    switch (action.type) {
        case TOOGLE_CONSTANT:
            return !state
    }
    return state
}

export function UncontrolledAccordion(props: AccordionPropsType) {

    // let [collapsed, setCollapsed] = useState(false);
    let [collapsed, dispatch] = useReducer(reducer, false);

    return (<div>
            {/*<AccordionTitle title={props.titleValue} onClick={() => {setCollapsed(!collapsed)}}/>*/}
            <AccordionTitle title={props.titleValue} onClick={() => {
                dispatch({type: TOOGLE_CONSTANT})
            }}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering");
    return (<div>
        <h3 onClick={() => {
            props.onClick()
        }}>{props.title}</h3>
    </div>)
}

function AccordionBody() {
    console.log("AccordionBody rendering");
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}
