import React, {useReducer} from "react";
import {reducer, TOOGLE_CONSTANT} from "./Reducer";

type AccordionPropsType = {
    titleValue: string
}

export function UncontrolledAccordionMemo(props: AccordionPropsType) {

    // let [collapsed, setCollapsed] = useState(false);
    let [state, dispatch] = useReducer(reducer, {collapsed: false});

    return (<div>
            {/*<AccordionTitle title={props.titleValue} onClick={() => {setCollapsed(!collapsed)}}/>*/}
            <AccordionTitle title={props.titleValue} onClick={() => {
                dispatch({type: TOOGLE_CONSTANT})
            }}/>
            {!state.collapsed && <AccordionBody/>}
        </div>
    )
}
export const UncontrolledAccordion = React.memo(UncontrolledAccordionMemo)

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitleMemo(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering");
    return (<div>
        <h3 onClick={() => {
            props.onClick()
        }}>{props.title}</h3>
    </div>)
}
const AccordionTitle = React.memo(AccordionTitleMemo)

function AccordionBodyMemo() {
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
const AccordionBody = React.memo(AccordionBodyMemo)

