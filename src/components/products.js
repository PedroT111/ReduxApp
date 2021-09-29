import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductsAction } from "../core/actions/productActions";
import Product from "./product";
import {Row, Col, Container, Table } from "reactstrap";

const Products = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const getProducts = () => dispatch(getProductsAction());
        getProducts();
    }, []);

    const Products = useSelector(state => state.products.products);
    const error = useSelector(state => state.error);
    const loading = useSelector(state => state.loading);

    return(
        <Container>
            <Row className="justify-content-center">
                <Col lg="10" sm="10" xs="12">
                    <h2 className="text-center">List of Products</h2>
                    <Table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Products.length === 0 ? "No products" :  (
                                    Products.map(p => (
                                        <Product
                                        key={p.id}
                                        product={p}>
                                        </Product>
                                    ))
                                )
                            }                      
                        </tbody>
                    </Table>
                    {error ? <p className="text-danger">There was an error</p> : null}
                    {loading ? <p className="text-danger">Loading...</p> :  null}
                </Col>
            </Row>   
        </Container>
    );
}

export default Products;