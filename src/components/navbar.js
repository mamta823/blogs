
import { Link, useLocation } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../components/index.css";
const Navbar = () => {
    let path = useLocation()
    return (
        <>
            <div className="container-fluid d-flex">
                {/* <span className="navbar-brand"><img src="../images/logo.png" alt="logo" /></span> */}
                <Nav className="justify-content-center navbar" >
                    <Nav.Item>
                        <Link className={path.pathname === "/" ? "active" : ""} to="/">Home </Link>
                        <Link className={path.pathname === "/formforpost" ? "active" : ""} to="/formforpost">Addpost </Link>

                        {/* <Link className={path.pathname === "/home" ? "active" : ""} to="/home">HOme </Link> */}
                    </Nav.Item>
                </Nav>
            </div>
        </>
    )
}
export default Navbar