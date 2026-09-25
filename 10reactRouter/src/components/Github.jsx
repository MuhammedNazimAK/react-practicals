import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"

export default function GitHub() {
    const data = useLoaderData();
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/MuhammedNazimAK')
    //     .then(response => response.json())
    //     .then(data => setData(data));
    // }, [])
    return (
        <>
            <div className="bg-slate-600 p-4">
                <p>Github Count: {data.followers}</p> 
                <img src={data.avatar_url} alt="GitHub Picture" width={200} />
            </div>
        </>
    )
}

export const loadGitHubData = async () => {
    const response = await fetch('https://api.github.com/users/MuhammedNazimAK')
    return response.json();
}