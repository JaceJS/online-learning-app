import { NavLink } from "react-router-dom";

const Register = () => {
    return (
        <div className="container min-vh-100 d-flex flex-column align-items-center justify-content-center pt-5">
            <div className="col-md-6">
                <div
                    className="card shadow p-3 mb-5 mx-auto bg-body-tertiary rounded"
                    style={{ maxWidth: "28rem", backgroundColor: "#fff3e8" }}
                >
                    <h3 className="text-center">Register</h3>
                    <div className="card-body">
                        <form action="" method="POST">
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    placeholder="Name"
                                />
                                <label htmlFor="name">Name</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    placeholder="name@example.com"
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

                            <div className="form-floating mb-3">
                                <input
                                    type="tel"
                                    className="form-control"
                                    id="phone"
                                    name="phone"
                                    placeholder="081234567890"
                                />
                                <label htmlFor="phone" className="form-label">
                                    Phone
                                </label>
                            </div>

                            <div className="col-12 mt-3 d-flex justify-content-center">
                                <input
                                    className="btn text-white mt-3"
                                    style={{ backgroundColor: "#742317" }}
                                    type="submit"
                                    value="Register"
                                    name="register"
                                />
                            </div>
                        </form>
                        <small className="d-block mt-3">
                            Already have an account?{" "}
                            <NavLink to="/login">Login</NavLink>
                        </small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
