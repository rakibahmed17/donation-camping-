import {NavLink} from "react-router-dom";
import Logo from "../Logo/Logo";
const Header = () => {
    return (
        <div>
            <nav className="flex justify-between shadow-md px-3">
                <Logo></Logo>
                <ul className="flex gap-4">
                    <li>
                        <NavLink
                            to="/"
                            className={({isActive, isPending}) =>
                                isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/Donation"
                            className={({isActive, isPending}) =>
                                isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                            }
                        >
                            Donation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/Statistics"
                            className={({isActive, isPending}) =>
                                isPending ? "" : isActive ? "text-red-500 underline" : ""
                            }
                        >
                            Statistics
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
