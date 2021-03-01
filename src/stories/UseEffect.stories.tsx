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

export const SetIntervalExample = () => {
    console.log('SetTimeOutExample')
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)


    useEffect(() => {
        const intervalId = setInterval(() => {
            setCounter((state) => state + 1)
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])


    return <>
        {counter} {/*{fake}*/}
        {/*<button onClick={() => setCounter(counter + 1)}>counter</button>
        <button onClick={() => setFake(fake + 1)}>fake</button>*/}
    </>
}

export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1)

    console.log("Component rendered with " + counter)

    useEffect(() => {
        console.log('Effect occurred ' + counter)

        return () => {
            console.log('reset effect ' + counter)
        }

    }, [counter])

    const increase = () => {
        setCounter(counter + 1)
    }

    return (
        <div>
            Hello, counter: {counter}
            <button onClick={increase}>+</button>
        </div>
    )
}

export const KeysTrackerExample = () => {
    const [text, setText] = useState("")

    console.log("Component rendered with " + text)

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(text)
            setText(text + e.key)
        }
        window.addEventListener("keypress", handler)

        return () => {
            window.removeEventListener('keypress', handler)
        }

    }, [text])

    return (
        <div>
            Typed text: {text}
        </div>
    )
}

export const SetTimeoutExample = () => {
    const [text, setText] = useState("")

    console.log("Component rendered with " + text)

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            console.log('timeout expired')
            setText('3 seconds passed')
        }, 3000)

        return () => {
            clearTimeout(timeoutId)
        }
    }, [text])

    return (
        <div>
            text: {text}
        </div>
    )
}