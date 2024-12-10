import { useState } from "react"
import { useNavigate } from "react-router-dom"
export default function User() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const onSubmitLogin = async (event) => {
        event.preventDefault()
        try {
            const response = await fetch("http://localhost:5000/logintechnician", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            })
            const json = await response.json()
            if (json.success) {
                console.log(json)
                localStorage.setItem("token", json.jwtToken)
                localStorage.setItem("name", json.user.name)
                localStorage.setItem("email", json.user.email)
                localStorage.setItem("contact", json.user.contact)
                localStorage.setItem("business_name", json.user.business_name)
                localStorage.setItem("specialization", json.user.specialization)
                localStorage.setItem("role","technician")
                navigate("/")
            } else {
                alert("Enter Valid Credentials")
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <div className="container">
                <h1 className="mb-3">Login As Technician</h1>
                <form className="row form">
                    <label className="input-label" htmlFor="email">Email:</label>
                    {/*
                    alice.johnson@example.com
                    alicePass123
                    johndoe@example.com
                    password123
                    */}
                    <input className="input-box" type="email" id="email" placeholder="Enter Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label className="input-label" htmlFor="password">Password:</label>
                    <input className="input-box" type="password" id="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <div className="d-flex justify-content-space-around">
                        <div>
                            <button onClick={onSubmitLogin} className="btn btn-primary">Login</button>
                        </div>
                        <div>
                            <button className="btn btn-success" onClick={() => navigate("/signup")}>Login as Technician</button>
                        </div>
                    </div>
                </form>
            </div>
        </>

    )
}
