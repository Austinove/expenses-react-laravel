import React, { Component } from "react";
import { Container, Row, Table, Card, CardBody, FormGroup, Label, Input, Form, Button } from "reactstrap";
import NavHeader from "../components/Navbar";
import Datetime from "react-datetime";
import CustomModal from "../components/modal";

class Dashboard extends Component {
    render() {
        return (
            <>
                <NavHeader navtype="dashboard" />
                <Container>
                    <Row className="top-card">
                        <Card>
                            <CardBody>
                                <strong>Expences Table</strong>
                                <div className="pull-right">
                                    <CustomModal iconName="fa fa-plus" btnName="Add Expense" btnColor="info"/>
                                </div>
                            </CardBody>
                        </Card>
                    </Row>
                    <Row>
                        <Form className="form-inline mb-2">
                            <FormGroup>
                                <Label className="mr-2">Select Month</Label>
                                <Datetime dateFormat="YYYY-MM" timeFormat={false} inputProps={{ placeholder: "Select Month" }} />
                            </FormGroup>
                        </Form>
                    </Row>
                    <Row>
                        <Table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Description</th>
                                    <th>Budget</th>
                                    <th>F/M status</th>
                                    <th>C/M status</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Cause if you do, it can be yours for FREE. Hit the button below to navigate to Creative Tim or Invision where you can find the kit in HTML or Sketch/PSD format. Start a new project or give an old Bootstrap project a new look!</td>
                                    <td>20000000</td>
                                    <td>
                                        <FormGroup check>
                                            <Label check>
                                                <Input defaultValue="" type="checkbox"></Input>
                                                {" "}
                                                <span className="form-check-sign">
                                                    <span className="check"></span>
                                                </span>
                                            </Label>
                                        </FormGroup>
                                    </td>
                                    <td>
                                        <FormGroup check disabled >
                                            <Label check>
                                                <Input defaultChecked={true} defaultValue="" disabled type="checkbox"></Input>
                                                {" "}
                                                <span className="form-check-sign">
                                                    <span className="check"></span>
                                                </span>
                                            </Label>
                                        </FormGroup>
                                    </td>
                                    <td>7/25/2020</td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Cause if you do, it can be yours for FREE. Hit the button below to navigate to Creative Tim or Invision where you can find the kit in HTML or Sketch/PSD format. Start a new project or give an old Bootstrap project a new look!</td>
                                    <td>20000000</td>
                                    <td>
                                        <FormGroup check>
                                            <Label check>
                                                <Input defaultValue="" type="checkbox"></Input>
                                                {" "}
                                                <span className="form-check-sign">
                                                    <span className="check"></span>
                                                </span>
                                            </Label>
                                        </FormGroup>
                                    </td>
                                    <td>
                                        <FormGroup check disabled>
                                            <Label check>
                                                <Input defaultChecked={true} defaultValue="" disabled type="checkbox"></Input>
                                                {" "}
                                                <span className="form-check-sign">
                                                    <span className="check"></span>
                                                </span>
                                            </Label>
                                        </FormGroup>
                                    </td>
                                    <td>7/25/2020</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Cause if you do, it can be yours for FREE. Hit the button below to navigate to Creative Tim or Invision where you can find the kit in HTML or Sketch/PSD format. Start a new project or give an old Bootstrap project a new look!</td>
                                    <td>20000000</td>
                                    <td>
                                        <FormGroup check>
                                            <Label check>
                                                <Input defaultValue="" type="checkbox"/>
                                                <span className="form-check-sign">
                                                    <span className="check"></span>
                                                </span>
                                            </Label>
                                        </FormGroup>
                                    </td>
                                    <td>
                                        <FormGroup check>
                                            <Label check>
                                                <Input defaultValue="" type="checkbox"/>
                                                {" "}
                                                <span className="form-check-sign">
                                                    <span className="check"></span>
                                                </span>
                                            </Label>
                                        </FormGroup>
                                    </td>
                                    <td>7/25/2020</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Row>
                </Container>
            </>
        )
    }
}

export default Dashboard;
