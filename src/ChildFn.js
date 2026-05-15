import React, { useState } from "react";

function Child({ updateMessage }) {
    const [message, setMessage] = useState("");

    const handleSend = () => {
        updateMessage(message);
    };

    return (
        <div
            style={{
                border: "1px solid black",
                padding: "10px",
                margin: "10px",
            }}
        >
            <h2>Child Component</h2>

            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />

            <button onClick={handleSend}>
                Send Data to Parent
            </button>
        </div>
    );
}

export default Child;