import React, {useCallback, useMemo, useState} from "react";

export default {
    title: 'useMemo-useCallback'
}

export const DifficultCountingExample = () => {

    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while(fake < 1000000){
                fake++
                const fakeValue = Math.random()
            }
            tempResultA = tempResultA * i;
        }
        return tempResultA
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i;
    }

    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            result for a: {resultA}
        </div>
        <div>
            result for b: {resultB}
        </div>
    </>
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log("usersSecret")
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}

const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {
    console.log("HelpsToReactMemo")
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["Dimych", "Valera", "Artem", "Katya"])

    const newArray = useMemo(()=>{
        const newArray = users.filter(u => u.toLocaleLowerCase().indexOf("a") > -1)
        return newArray
        }
    , [users])

    const addUser = () => {
        const newUsers = [...users, 'Sveta' + new Date().getTime()]
        setUsers(newUsers)
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => addUser()}>add user</button>
        {counter}
        <Users users={newArray}/>
    </>
}

export const LikeUseCallbackMemo = () => {
    console.log("LikeUseCallbackMemo")
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(["React", "Js", "CSS", "Html"])
    // первый вариант
    const memoizedAddBook = useMemo(() => {
       return () => {
           console.log(books)
           const newBooks = [...books, 'Angular' + new Date().getTime()]
           setBooks(newBooks)
       }
    }, [books])
    // второй вариант. Разница только в return, тут его не надо писать
    const memoizedAddBook2 = useCallback(() => {
        console.log(books)
        const newBooks = [...books, 'Angular' + new Date().getTime()]
        setBooks(newBooks)
    }, [books])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Book addBook={memoizedAddBook2}/>
    </>
}

type BooksSecretPropsType = {
    addBook: () => void
}

const BooksSecret = (props: BooksSecretPropsType) => {
    console.log("BooksSecret")
    return <div>
        <button onClick={() => props.addBook()}>add book</button>
    </div>
}

const Book = React.memo(BooksSecret)