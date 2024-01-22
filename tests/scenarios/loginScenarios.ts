export const loginScenarios = [
    {
        test_case: 'Attempt to login with a locked user is blocked and an error message is displayed.',
        username: 'locked_out_user',
        password: 'secret_sauce',
        error_message: 'Epic sadface: Sorry, this user has been locked out.',
    },
    {
        test_case: 'Attempt to login with a user that does not exist is blocked and an error message is displayed.',
        username: 'not_a_user',
        password: 'secret_sauce',
        error_message: 'Epic sadface: Username and password do not match any user in this service',
    },
    {
        test_case: 'Attempt to login with an invalid password, user is blocked and an error message is displayed.',
        username: 'standard_user',
        password: 'secret_spice',
        error_message: 'Epic sadface: Username and password do not match any user in this service',
    },
    {
        test_case: 'Attempt to login with an empty username and password, user is blocked and an error message is displayed.',
        username: '',
        password: '',
        error_message: 'Epic sadface: Username is required',
    },
    {
        test_case: 'Attempt to login with an empty password, user is blocked and an error message is displayed.',
        username: 'standard_user',
        password: '',
        error_message: 'Epic sadface: Password is required',
    }
];
