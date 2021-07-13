
interface IFormikValues {
    email: string;
    password: string;
}
function validateSignInForm(values: IFormikValues) {
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
    }
    return errors;
}

export default validateSignInForm;