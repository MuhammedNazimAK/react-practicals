import { useState } from "react"

function Form() {
    const [name, setName] = useState();
    function handleSubmit (e) {
        e.preventDefault();
        console.log(name)
    }
    return (
        <>
            <form onClick={handleSubmit}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default Form