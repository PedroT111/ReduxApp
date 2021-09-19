import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {createNewProduct} from "../core/actions/productActions";
import {Row, Col, Card, CardBody, Form, FormGroup, Input, Label, Button, InputGroup, InputGroupText } from "reactstrap";


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
        <Row className="justify-content-center">
            <Col md="8">
                <Card className="border border-secondary border-3">
                    <CardBody>
                        <h2 className="text-center">Add New Product</h2>
                        <Form onSubmit={onSubmit}>
                            <FormGroup>
                                <Label>Product Name</Label>
                                <Input
                                type="text"
                                name="name"
                                onChange={onChange}/>
                            </FormGroup>
                            <FormGroup>
                                <Label></Label>
                                <InputGroup>
                                    <InputGroupText>$</InputGroupText>
                                    <Input
                                    className="form-control"
                                    type="number"
                                    name="price"
                                    onChange={onChange}/>
                                </InputGroup>     
                            </FormGroup>
                            <Button className="outline-secondary font-weight-bold w-100 d-block mt-4">Add Product</Button>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )



}

export default NewProduct;