import React, { Fragment, lazy } from "react";

const Navbar = lazy(() => import("../../Components/Navbar/Navbar.jsx"));
const Login = lazy(() => import("../../Components/Login/Login.jsx"));

function LoginPage() {
    return <>
        <Fragment>
            <Navbar></Navbar>
            <Login></Login>
        </Fragment>
    </>
}

export default LoginPage
