import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "reactstrap";
import { useDispatch } from "react-redux";
import { deleteProductAction, getProductEditAction } from "../core/actions/productActions";
import Swal from "sweetalert2";


const Product = ({product}) => {
    const{id, name, price} = product;
    const dispatch = useDispatch();
    const history = useHistory();

    const confirmDeleteProduct = (id) => {
        Swal.fire({
            title:"Are you sure?",
            text:"You won't be able to revert this",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete product"
        }).then((result) => {
            if(result.value){
                //Action
                dispatch(deleteProductAction(id));
            }
        });
    }

    const edit = (product) => {
        dispatch(getProductEditAction(product));
        history.push(`/product/edit/${product.id}`)
    }
    return(
        <tr key={id}>
            <td>{id}</td>
            <td>{name}</td>
            <td>${price}</td>
            <td>
                <Button 
                className=" m-2 px-4 py-2"
                color="dark"
                type="button"
                onClick={() => edit(product)}>
                    Edit
                </Button>
                <Button 
                 className=" m-2 px-4 py-2"
                 color="danger"
                 onClick={() => confirmDeleteProduct(id)}> Delete </Button>
            </td>
        </tr>

    );
}

export default Product;