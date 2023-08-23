import { NavLink } from "react-router-dom";

const Login = () => {
    return (
        <div className="container min-vh-100 d-flex flex-column align-items-center justify-content-center">
            <div className="col-md-6">
                <div
                    className="card shadow p-3 mb-5 mx-auto bg-body-tertiary rounded"
                    style={{ maxWidth: "28rem", backgroundColor: "#fff3e8" }}
                >
                    <h3 className="text-center">Login</h3>
                    <div className="card-body">
                        <form action="" method="POST">
                            <div className="form-floating mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    placeholder="name@example.com"
                                    autoFocus
                                />
                                <label htmlFor="email">Email</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    name="password"
                                    placeholder="Password"
                                />
                                <label htmlFor="password">Password</label>
                            </div>

                            <div className="col-12 mt-3 d-flex justify-content-center">
                                <input
                                    className="btn mt-3 text-white"
                                    style={{ backgroundColor: "#742317" }}
                                    type="submit"
                                    value="Login"
                                    name="login"
                                />
                            </div>
                        </form>
                        <small className="d-block mt-3">
                            Dont have an account?
                            <NavLink to="/register">Register</NavLink>
                        </small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
