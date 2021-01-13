import React from "react";

function Message(props: any) {
    if (props.title === "Hard") {
        return (<div>
            <p>The over</p>
        </div>)
    } else {
        return <div>
            <b>The over</b>
        </div>
    }

}

export default Message;