import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

function Signup(props) {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [addUser] = useMutation(ADD_USER);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const mutationResponse = await addUser({
            variables: {
                email: formState.email,
                password: formState.password,
                firstName: formState.firstName,
                lastName: formState.lastName,
            },
        });
        const token = mutationResponse.data.addUser.token;
        Auth.login(token);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    return (
        <div className="d-flex flex-column p-2 m-0 display-6 mt-5">

            <h1 className="text-center">Signup</h1>
            <form className="m-auto mt-5" onSubmit={handleFormSubmit}>
                <div className="p-2">
                    <label className="p-2" htmlFor="firstName">First Name:</label>
                    <input
                        placeholder="First"
                        name="firstName"
                        type="firstName"
                        id="firstName"
                        onChange={handleChange}
                    />
                </div>
                <div className="p-2">
                    <label className="p-2" htmlFor="lastName">Last Name:</label>
                    <input
                        placeholder="Last"
                        name="lastName"
                        type="lastName"
                        id="lastName"
                        onChange={handleChange}
                    />
                </div>
                <div className="p-2">
                    <label className="p-2" htmlFor="email">Email:</label>
                    <input
                        placeholder="youremail@test.com"
                        name="email"
                        type="email"
                        id="email"
                        onChange={handleChange}
                    />
                </div>
                <div className="p-2">
                    <label className="p-2" htmlFor="pwd">Password:</label>
                    <input
                        placeholder="******"
                        name="password"
                        type="password"
                        id="pwd"
                        onChange={handleChange}
                    />
                </div>
                <div className="text-center flex-row flex-end">
                    <button className="btn btn-dark mb-4 btn-lg" type="submit">Submit</button>
                </div>
            </form>
            </div>
    );
}

export default Signup;
