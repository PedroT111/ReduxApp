import React, {useEffect, useState} from "react"
import { Button,
         CardBody,
         Container,
         Form,
         FormGroup,
         Input,
         Label,
         Row,
         Col,
         Card } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { editProductAction } from "../core/actions/productActions";

const EditProduct = ({history}) => {
    const [product, setProduct] = useState({
        name: "",
        price:0,
    });

    const dispatch = useDispatch();
    const productEdit = useSelector(state => state.products.editProduct);

    useEffect(() => {
        setProduct(productEdit);
    }, [productEdit]);

    if(!productEdit){
        Swal.fire("Error");
        history.push("/");
        return null;
    }
    const {name, price} = productEdit;

    const onChange= (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    };

    const onSubmit = (e) => {
        e.preventDefault()

        dispatch(editProductAction(product));

        setTimeout(() => {
            history.push("/")
        }, 2000);
    }
    return(
        <Container>
            <Row className="justify-content-center">
                <Col md="8">
                    <Card className="border border-secondary border-3">
                        <CardBody>
                            <h2 className="text-center">Edit Product</h2>
                            <Form onSubmit={onSubmit}>
                                <FormGroup className="mt-4">
                                    <Label>Product Name</Label>
                                    <Input
                                        type="text"
                                        name="name"
                                        defaultValue={name}
                                        onChange={onChange}
                                    />
                                </FormGroup>
                                <FormGroup className="mt-4">
                                    <Label>Price</Label>
                                    <Input
                                        type="number"
                                        name="price"
                                        defaultValue={price}
                                        onChange={onChange}
                                    />       
                                </FormGroup>
                                <Button className="w-100 mt-4">Edit Product</Button>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default EditProduct;