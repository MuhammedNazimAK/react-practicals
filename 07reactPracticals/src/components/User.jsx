import { useEffect, useState } from "react"

function Users() {
    const [users, setUsers] = useState();
    const [loading, setLoading] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        async function fetchUsers(params) {
            try {
                const response = await fetch("/api/users");
                if (!response.ok) {
                    throw new Error("Request failed");
                }
                const data = await response.json();
                setUsers(data)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false);
            }
        }
        fetchUsers();
    }, []);

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error}</p>

    return (
        <>
            {users.map(user => (
                <div key={user.id}>
                    <h2>user: {user.name}</h2>
                    <p>Email: {user.email}</p>
                </div>
            ))}
        </>
    )
}