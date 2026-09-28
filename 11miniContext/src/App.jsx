import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import { UserContextProvider } from './contexts/UserContext';

function App() {
  return (
    <UserContextProvider>
      <h1>React with Context Api</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
};

export default App;
