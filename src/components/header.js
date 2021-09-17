import React from "react";
import {Link} from "react-router-dom"





const Header = () => {
    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-light justify-content-between bg-dark">
            <div className="conteiner px-5">
                <h1><Link to={"/"} className=" text-light">Products App</Link></h1>
            </div>
            <div className="px-5">
                <Link to={"/product/new"} className="btn btn-light">Agregar Producto</Link>
            </div>
            
                
        
        </nav>
    </div>

    )
  

}

export default Header;