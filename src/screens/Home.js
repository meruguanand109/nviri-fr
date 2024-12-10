import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

export default function Home() {
    const [searchInput, setSearchInput] = useState("")
    const [data, setData] = useState(null)
    const [searchResults,setSearchResults]=useState(null)
    useEffect(() => {
        fetch('http://localhost:5000/getdata')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
    }, [])
    const onSearch = async () => {
        console.log(data)
        const results=data.filter(each=>(
            each.specialization.includes(searchInput)
        ))
        setSearchResults(results)
    }
    return (
        <>
            <Navbar />
            <div className="home">
                <h1>Search Bar</h1>
                <input type="text" value={searchInput} className="input-box" onChange={(e) => { setSearchInput(e.target.value) }} placeholder="enter service eg. Mobile Repair" />
                <button className="btn btn-secondary" onClick={onSearch}>Search</button>
                <ol className="ul">
                    <h1 className="li">Technicians Available</h1>
                    {searchResults===null?"":searchResults.map(each=>(
                        <li className="li">
                            <h3>{each.name}</h3>
                            <p>{each.business_name}</p>
                            <p>{each.specialization}</p>
                            <p>{each.contact}</p>
                        </li>
                    ))}
                </ol>
            </div>
        </>
    )
}
