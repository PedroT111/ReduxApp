import React from "react"
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
const EditProduct = () => {
    return(
        <Container>
            <Row className="justify-content-center">
                <Col md="8">
                    <Card className="border border-secondary border-3">
                        <CardBody>
                            <h2 className="text-center">Edit Product</h2>
                            <Form>
                                <FormGroup className="mt-4">
                                    <Label>Product Name</Label>
                                    <Input
                                        type="text"
                                        name="name"
                                    />
                                </FormGroup>
                                <FormGroup className="mt-4">
                                    <Label>Price</Label>
                                    <Input
                                        type="number"
                                        name="price"
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