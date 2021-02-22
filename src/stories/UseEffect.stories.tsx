import {useEffect, useState} from "react";

export default {
    title: 'useEffect demo'
}

// useEffect выполняется после отрисовки компоненты, сперва происходит рендер, после логика идёт в useEffect, потому что в нём выполняется асинхронный запрос
// нужен для асинхронных запросов в компоненте

export const SimpleExample = () => {

    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    console.log('SimpleExample 1')
    // без зависимостей, по этому будет выполнятся каждый рендер компоненты, когда поменяется один из стейтов
    useEffect(() => {
        console.log('useEffect every render')
        document.title = counter.toString()
    })
    // пустой массив в зависимости, по этому будет выполняться только при первом рендере компоненты
    useEffect(() => {
        console.log('useEffect only first render')
        document.title = counter.toString()
    }, [])
    // с зависимостью counter, выполнится при первом рендеринге и при последующих, когда counter будет меняться
    useEffect(() => {
        console.log('useEffect first render and every counter change')
        document.title = counter.toString()
    }, [counter])

    return <>
        {counter} {fake}
        <button onClick={() => setCounter(counter + 1)}>counter</button>
        <button onClick={() => setFake(fake + 1)}>fake</button>
    </>
}

export const SetTimeOutExample = () => {
    console.log('SetTimeOutExample')
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)


    useEffect(() => {
        setInterval(() => {
            setCounter((state) => state + 1)
        }, 1000)
    }, [])


    return <>
        {counter} {/*{fake}*/}
        {/*<button onClick={() => setCounter(counter + 1)}>counter</button>
        <button onClick={() => setFake(fake + 1)}>fake</button>*/}
    </>
}

export const ClockWithUseEffect = () => {

    const [clock, setClock] = useState("")

    useEffect(()=>{
        setInterval(()=>{
            let time = new Date()
            setClock(time.getHours().toString()+ ' : ' + time.getMinutes().toString() + ' : ' + time.getSeconds().toString())
        }, 1000)

    }, [])

    return (
        <div>
            {clock}
        </div>
    )
}