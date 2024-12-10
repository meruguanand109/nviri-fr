import { Link } from "react-router-dom";

export default function Navbar() {
    const handleLogout=()=>{
        localStorage.removeItem("token")
        localStorage.removeItem("name")
        localStorage.removeItem("email")
        localStorage.removeItem("address")
        localStorage.removeItem("contact")
        localStorage.removeItem("role")
        localStorage.removeItem("business_name")
        localStorage.removeItem("specialization")
    }
    return ( 
        <nav className="navbar navbar-expand-lg" style={{ "background": "#ffffff", "padding": "10px" }}>
                <Link className="navbar-brand" to="/">
                    <img src="https://res.cloudinary.com/dyqmnbmxi/image/upload/v1733755803/Screenshot_2024_1209_201527_bkrrlv.png" alt="navbar logo" height={"60px"} />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex flex-row justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link text-black" to="/">Home</Link>
                        {(localStorage.getItem("token")) ?
                            <Link className=" nav-item nav-link" to="/login" onClick={handleLogout}>
                                Logout
                            </Link>
                            :
                            <Link className="nav-item nav-link" to="/login">
                                Login
                            </Link>
                        }
                    </div>
                </div>
            </nav>
            
    )}