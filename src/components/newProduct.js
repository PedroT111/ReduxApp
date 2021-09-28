import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {createNewProduct} from "../core/actions/productActions";
import { Row,
         Col,
         Card,
         CardBody,
         Form,
         FormGroup,
         Input, Label, Button, InputGroup, InputGroupText } from "reactstrap";
import { Alert } from 'reactstrap';


const NewProduct = ({history}) => {
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

    const loading = useSelector(state => state.products.loading);
    const error = useSelector(state => state.products.error);

   const addProduct = p => dispatch(createNewProduct(p));

    const onSubmit = (e) => {
        e.preventDefault();
        //create product
        addProduct(product);

        history.push('/');

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
                        {
                            error ? <Alert color="danger" className="mt-3">There was an Error</Alert> : null
                        }
                        {
                            //loading? agregar spinner de carga
                        }
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )



}

export default NewProduct;