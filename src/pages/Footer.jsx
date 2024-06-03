import { Link } from "react-router-dom";

const Footer = () => {
    return (  
        <div className="footer">
            <h1>Damn!</h1>
            <nav>
                <Link to={"/about"}>about Us</Link>
                <Link to={"/"}>Home</Link>
            </nav>
        </div>
    );
}
 
export default Footer;