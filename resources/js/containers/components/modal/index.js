import React, { useState } from "react";
import { 
    Button,
    Modal,
    Form,
    FormGroup,
    Input
 } from "reactstrap";
 import * as Yup from "yup";
 import { Formik } from "formik";

 const expenseSchema = Yup.object({
     budget: Yup.number()
        .required("budget required"),
    expenseDescription: Yup.string()
        .required("Description is required")
 });

const CustomModal = ({btnName, btnColor, iconName}) => {
    const [modalLive, setModalLive] = useState(false);
    return (
        <>
            <Button
                color={btnColor}
                type="button"
                onClick={() => setModalLive(true)}
            >
                <i className={iconName} aria-hidden="true"></i> {btnName}
            </Button>
            <Modal
                toggle={() => setModalLive(false)}
                isOpen={modalLive}
                backdrop="static"
            >
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLiveLabel">
                        Add Expenses
                    </h5>
                    <button
                        aria-label="Close"
                        className="close"
                        type="button"
                        onClick={() => setModalLive(false)}
                    >
                        <span aria-hidden={true}>×</span>
                    </button>
                </div>
                <Formik
                    initialValues={{ budget: "", expenseDescription: "" }}
                    validationSchema={expenseSchema}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            console.log(values);
                            setSubmitting(false);
                        }, 4000);
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
                            <div className="modal-body">
                                <FormGroup>
                                    <label htmlFor="budget">Expense Budget</label>
                                    <Input
                                        name="budget"
                                        id="budget"
                                        value={values.budget}
                                        onChange={handleChange}
                                        onBlur={ handleBlur }
                                        bsSize="sm"
                                        placeholder="Eg 200000"
                                        type="number"
                                    ></Input>
                                    {touched.budget &&
                                        errors.budget ? (
                                            <div className="text-danger mt-1 sm-font">
                                                {errors.budget}
                                            </div>
                                        ) : null
                                    }
                                </FormGroup>
                                <FormGroup>
                                    <label htmlFor="expenseDescription">
                                        Expense Description
                                    </label>
                                    <Input
                                        id="expenseDescription"
                                        name="expenseDescription"
                                        placeholder="Enter Description"
                                        value={values.expenseDescription}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        rows="3"
                                        bsSize="sm"
                                        type="textarea"
                                    ></Input>
                                        {touched.expenseDescription &&
                                            errors.expenseDescription ? (
                                                <div className="text-danger mt-1 sm-font">
                                                    {errors.expenseDescription}
                                                </div>
                                            ) : null
                                        }
                                </FormGroup>
                            </div>
                            <div className="modal-footer">
                                <Button
                                    color="secondary"
                                    type="button"
                                    onClick={() => setModalLive(false)}
                                >
                                    Close
                                </Button>
                                <Button
                                    color="primary"
                                    type="button"
                                    type="submit"
                                    disabled={isSubmitting}
                                >
                                    Save changes
                                </Button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </Modal>
        </>
    );
}

export default CustomModal;