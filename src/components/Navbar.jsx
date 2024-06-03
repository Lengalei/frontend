import { Link } from "react-router-dom";

const Navbar = () => {
    return (  
        <>
            <nav className="navbar">
                <div className="logo">
                    <img src="" alt="" />
                </div>

                <ul>
                    <Link className="links" to={"/"}>Home</Link>
                    <Link className="links" to={"/about"}>About</Link>
                    <Link className="links" to={"/contact"}>Contact Us</Link>
                    <Link className="links" to={"/services"}>Services</Link>
                    <Link className="links" to={"/blog"}>Blog</Link>
                    
                </ul>

                <a href=""><button>Login</button></a>
            </nav>
            </>
    );
}
 
export default Navbar;