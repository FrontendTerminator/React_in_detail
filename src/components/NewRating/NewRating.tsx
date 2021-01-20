import React, {useState} from "react";

export type RatingPropsType = {
    defaultValue?: 0 | 1 | 2 | 3 | 4 | 5
    onChange: (value: 0 | 1 | 2 | 3 | 4 | 5) => void
}

export function NewRating(props: RatingPropsType) {

    let [value, setValue] = useState(props.defaultValue ? props.defaultValue : 0);

    return (
        <div>
            <StarMemo selected={value > 0} setValue={() => {setValue(1); props.onChange(1); } } />
            <StarMemo selected={value > 1} setValue={() => {setValue(2); props.onChange(2); } } />
            <StarMemo selected={value > 2} setValue={() => {setValue(3); props.onChange(3); } } />
            <StarMemo selected={value > 3} setValue={() => {setValue(4); props.onChange(4); } } />
            <StarMemo selected={value > 4} setValue={() => {setValue(5); props.onChange(5); } } />
        </div>
    )
}

export const NewRatingMemo = React.memo(NewRating)


type StarPropsType = {
    selected: boolean
    setValue: () => void
}

function Star(props: StarPropsType) {
    console.log("Start rendering")

    return <span onClick={() => { props.setValue() } }>
        {props.selected ? <b>Star </b> : "Star "}
    </span>
}

const StarMemo = React.memo(Star)
