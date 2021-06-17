import React from 'react'
import './Registration.scss'
import { Formik, Form, Field } from "formik";
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { TextField } from 'formik-material-ui'


interface IFormikValues {
    email: string;
    password: string;
}

export default function SignIn() {
    return (
        <Formik
            initialValues={{
                email: "",
                password: ""
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
                if(!values.password) {
                    errors.password = "Write a password";
                } else if(
                    !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/i.test(values.password)
                ) {
                    errors.password = "The password is too easy"
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
                        <h1 className="registration__heading">Sign In</h1>
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

                        <Button
                            variant="contained"
                            color="primary"
                            disabled={isSubmitting}
                            onClick={submitForm}
                        >
                            Sign In
                        </Button>
                        <div className="registration__link">

                        <span>Don't have an account?</span>
                        <Link to='/signup' className="registration__link-link">&nbsp;Sign up</Link>
                    </div>
                    </div>
                    
                </Form>

            )}

        </Formik>
    );
}

