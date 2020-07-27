import React, { useState } from "react";
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row
} from "reactstrap";
import * as Yup from "yup";
import { Formik } from "formik";

const registerSchema = Yup.object({
    email: Yup.string()
        .email("Invalid email")
        .required("Email is requiured"),
    password: Yup.string()
        .required("Password is required")
        .min(6, "Atleast two 6 characters"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords don't match")
        .min(6, "Atleast two 6 characters")
        .required("Confirm password is required"),
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required")
});

const SignUp = () => {
    const [firstFocus, setFirstFocus] = useState(false); 
    const [lastFocus, setLastFocus] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false)
    const [confPasswordFocus, setConfPasswordFocus] = useState(false)
    const [emailFocus, setEmailFocus] = useState(false);
    return (
        <>
            <div
                className="section section-signup"
                style={{
                    backgroundImage:
                        "url(" +
                        require("../../../../public/images/img/login.jpg") +
                        ")",
                    backgroundSize: "cover",
                    backgroundPosition: "top center",
                    minHeight: "700px"
                }}
            >
                <Container>
                    <Row>
                        <Card
                            className="card-signup"
                            data-background-color="blue"
                        >
                            <Formik
                                initialValues={{
                                    password: "",
                                    confirmPassword: "",
                                    firstName: "",
                                    lastName: "",
                                    email: ""
                                }}
                                validationSchema={registerSchema}
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
                                    <Form role="form" onSubmit={handleSubmit}>
                                        <CardHeader className="text-center">
                                            <CardTitle
                                                className="title-up"
                                                tag="h3"
                                            >
                                                Sign Up
                                            </CardTitle>
                                            <div className="social-line">
                                                <Button
                                                    className="btn-neutral btn-icon btn-round"
                                                    color="facebook"
                                                    href="#pablo"
                                                    onClick={e =>
                                                        e.preventDefault()
                                                    }
                                                >
                                                    <i className="fab fa-facebook-square"></i>
                                                </Button>
                                                <Button
                                                    className="btn-neutral btn-icon btn-round"
                                                    color="twitter"
                                                    href="#pablo"
                                                    onClick={e =>
                                                        e.preventDefault()
                                                    }
                                                    size="lg"
                                                >
                                                    <i className="fab fa-twitter"></i>
                                                </Button>
                                                <Button
                                                    className="btn-neutral btn-icon btn-round"
                                                    color="google"
                                                    href="#pablo"
                                                    onClick={e =>
                                                        e.preventDefault()
                                                    }
                                                >
                                                    <i className="fab fa-google-plus"></i>
                                                </Button>
                                            </div>
                                        </CardHeader>
                                        <CardBody>
                                            <InputGroup
                                                className={
                                                    "no-border" +
                                                    (firstFocus
                                                        ? " input-group-focus"
                                                        : "")
                                                }
                                            >
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText>
                                                        <i className="now-ui-icons users_circle-08"></i>
                                                    </InputGroupText>
                                                </InputGroupAddon>
                                                <Input
                                                    id="firstName"
                                                    name="firstName"
                                                    value={values.firstName}
                                                    onChange={handleChange}
                                                    placeholder="First Name..."
                                                    type="text"
                                                    onFocus={() =>
                                                        setFirstFocus(true)
                                                    }
                                                    onBlur={handleBlur}
                                                ></Input>
                                                {touched.firstName &&
                                                errors.firstName ? (
                                                    <div className="text-danger mt-1 sm-font">
                                                        {errors.firstName}
                                                    </div>
                                                ) : null}
                                            </InputGroup>
                                            <InputGroup
                                                className={
                                                    "no-border" +
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
                                                    id="lastName"
                                                    value={values.lastName}
                                                    onChange={handleChange}
                                                    name="lastName"
                                                    placeholder="Last Name..."
                                                    type="text"
                                                    onFocus={() =>
                                                        setLastFocus(true)
                                                    }
                                                    onBlur={handleBlur}
                                                ></Input>
                                                {touched.lastName &&
                                                errors.lastName ? (
                                                    <div className="text-danger mt-1 sm-font">
                                                        {errors.lastName}
                                                    </div>
                                                ) : null}
                                            </InputGroup>
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
                                                    id="email"
                                                    value={values.email}
                                                    onChange={handleChange}
                                                    name="email"
                                                    placeholder="Email..."
                                                    type="email"
                                                    onFocus={() =>
                                                        setEmailFocus(true)
                                                    }
                                                    onBlur={handleBlur}
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
                                                    (passwordFocus
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
                                                    id="password"
                                                    onChange={handleChange}
                                                    value={values.password}
                                                    name="password"
                                                    placeholder="password"
                                                    type="password"
                                                    onFocus={() =>
                                                        setPasswordFocus(true)
                                                    }
                                                    onBlur={handleBlur}
                                                ></Input>
                                                {touched.password &&
                                                errors.password ? (
                                                    <div className="text-danger mt-1 sm-font">
                                                        {errors.password}
                                                    </div>
                                                ) : null}
                                            </InputGroup>
                                            <InputGroup
                                                className={
                                                    "no-border input-lg" +
                                                    (confPasswordFocus
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
                                                    id="confirmPassword"
                                                    name="confirmPassword"
                                                    value={
                                                        values.confirmPassword
                                                    }
                                                    onChange={handleChange}
                                                    placeholder="Confirm Password"
                                                    type="password"
                                                    onFocus={() =>
                                                        setConfPasswordFocus(
                                                            true
                                                        )
                                                    }
                                                    onBlur={handleBlur}
                                                ></Input>
                                                {touched.confirmPassword &&
                                                errors.confirmPassword ? (
                                                    <div className="text-danger mt-1 sm-font">
                                                        {errors.confirmPassword}
                                                    </div>
                                                ) : null}
                                            </InputGroup>
                                        </CardBody>
                                        <CardFooter className="text-center">
                                            <Button
                                                className="btn-neutral btn-round"
                                                color="info"
                                                type="submit"
                                                disabled={isSubmitting}
                                                size="lg"
                                            >
                                                Register
                                            </Button>
                                        </CardFooter>
                                        <div className="col text-left mb-4">
                                            <a
                                                type="btn"
                                                href="/login"
                                                className="btn-round btn-white"
                                                color="default"
                                                size="md"
                                            >
                                                Have an Account
                                            </a>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </Card>
                    </Row>
                </Container>
            </div>
        </>
    );
}
export default SignUp;