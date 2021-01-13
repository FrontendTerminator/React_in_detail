import React, {useState} from "react";
import s from "./Select.module.css"

type ItemsType = {
    title: string
    value: any
}
export type SelectPropsType = {
    items: ItemsType[]
}

export function Select(props: SelectPropsType) {
    let [collapsed, setCollapsed] = useState<boolean>(false)
    let [inputElement, setInputElement] = useState("None")
    let [inputClass, setInputClass] = useState(s.input2)

    const changeCollapsed = () => {
        setCollapsed(!collapsed)
    }
    const changeInputClass = () => {
        setInputClass(s.input3)
    }
    const changeSelect = (title: string) => {
        setInputElement(title)
        setCollapsed(!collapsed)
    }

    return (
        <div>
            <div className={s.input} onClick={changeCollapsed}>{inputElement}</div>
            {collapsed ? props.items.map(i => <div key={i.value}
                onClick={() => changeSelect(i.title)}
                className={inputClass}
                onMouseEnter={changeInputClass}
            >{i.title}</div>) : ""}
        </div>
    )
}

