import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";


const Product = ({product}) => {
    const{id, name, price} = product;
    return(
        <tr key={id}>
            <td>{id}</td>
            <td>{name}</td>
            <td>${price}</td>
            <td>
                <Button className=" m-2 px-4 py-2" color="dark"><Link className="text-decoration-none text-light" to ={`/product/edit/${id}`}>Edit</Link></Button>
                <Button className=" m-2 px-4 py-2" color="danger">Delete</Button>
            </td>
        </tr>

    );
}

export default Product;