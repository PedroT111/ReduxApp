import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {createNewProduct} from "../core/actions/productActions";



const NewProduct = () => {

    const[product, setProduct]= useState({
        name: "",
        price: ""
    });
    const onChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });
    };

    const dispatch = useDispatch();
   const addProduct = p => dispatch(createNewProduct(p));

    const onSubmit = (e) => {
        e.preventDefault();


        //create product
        addProduct(product);

    }
    return(
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card border border-secondary border-3">
                    <div className="card-body">
                        <h2 className="text-center">Add New Product</h2>

                        <form onSubmit={onSubmit}> 
                            <div className="form-group">
                            <label className="col-form-label">Product Name</label>
                            <input 
                            className="form-control"
                            type="text"
                            name="name"
                            onChange={onChange}
                            />
                            </div>
                            <div className="form-group">
                            <label className="col-form-label">Price</label>
                            <div class="input-group">
                                <span class="input-group-text">$</span>
                                <input 
                                className="form-control"
                                type="number"
                                name="price"
                                onChange={onChange}
                                />
                            </div>
                            
                            </div> 

                            <button className="btn btn-outline-secondary font-weight-bold w-100 d-block mt-4">Add Product</button>                           
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )



}

export default NewProduct;