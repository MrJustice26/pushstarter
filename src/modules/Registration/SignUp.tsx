
import React from 'react'
import { Formik, Form, Field } from "formik";
import { Button} from '@material-ui/core';

import { Link } from 'react-router-dom';
import { TextField } from 'formik-material-ui'
import axios from 'axios';
import validateSignUpForm from '../../Forms/SignUpForm';

import MAlert from '../../components/Alert'


interface IFormikValues {
    email: string;
    password: string;
    repeatPassword?: string;
}


export default function SignUp() {

    const [textError, setTextError] = React.useState<string>("")

    const register = async (data: IFormikValues): Promise<void>  => {

        const headers = {
            'Access-Control-Allow-Origin': 'http://127.0.0.1:3000',
            'Access-Control-Allow-Credentials': 'true'
        }

        try {
            let res = await axios.post("http://localhost:5000/auth/registration", data, {headers})
            if(res['status'] === 200){
                
            }
        } catch (e) {
            setTextError(e?.response?.data?.message)
        }

    }

    return (
        <Formik
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
                    await register(values)
                    setSubmitting(false);
                }, 500);
            }}
        >
            {({ submitForm, isSubmitting }) => (
                <Form className="registration__container">
                    <div className="registration__inner">
                        <h1 className="registration__heading">Sign Up</h1>
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


