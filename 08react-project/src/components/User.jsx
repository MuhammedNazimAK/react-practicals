import { useState } from "react"

function User({ user }) {
    const [showName, setShowName] = useState(false);

    return (
        <>
        <h2>{user.email}</h2>
        <button onClick={() => setShowName(prev => !prev)}>
            {showName ? "Hide Name" : "Show Name"}
        </button>
        {showName && <h2>{user.name}</h2>}
        </>
    )
}

export default User