import React, {useMemo, useState} from "react";
import s from "../Select/Select.module.css";
import ss from "./UseMemoSelect.module.css"

export default {
    title: 'useMemoSelect'
}

type ItemsType = {
    title: string
    value: any
    country: string
}
export type SelectPropsType = {
    items: ItemsType[]
}

export const Selects = () => {

    let x = [
        {title: "Moscow", value: 1, country: "Russia"},
        {title: "Krasnodar", value: 2, country: "Russia"},
        {title: "Piter", value: 3, country: "Russia"},
        {title: "Minsk", value: 4, country: "Belarus"},
        {title: "Brest", value: 5, country: "Belarus"},
        {title: "Grodno", value: 6, country: "Belarus"},
        {title: "Kiev", value: 7, country: "Ukraine"},
        {title: "Lviv", value: 8, country: "Ukraine"},
        {title: "Doneck", value: 9, country: "Ukraine"}
    ]

    let [cities, setCities] = useState(x)
    let [counter, setCounter] = useState(0)

    const changeCounter = () => {
        setCounter(counter += 1)
    }


    let newArrayBelarus = useMemo(() => {
        return cities.filter(c => c.country === "Belarus")
    }, [cities])

    let newArrayRussia = useMemo(()=>{
        return cities.filter(c => c.country === "Russia")
    }, [cities])

    let newArrayUkraine = cities.filter(c => c.country === "Ukraine")
    // без useMemo по этому будет отрисовка

    return (
        <div className={ss.selects}>
            <button onClick={changeCounter}>+</button>
            {counter}
            <div className={ss.select}>
                <Select1Memo items={newArrayBelarus} />
            </div>
            <div className={ss.select}>
                <Select2Memo items={newArrayRussia} />
            </div>
            <div className={ss.select}>
                <Select3Memo items={newArrayUkraine} />
            </div>
        </div>
    )
}



const Select1Memo = React.memo(Select1)

function Select1(props: SelectPropsType) {
    console.log("Select1 render")
    let [collapsed, setCollapsed] = useState<boolean>(false)
    let [inputElement, setInputElement] = useState("None")
    let [inputClass, setInputClass] = useState(s.input2)

    const changeCollapsed = () => {
        setCollapsed(!collapsed)
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
            >{i.title}</div>) : ""}
        </div>
    )
}

const Select2Memo = React.memo(Select2)

function Select2(props: SelectPropsType) {
    console.log("Select2 render")
    let [collapsed, setCollapsed] = useState<boolean>(false)
    let [inputElement, setInputElement] = useState("None")
    let [inputClass, setInputClass] = useState(s.input2)

    const changeCollapsed = () => {
        setCollapsed(!collapsed)
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
            >{i.title}</div>) : ""}
        </div>
    )
}

const Select3Memo = React.memo(Select3)

function Select3(props: SelectPropsType) {
    console.log("Select3 render")
    let [collapsed, setCollapsed] = useState<boolean>(false)
    let [inputElement, setInputElement] = useState("None")
    let [inputClass, setInputClass] = useState(s.input2)

    const changeCollapsed = () => {
        setCollapsed(!collapsed)
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
            >{i.title}</div>) : ""}
        </div>
    )
}


