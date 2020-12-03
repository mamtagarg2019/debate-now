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
        }, 
        mobile: {
            required: {
                errorMsg: `Contact number is required`
            },
            length: {
                max: 10,
                errorMsg: `Contact number consists of 10 numbers`
            }
        }, 
        debater_first_name: {
            required: {
                errorMsg: `Debater first name is required`
            }
        }, 
        debater_middle_name: {
            required: {
                errorMsg: `Debater middle name is required`
            }
        },
        debater_last_name: {
            required: {
                errorMsg: `Debater last name is required`
            }
        }
    }, data)
    
    return errors
}
