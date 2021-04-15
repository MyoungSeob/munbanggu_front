import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./App.css";

import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import SignUpInfo from "../pages/SignUpInfo";
import ProductDetail from "../pages/ProductDetail";
import Home from "../pages/Home";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configstore";

function App() {
    return (
        <React.Fragment>
            <BrowserRouter>
                <ConnectedRouter history={history}>
                    <Header />
                    <Route exact path="/" component={Home} />
                    <Route path="/goods/:id" component={ProductDetail} />
                    <Route path="/user/register" component={SignUp} />
                    <Route path="/user/register/info" component={SignUpInfo} />
                    <Route path="/user/login" component={Login} />
                    <Footer />
                </ConnectedRouter>
            </BrowserRouter>
        </React.Fragment>
    );
}

export default App;
