
interface IFormikValues {
    email: string;
    password: string;
    repeatPassword?: string;
}


function validateSignUpForm(values: IFormikValues) {
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
        // eslint-disable-next-line
        !/^(?=.*[A-Za-z])(?=.*\d)?([A-Za-z\d]?)([#?!@$%&*-]?).{6,18}$/im.test(values.password)
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
}

export default validateSignUpForm;