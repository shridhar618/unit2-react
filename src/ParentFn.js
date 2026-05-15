import React, { useState } from "react";
import Child from "./ChildFn";

function Parent() {
    const [message, setMessage] = useState("Hello from Parent!");

    const updateMessage = (newMessage) => {
        setMessage(newMessage);
    };

    return (
        <div>
            <h1>Parent Component</h1>

            <p>Message: {message}</p>

            <Child updateMessage={updateMessage} />
        </div>
    );
}

export default Parent;