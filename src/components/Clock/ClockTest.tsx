import React, {useEffect, useState} from "react";



const get2digitsString = (num: number) => num < 10 ? '0' + num : num

export const Clock1: React.FC = () => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {

        let options = {
            width: "300px",
            border: true,
            borderColor: "#2e2e2e",
            baseColor: "#17a2b8",
            centerColor: "#459cff",
            centerBorderColor: "#fff",
            handColors: {
                second: "#d81c7a",
                minute: "#fff",
                hour: "#fff"
            }
        };

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