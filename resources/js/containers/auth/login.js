import React, { useState, useEffect } from "react";
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Col,
} from "reactstrap";
import NavHeader from "../components/Navbar";
import Footer from "../components/Footer/index";

const Login = () => {
    const [emailFocus, setEmailFocus] = useState(false);
    const [lastFocus, setLastFocus] = useState(false);
    useEffect(() => {
        document.body.classList.add("login-page");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return () => {
            document.body.classList.remove("login-page");
            document.body.classList.remove("sidebar-collapse");
        };
    }, []);
    return (
        <>
            <NavHeader navType="login"/>
            <div className="page-header clear-filter" filter-color="blue">
                <div
                    className="page-header-image"
                    style={{
                        backgroundImage:
                            "url(" +
                            require("../../../../public/images/img/login.jpg") +
                            ")"
                    }}
                ></div>
                <div className="content">
                    <Container>
                        <Col className="ml-auto mr-auto" md="4">
                            <Card className="card-login card-plain">
                                <Form action="" className="form" method="">
                                    <CardHeader className="text-center">
                                        <div className="logo-container">
                                            <img
                                                alt="Logo"
                                                src={require("../../../../public/images/img/now-logo.png")}
                                            ></img>
                                        </div>
                                    </CardHeader>
                                    <CardBody>
                                        <InputGroup
                                            className={
                                                "no-border" +
                                                (emailFocus
                                                    ? " input-group-focus"
                                                    : "")
                                            }
                                        >
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="now-ui-icons ui-1_email-85"></i>
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input
                                                placeholder="Email..."
                                                type="email"
                                                onFocus={() => setEmailFocus(true)}
                                                onBlur={() => setEmailFocus(false)}
                                            ></Input>
                                        </InputGroup>
                                        <InputGroup
                                            className={
                                                "no-border input-lg" +
                                                (lastFocus
                                                    ? " input-group-focus"
                                                    : "")
                                            }
                                        >
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="now-ui-icons text_caps-small"></i>
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input
                                                placeholder="**********"
                                                type="password"
                                                onFocus={() =>
                                                    setLastFocus(true)
                                                }
                                                onBlur={() =>
                                                    setLastFocus(false)
                                                }
                                            ></Input>
                                        </InputGroup>
                                    </CardBody>
                                    <CardFooter className="text-center">
                                        <Button
                                            block
                                            className="btn-round"
                                            color="info"
                                            href="#pablo"
                                            onClick={e => e.preventDefault()}
                                            size="lg"
                                        >
                                            Login
                                        </Button>
                                        <div className="pull-left">
                                            <h6>
                                                <a
                                                    className="link"
                                                    href="/register"
                                                    // onClick={e =>
                                                    //     e.preventDefault()
                                                    // }
                                                >
                                                    Create Account
                                                </a>
                                            </h6>
                                        </div>
                                    </CardFooter>
                                </Form>
                            </Card>
                        </Col>
                    </Container>
                </div>
                <Footer />
            </div>
        </>
    );
};
export default Login;
