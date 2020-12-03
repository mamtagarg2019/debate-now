import microValidator from 'micro-validator' 

export const validate = (data) => {
    const errors = microValidator.validate({
        email: {
            required: {
                errorMsg: `Email is required`
            },
            email: {
                errorMsg: `Enter a valid email`
            }
        },
        password: {
            required: {
                errorMsg: `Password is required`
            },
            regex: {
                pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8}$/,
                errorMsg: 'Please enter a valid password'
            }
        }
    }, data)
    
    return errors
}