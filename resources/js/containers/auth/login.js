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
import * as Yup from "yup";
import { Formik } from "formik";
import NavHeader from "../components/Navbar";
import Footer from "../components/Footer/index";

const loginSchema = Yup.object({
    email: Yup.string()
    .email("Invalid email")
    .required("Email is requiured"),
    password: Yup.string().required("Password is required")
});

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
            <NavHeader navType="login" />
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
                                <Formik
                                    initialValues={{ email: "", password: "" }}
                                    validationSchema={loginSchema}
                                    onSubmit={(values, { setSubmitting }) => {
                                        setTimeout(() => {
                                            console.log(values);
                                            setSubmitting(false);
                                        }, 400);
                                    }}
                                >
                                    {({
                                        values,
                                        errors,
                                        touched,
                                        handleChange,
                                        handleBlur,
                                        handleSubmit,
                                        isSubmitting
                                    }) => (
                                        <Form
                                            role="form"
                                            onSubmit={handleSubmit}
                                        >
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
                                                        required
                                                        placeholder="Email..."
                                                        value={values.email}
                                                        name="email"
                                                        id="email"
                                                        type="email"
                                                        onChange={handleChange}
                                                        onFocus={() =>
                                                            setEmailFocus(true)
                                                        }
                                                        onBlur={ handleBlur }
                                                    ></Input>
                                                    {touched.email &&
                                                    errors.email ? (
                                                        <div className="text-danger mt-1 sm-font">
                                                            {errors.email}
                                                        </div>
                                                    ) : null}
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
                                                        required
                                                        name="password"
                                                        value={values.password}
                                                        placeholder="**********"
                                                        type="password"
                                                        onChange={handleChange}
                                                        onFocus={() =>
                                                            setLastFocus(true)
                                                        }
                                                        onBlur={ handleBlur }
                                                    ></Input>
                                                    {touched.password &&
                                                    errors.password ? (
                                                        <div className="text-danger mt-1 sm-font">
                                                            {errors.password}
                                                        </div>
                                                    ) : null}
                                                </InputGroup>
                                            </CardBody>
                                            <CardFooter className="text-center">
                                                <Button
                                                    block
                                                    className="btn-round"
                                                    color="info"
                                                    type="submit"
                                                    disabled={isSubmitting}
                                                    size="lg"
                                                >
                                                    Login
                                                </Button>
                                                <div className="pull-left">
                                                    <h6>
                                                        <a
                                                            className="link"
                                                            href="/register"
                                                        >
                                                            Create Account
                                                        </a>
                                                    </h6>
                                                </div>
                                            </CardFooter>
                                        </Form>
                                    )}
                                </Formik>
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
