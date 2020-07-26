import React, { Component, Suspense, lazy } from "react";
import { Switch, Route } from "react-router";

const Loading = () => <div>Loding.........</div>

class Main extends Component {
    render() {
        return (
            <>
                <Suspense fallback={<Loading />}>
                    <Switch>
                        <Route
                            exact
                            path="/"
                            component={lazy(() => import("./auth/login"))}
                        />
                        <Route
                            exact
                            path="/login"
                            component={lazy(() => import("./auth/login"))}
                        />
                        <Route
                            exact
                            path="/register"
                            component={lazy(() => import("./auth/register"))}
                        />
                        <Route exact path="/dashboard" component={lazy(() => import("./dashboard"))} />
                        <Route
                            component={lazy(() => (
                                <div>Page not found</div>
                            ))}
                        />
                    </Switch>
                </Suspense>
            </>
        );
    }
}

export default Main;