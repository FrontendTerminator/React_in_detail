import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {NewRating} from "./components/NewRating/NewRating";
import {RatingValueType} from "./components/Rating/Rating";
import UncontrolledOnOff from './components/UncontrolledOnOff/UncontrolledOnOff';



function App(props: any) {
    let [switchOn, setSwitchOn] = useState(true);

    return (
        <div className={"App"}>
            {/*<Accordion />*/}
            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}

export default App;
