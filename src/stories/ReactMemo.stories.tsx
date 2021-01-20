import React, {useState} from 'react';

export default {
    title: "React.memo demo"
}

const NewMessagesCounter = (props: { count: number }) => {
    console.log("Counter")
    return <div>{props.count}</div>
}

const Counter = React.memo(NewMessagesCounter)

const UsersSecret = (props: { users: Array<string> }) => {
    console.log("usersSecret")
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}

const Users = React.memo(UsersSecret)

export const Example1 = () => {
    console.log("example")

    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["Dima", "valera", "Artem"])

    const addUser = () => {
        const newUsers = [...users, 'Sveta' + new Date().getTime()]
        // users.push('Sveta' + new Date().getTime())
        setUsers(newUsers)
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>add user</button>
        <Counter count={counter}/>
        <Users users={users}/>
    </>
}

