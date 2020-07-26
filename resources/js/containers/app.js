import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Switch, Router, Route } from "react-router-dom";
import store, { history } from "../store";
import { ToastContainer } from "react-toastify";
import Main from "./main";
import { ConnectedRouter } from "connected-react-router";
const App = () => {
    return (
        <Provider store={store}>
            <ToastContainer
                position="bottom-right"
                hideProgressBar={false}
                autoClose={10000}
                closeOnClick
                rtl={false}
                pauseOnHover
                draggable
            />
            <ConnectedRouter history={history}>
                <Switch>
                    <Route path="/" component={Main} />
                </Switch>
            </ConnectedRouter>
        </Provider>
    );
}
export default Main;

if(document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'))
}