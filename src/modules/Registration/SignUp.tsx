
import React, { useState, useContext } from 'react'
import { Formik, Form, Field } from "formik";
import { Button } from '@material-ui/core';

import { Link } from 'react-router-dom';
import { TextField } from 'formik-material-ui'
import validateSignUpForm from '../../components/Forms/SignUpForm';

import MAlert from '../../components/Alert'
import { Context } from '../..';

import { useHistory } from "react-router-dom";

import { CircularProgress } from '@material-ui/core';

interface IFormikValues {
    email: string;
    password: string;
    repeatPassword?: string;
}


export default function SignUp() {
    const history = useHistory();

    const { store } = useContext(Context)

    const [textError, setTextError] = useState<string>("")

    const [isRegistered, setIsRegistered] = useState<boolean>(false)
    const [errorCount, setErrorCount] = useState<number>(0)

    const register = async (data: IFormikValues): Promise<void> => {

        const { email, password } = data
        const res = await store.registration(email, password) || ''
        if(!res){
            setIsRegistered(!isRegistered)
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
                password: "",
                repeatPassword: ""
            }}
            validate={(values: IFormikValues) => {
                return validateSignUpForm(values)
            }}
            onSubmit={(values: IFormikValues, { setSubmitting }) => {
                setTimeout(async () => {
                    let res = await register(values)
                    console.log(res)
                    setSubmitting(false);

                    
                }, 500);
            }}
        >
            {({ submitForm, isSubmitting }) => (
                <Form className="registration__container">
                    {!isRegistered ? (<div className="registration__inner">
                        <h1 className="registration__heading">Sign Up</h1>
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
                            className="registration__button"
                        >
                            {isSubmitting ? <CircularProgress size={22} />  : "Register"}
                        </Button>


                        <div className="registration__link">

                            <span>Already have an account?</span>
                            <Link to='/login' className="registration__link-link">&nbsp;Log in</Link>
                        </div>

                        
                    </div>
                    ) : (
                    <div className="registration__info">
                        <h2>Verification link has been sent!</h2>
                        <h4>Please check your email to procceed registration</h4>
                    </div>
                    )}

                </Form>

            )}

        </Formik>
    );
}


