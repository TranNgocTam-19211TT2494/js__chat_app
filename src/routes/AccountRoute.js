import React from "react";

import Message from "../components/message/Message";


import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

function AccountRoute() {
    return (
        <Router>
            <Route path="/" exact>
                <Redirect to="/chat" />
            </Route>
            <Route path="/chat" exact>
                <Message />
            </Route>
        </Router>
    );
}

export default AccountRoute;
