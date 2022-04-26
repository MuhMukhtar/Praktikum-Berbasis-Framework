import React, { Component } from "react";
import Produk from "../marketplace/Produk";
import Profil from "../Marketplace/Profil";
import Cart from "./cart";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class Marketplace extends Component {
    render() {
        return (
            <div>
                <Router>
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">Navbar</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#">Features</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#">Pricing</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </nav>
                    <Switch>
                        <Route exact path="/"><Home /></Route>
                        <Route path="/profil"><Profils /></Route>
                        <Route path="/cart"><Carts /></Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default Marketplace;

function Navigation() {
    return (
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link" aria-current="page">Home</Link>
                </li>
                {/* <li className="nav-item">
                    <Link to="/cart" className="nav-link">Cart</Link>
                </li>
                <li className="nav-item">
                    <Link to="/profil" className="nav-link">Profil</Link>
                </li> */}
            </ul>
        </div>
    );
}

function Home() {
    return (
        <div><Produk /></div>
    );
}

function Profils() {
    return (
        <div>
            <Profil />
        </div>
    );
}

function Carts() {
    return (
        <div>
            <Cart />
        </div>
    )
}

