import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { login } from 'redux/actionCreators/authActionCreators';
import { AppState } from 'redux/reducers/rootReducer';

interface loginForm {
    email: string;
    password: string;
}

const Login = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { data, status, error } = useSelector(
        (state: AppState) => state.auth
    );
    const [loginData, setLoginData] = useState<loginForm>({} as loginForm);

    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.currentTarget;
        setLoginData((loginData) => ({
            ...loginData,
            [name]: value,
        }));
    };
    useEffect(() => {
        if (data) {
            history.push('/');
        }
    }, [data, history]);

    const submitHandler = (event: React.SyntheticEvent) => {
        event.preventDefault();
        dispatch(login(loginData));
        console.log(loginData);
    };
    return (
        <div className=" mt-5 ">
            <form
                onSubmit={submitHandler}
                className="bg-white p-4 col-5  rounded mx-auto"
            >
                <h3>Login</h3>
                {status === 'error' && <p className="text-danger">{error}</p>}
                {status === 'success' && (
                    <p className="text-success">{'Login Successful'}</p>
                )}
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Enter Email  Address"
                        onChange={inputHandler}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        id="password"
                        placeholder="Enter the password"
                        onChange={inputHandler}
                    />
                </div>

                {status === 'pending' ? (
                    <button className="btn btn-primary" type="button" disabled>
                        <span
                            className="spinner-border spinner-border-sm"
                            role="status"
                            aria-hidden="true"
                        ></span>
                        Loading...
                    </button>
                ) : (
                    <button type="submit" className="btn btn-primary mt-3">
                        Login
                    </button>
                )}
            </form>
        </div>
    );
};

export default Login;
