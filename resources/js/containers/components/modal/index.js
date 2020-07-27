import React, { useState } from "react";
import { 
    Button,
    Modal,
    Form,
    FormGroup,
    Input
 } from "reactstrap";

const CustomModal = ({btnName, btnColor, iconName}) => {
    const [modalLive, setModalLive] = useState(false);
    return(
        <>
            <Button 
                color={btnColor}
                type="button"
                onClick={() => setModalLive(true)}
            >
                <i className={iconName} aria-hidden="true"></i>{" "}
                {btnName}
            </Button>
            <Modal toggle={() => setModalLive(false)} isOpen={modalLive} backdrop="static">
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
                <div className="modal-body">
                    <Form>
                        <FormGroup>
                            <label htmlFor="budget">Expense Budget</label>
                            <Input
                                id="budget"
                                size="sm"
                                placeholder="Eg 200000"
                                type="number"
                            ></Input>
                        </FormGroup>
                        <FormGroup>
                            <label htmlFor="expenseDescription">
                                Expense Description
                            </label>
                            <Input
                                id="expenseDescription"
                                placeholder="Enter Description"
                                rows="3"
                                size="sm"
                                type="textarea"
                            ></Input>
                        </FormGroup>
                    </Form>
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
                        // onClick={() => setModalLive(false)}
                    >
                        Save changes
                    </Button>
                </div>
            </Modal>
        </>
    )
}

export default CustomModal;