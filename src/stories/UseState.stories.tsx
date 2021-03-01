import {useMemo, useState} from "react";

export default {
    title: 'useState demo'
}

function generateData () {
    console.log('generateData')
    return 1000
}


export const Example1 = () => {
    console.log('example 1')

    //const  initialValue = useMemo(generateData, [])
    // use state сам может запомнить результат функции, которая вызовется у него в инишиал стейте и не будет её после отрисовывать реакт
    const [counter, setCounter] = useState(generateData)

    const changer = (state: number) => {
        return state + 1
    }

    return <>
        <button onClick={() => setCounter(changer)}>+</button>
        {counter}
    </>
}