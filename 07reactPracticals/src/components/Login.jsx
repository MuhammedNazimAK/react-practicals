import { useState } from "react"

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin (e) {
        e.preventDefault();
        console.log({
            email,
            password
        });
    };

    return (
        <>
        <form onClick={handleLogin}>
            <div>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
        <button type="submit">Login</button>
        </form>
        </>
    )
}

export default Login