import { Link, Outlet } from "react-router-dom";

function   Navigation()
{
    return (
        <div>
            <div>This is a  Navigation page </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    
                    <li>
                        <Link to="/singin"> SignIn </Link>
                    </li>
                    
                    <li>
                        <Link to="/singup"> SignUp </Link>
                    </li>
                     
                    
                    <li>
                        <Link to="/aboutus"> AboutUs </Link>
                    </li>
                </ul>
            </nav>
            <Outlet /> 
        </div>
    )
}
export default Navigation;