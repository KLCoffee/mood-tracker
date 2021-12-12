import React from "react";
import {Browser as Router} from 'react-router-dom';
// import { ReactDOM } from "react";
import App from "../App";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <App />
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);