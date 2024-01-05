import {Outlet} from "react-router-dom";
import Header from "../Header/Header";

const Root = () => {
    return (
        <div>
            <div className=" md:max-w-7xl mx-auto py-10">
                <Header></Header>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;
