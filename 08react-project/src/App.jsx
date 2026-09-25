import { useState, useEffect } from 'react'
import './App.css'
import User from './components/User';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchUsers() {
      try {
        const data = await new Promise((resolve) => {
          setTimeout(() => {
            resolve([
              { _id: "1", name: "Nazim", email: "nazim@example.com" },
              { _id: "2", name: "Ahmed", email: "ahmed@example.com" }
            ])
          }, 1000);
        })
        
        setUsers(data);
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);

  const filteredUser = users.filter(user => user.name.toLowerCase().includes(search.toLowerCase()));

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>
  return (
    <>
      <h1>Hi from react app</h1>

      <input type="text"
        value={search}
        placeholder='Search user...'
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredUser.map(user => (
        <User key={user._id} user={user} />
      ))}
    </>
  )
}

export default App
