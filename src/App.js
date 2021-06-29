import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import React, {lazy, Suspense} from "react";
import * as ROUTES from './constants/routes'
import SignUp from "./pages/SignUp";

const Login = lazy(() => import('./pages/Login').then(Login => Login));

function App() {
    return (
        <Router>
            <Suspense fallback={<p>Loading...</p>}>
                <Switch>
                    <Route exact path={ROUTES.LOGIN} component={Login}/>
                    <Route exact path={ROUTES.SIGN_UP} component={SignUp}/>
                </Switch>
            </Suspense>
        </Router>
    );
}

export default App;
