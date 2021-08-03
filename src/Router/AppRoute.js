import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Imagenes from '../components/Imagenes';
import Home  from "../components/Home";
import {Contacto} from '../components/Contacto';
import Inicio from '../components/Inicio'
import React from 'react';


export const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Router>
                    <Route exact path="/" component={Inicio} />
                    <Route exact path="/Imagenes" component={Imagenes} />
                    <Route exact path="/Home" component={Home} />
                    <Route exact path="/Contacto" component={Contacto} />
                </Router >
                <Redirect to="/" />
            </Switch>
        </Router>
    )
}