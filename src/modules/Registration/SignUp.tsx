import React from 'react'
import { Formik, Form, Field } from "formik";
import { Button} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { TextField } from 'formik-material-ui'


interface IFormikValues {
    email: string;
    password: string;
    repeatPassword: string;
}

export default function SignUp() {
    return (
        <Formik
            initialValues={{
                email: "",
                password: "",
                repeatPassword: ""
            }}
            validate={(values) => {
                const errors: Partial<IFormikValues> = {};

                // EMAIL
                if (!values.email) {
                    errors.email = "Required";
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
                ) {
                    errors.email = "Invalid email address";
                }

                // PASSWORD
                if (!values.password) {
                    errors.password = "Required";
                } else if (
                    !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i.test(values.password)
                ) {
                    errors.password = "The password is too weak!"
                }

                // REPEAT PASSWORD
                if (values.repeatPassword !== values.password) {
                    errors.repeatPassword = "Passwords doesn't match!"
                }
                else if (!values.repeatPassword) {
                    errors.repeatPassword = "Required"
                }
                else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i.test(values.password)) {
                    errors.repeatPassword = "The password is too weak!"
                }

                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    setSubmitting(false);
                    alert(JSON.stringify(values, null, 2));
                }, 500);
            }}
        >
            {({ submitForm, isSubmitting }) => (
                <Form className="registration__container">
                    <div className="registration__inner">
                        <h1 className="registration__heading">Sign Up</h1>
                        <div className="registration__input">
                            <Field
                                component={TextField}
                                name="email"
                                type="email"
                                label="Email"
                            />
                        </div>
                        <div className="registration__input">
                            <Field
                                component={TextField}
                                type="password"
                                label="Password"
                                name="password"
                            />
                        </div>

                        <div className="registration__input">
                            <Field
                                component={TextField}
                                type="password"
                                label="Repeat password"
                                name="repeatPassword"
                            />
                        </div>

                        <Button
                            variant="contained"
                            color="primary"
                            disabled={isSubmitting}
                            onClick={submitForm}
                        >
                            {isSubmitting ? "Loading..." : 'Create Account'}
                        </Button>
                        <div className="registration__link">

                            <span>Already have an account?</span>
                            <Link to='/signin' className="registration__link-link">&nbsp;Sign in</Link>
                        </div>
                    </div>

                </Form>

            )}

        </Formik>
    );
}


