import React from 'react'
import { Formik, Form, Field } from "formik";
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { TextField } from 'formik-material-ui'
import validateSignInForm from '../../Forms/SignInForm';
import axios from 'axios';

import MAlert from '../../components/Alert'


interface IFormikValues {
    email: string;
    password: string;
}

export default function SignIn() {


    const [textError, setTextError] = React.useState<string>("")

    async function logIn(data: IFormikValues) {

        try {
            let res = await axios.post("http://localhost:5000/api/login", data)
            console.log(res)
        } catch (e) {
            setTextError(e?.response?.data?.message)
        }

    }

    return (
        <Formik
            initialValues={{
                email: "",
                password: ""
            }}
            validate={(values: IFormikValues) => {
                return validateSignInForm(values)
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(async () => {
                    setSubmitting(false);
                    await logIn(values)
                }, 500);
            }}
        >
            {({ submitForm, isSubmitting }) => (
                <Form className="registration__container">
                    <div className="registration__inner">
                        <h1 className="registration__heading">Sign In</h1>
                        {textError && <MAlert text={textError} severity="error"/>}
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
                            className="registration__button"
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

