import { useState } from "react"

function Input () {
    const [input, setInput] = useState();
    return (
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
    )
}
export default Input