import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./App.css";

import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import SignUpInfo from "../pages/SignUpInfo";
import ProductDetail from "../pages/ProductDetail";
import Home from "../pages/Home";
import Category from "../pages/Category";

import { BrowserRouter, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configStore";

function App() {
    return (
        <React.Fragment>
            <BrowserRouter>
                <ConnectedRouter history={history}>
                    <Header />
                    <Route exact path="/" component={Home} />
                    <Route path="/goods/category/:id" component={Category} />
                    <Route exact path="/goods/:id" component={ProductDetail} />
                    <Route exact path="/user/register" component={SignUp} />
                    <Route exact path="/user/register/info" component={SignUpInfo} />
                    <Route exact path="/user/login" component={Login} />
                    <Footer />
                </ConnectedRouter>
            </BrowserRouter>
        </React.Fragment>
    );
}

export default App;
