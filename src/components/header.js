import React from "react";
import {Link} from "react-router-dom";
import { Navbar, Button } from "reactstrap";



const Header = () => {
    return(
        <div>
            <Navbar className="navbar-expand-lg bg-light justify-content-between bg-dark">
                <div className="conteiner px-5">
                    <h1><Link to={"/"} className=" text-light">Products App</Link></h1>
                </div>
                <div className="px-5">
                    <Button outline className="px-3 py-2"><Link className="text-light" to="/product/new">Add Product</Link></Button>   
                </div>
            </Navbar>
        </div>
    );
};
export default Header;

