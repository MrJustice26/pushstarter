import React, { useState, useContext } from 'react'
import { Formik, Form, Field } from "formik";
import { Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { TextField } from 'formik-material-ui'
import validateSignInForm from '../../components/Forms/SignInForm';

import { CircularProgress } from '@material-ui/core';

import MAlert from '../../components/Alert'
import { Context } from '../..';


interface IFormikValues {
    email: string;
    password: string;
}

export default function SignIn() {

    const history = useHistory();

    const { store } = useContext(Context);

    const [textError, setTextError] = useState<string>("")
    const [errorCount, setErrorCount] = useState<number>(0)

    async function logIn(data: IFormikValues) {


        const { email, password } = data
        const res = await store.login(email, password) || ''
        if(!res){
            history.push('/home')
        } else {
            setTextError(res)
            setErrorCount(errCount => errCount + 1)
        }
        




    }

    return (
        <Formik
            validateOnChange={false}
            validateOnBlur={false}
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
                        {textError && <MAlert errorCount={errorCount} text={textError} severity="error" />}
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

                            {isSubmitting ? <CircularProgress size={22} /> : "Sign In"}
                        </Button>
                        <div className="registration__link">

                            <span>Don't have an account?</span>
                            <Link to='/register' className="registration__link-link">&nbsp;Register</Link>
                        </div>
                    </div>

                </Form>

            )}

        </Formik>
    );
}

