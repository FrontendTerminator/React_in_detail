import React, {useEffect, useState} from "react";

const get2digitsString = (num: number) => num < 10 ? '0' + num : num

export const Clock: React.FC = () => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {

       const intervalId = setInterval(() => {
            console.log('tick')
            setDate(new Date())
        }, 1000)

        return () => clearInterval(intervalId)
    }, [])

    return <div>
        <span>{get2digitsString(date.getHours())}</span>
        :
        <span>{get2digitsString(date.getMinutes())}</span>
        :
        <span>{get2digitsString(date.getSeconds())}</span>
    </div>

}